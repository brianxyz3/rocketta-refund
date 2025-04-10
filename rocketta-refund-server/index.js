const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserCaseFile = require("./models/userCaseFile.js");
const {
  checkUserAuthorization,
  sanitizeCaseFile,
  sanitizeUser,
  sanitizeUserLogin,
} = require("./middleware.js");
const catchAsync = require("./utilities/catchAsync.js");
const User = require("./models/user.js");
const ExpressError = require("./utilities/ExpressError.js");
const AdminComment = require("./models/adminComment.js");
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/payback";
const PORT = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET || "notagoodsecret1";

mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, jwtSecret, {
    expiresIn: "24h",
  });
};

const checkUserAuthentication = (req, res, next) => {
  const token = req.headers?.authorization;
  try {
    if (token) {
      jwt.verify(token, jwtSecret);
      console.log("ran authentication middleware");
      next();
    } else {
      throw new ExpressError(401, "Invalid user token");
    }
  } catch (err) {
    console.log("error from authentication check middleware: " + err);
    throw new ExpressError(401, "Invalid user token"); 
  }
};

app.post(
  "/newCase",
  sanitizeCaseFile,
  checkUserAuthentication,
  catchAsync(async (req, res) => {
    try {
      const {id} = req.headers;
      const {
        firstName,
        lastName,
        contactPhone,
        contactEmail,
        lostAmount,
        description,
      } = req.body;
      const newCaseFile = new UserCaseFile({
        postedBy: id,
        firstName,
        lastName,
        contactPhone,
        contactEmail,
        lostAmount,
        description,
      });
      const user = await User.findById(id);
      if (user) {
        const caseFile = await newCaseFile.save();
        user.caseFiles.push(caseFile._id);
        await user.save();
        res.status(201).json(caseFile);
      }
    } catch (err) {
      console.log(err);
      throw new ExpressError(500, "An error occurred, " + err.message);
    }
  })
);

app.post(
  "/register",
  sanitizeUser,
  catchAsync(async (req, res) => {
    const { firstName, lastName, email, password, isAdmin } = req.body;
    const userArr = await User.find({ email });
    const user = userArr[0];

    try {
      if (!user) {
        const hashedPassword = await bcrypt
          .hash(password, 10)
          .catch((err) => console.log(err));
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hashedPassword,
          isAdmin,
        });
        console.log(newUser);
        const registeredUser = await newUser.save();
        const token = generateToken(registeredUser);
        res.status(201).json({
          token,
          email: registeredUser.email,
          id: registeredUser._id,
          isAdmin: registeredUser.isAdmin,
        });
      } else {
        res.json({ status: 400, message: "A user already exist with this email" });
        throw new ExpressError(400, "A user already exist with this email");
      }
    } catch (err) {
      console.log("An error occurred, " + err);
      throw new ExpressError(500, "Something went wrong. Try again.");
    }
  })
);

app.post(
  "/registerAdmin",
  sanitizeUser,
  checkUserAuthentication,
  checkUserAuthorization,
  catchAsync(async (req, res) => {
    const { firstName, lastName, email, password, isAdmin } = req.body;

    try {
      const userArr = await User.find({ email });

      const user = userArr[0];
      if (user) {
        throw new ExpressError(
          400,
          "A user profile already exists with that email"
        );
      } else if (!user) {
        console.log("IN REGISTER USER ");

        const hashedPassword = await bcrypt
          .hash(password, 10)
          .catch((err) => console.log(err));
        const newAdmin = new User({
          firstName,
          lastName,
          email,
          isAdmin,
          password: hashedPassword,
        });
        console.log(newAdmin);
        const registeredAdmin = await newAdmin.save();
        res.status(201).json({
          id: registeredAdmin._id,
        });
      }
    } catch (err) {
      console.log("An error occurred, " + err);
      throw new ExpressError(500, "Something went wrong. Try again.");
    }
  })
);

app.put(
  "/updateUserPermission",
  sanitizeUser,
  checkUserAuthentication,
  checkUserAuthorization,
  catchAsync(async (req, res) => {
    const { email } = req.body;

    try {
      const userArr = await User.find({ email });

      const user = userArr[0];
      if (user) {
        const { isAdmin } = user;
        const newAdmin = await User.findByIdAndUpdate(user._id, {
          isAdmin: !isAdmin,
        });

        res.status(200).json({
          id: newAdmin._id,
          permissionStatus: !isAdmin,
        });
      } else if (!user) {
        throw new ExpressError(404, "User profile not found");
      }
    } catch (err) {
      console.log("An error occurred, " + err);
      throw new ExpressError(500, "Something went wrong. Try again.");
    }
  })
);

app.put(
  "/cases/:id",
  checkUserAuthentication,
  checkUserAuthorization,
  catchAsync(async (req, res) => {
    const { id } = req.params;

    try {
      const caseFile = await UserCaseFile.findByIdAndUpdate(id, req.body);
      if (!caseFile) throw new ExpressError(404, "User profile not found");
      res.status(200).json({
        status: 200,
        message: "Operation succesful",
      });
    } catch (err) {
      console.log("An error occurred, " + err);
      throw new ExpressError(500, "Something went wrong. Try again.");
    }
  })
);

app.post(
  "/:caseId/comments",
  checkUserAuthentication,
  checkUserAuthorization,
  catchAsync(async (req, res) => {
    const { caseId } = req.params;

    try {
      const comment = new AdminComment(req.body);
      const newComment = await comment.save();
      const caseFile = await UserCaseFile.findById(caseId);
      caseFile.adminComment.push(newComment._id);
      await caseFile.save();
      if (!caseFile) throw new ExpressError(404, "User profile not found");
      res.status(200).json({
        status: 200,
        message: "Operation succesful",
      });
    } catch (err) {
      console.log("An error occurred, " + err);
      throw new ExpressError(500, "Something went wrong. Try again.");
    }
  })
);

app.post(
  "/login",
  sanitizeUserLogin,
  catchAsync(async (req, res) => {
    const { email, password } = req.body;
    console.log("user logging in");
    
    try {
      const userArr = await User.find({ email });
      const user = userArr[0];

      const isPassword = await bcrypt
        .compare(password, user.password)
        .catch((err) => {
          console.log("Error from bycrpt password compare: " + err);
          throw new ExpressError(400, "Invalid login credentials");
        });

      if (isPassword) {
        const token = generateToken(user);
        
        res.status(200)
        .json({
          token,
          email: user.email,
          isAdmin: user.isAdmin,
          id: user._id,
        });
      } else {
        throw new ExpressError(400, "Invalid login credentials");
      }
    } catch (err) {
      console.log("An error occurred, " + err);
      throw new ExpressError(401, "Invalid request");
    }
  })
);

app.get(
  "/cases",
  checkUserAuthentication,
  checkUserAuthorization,
  catchAsync(async (req, res) => {
    try {
      const cases = await UserCaseFile.find();
      res.status(200).json(cases);
    } catch (err) {
      console.log("Error occured fetching case file data " + err);
    }
  })
);

app.get(
  "/cases/:caseId",
  checkUserAuthentication,
  checkUserAuthorization,
  catchAsync(async (req, res) => {
    try {
      const { caseId } = req.params;
      const caseFile = await UserCaseFile.findById(caseId).populate("adminComment");
      res.status(200).json(caseFile);
    } catch (err) {
      console.log("Error occured in admin route fetching case file data " + err);
    }
  })
);

app.get(
  "/:userId/cases",
  checkUserAuthentication,
  catchAsync(async (req, res) => {
    try{
      const { userId } = req.params;
      const user = await User.findById(userId)
        .populate("caseFiles")
        .catch((err) => {
          console.log(err);
        });
      console.log(user);
      res.status(200).json({ history: user.caseFiles });
    } catch (err) {
      console.log("Error occured in user route fetching all case file data " + err);      
    }
  })
);

app.get(
  "/:userId/cases/:caseId",
  checkUserAuthentication,
  catchAsync(async (req, res) => {
    try{
      const { userId, caseId } = req.params;
      const file = await UserCaseFile.findById(caseId);
      if (file.postedBy == userId) {
        res.status(200).json(file);
      };
    } catch (err) {
      console.log("Error occured in user route fetching case file data " + err);      
    }
  })
);

app.all("*", (req, res, next) => {
  throw new ExpressError(404, "Page Not Found");
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something Went Wrong. Try Again" } = err;
  res.status(statusCode).json(`${statusCode} ${message}`);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
