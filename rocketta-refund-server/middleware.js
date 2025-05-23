const validator = require("validator");
const ExpressError = require("./utilities/ExpressError.js");
const User = require("./models/user.js");


const sanitizeCaseFile = (req, res, next) => {
  try {
    const caseFile = req.body;
    caseFile.firstName = validator.escape(req.body.firstName);
    caseFile.lastName = validator.escape(req.body.lastName);
    caseFile.contactPhone = validator.escape(req.body.contactPhone);
    caseFile.contactEmail = validator.normalizeEmail(req.body.contactEmail);
    caseFile.description = validator.escape(req.body.description);
    return next();
  } catch (err) {
    console.log("error from sanitizeCaseFile middleware: " + err);
  }
};

const sanitizeUser = (req, res, next) => {
  try {
    const user = req.body;   
    user.email = validator.normalizeEmail(req.body.email);
    if(user.firstName || user.lastName || user.password) {
      user.firstName = validator.escape(req.body.firstName);
      user.lastName = validator.escape(req.body.lastName);
      user.password = validator.escape(req.body.password);
    };
    return next();
  } catch (err) {
    console.log("error from sanitizeUser middleware: " + err);
  }
};

const sanitizeUserLogin = (req, res, next) => {
  try {
    const user = req.body;
    user.email = validator.normalizeEmail(req.body.email);
    user.password = validator.escape(req.body.password);
    return next();
  } catch (err) {
    console.log("error from sanitizeUserLogin middleware: " + err);
  }
};

const sanitizeComment = (req, res, next) => {
  try {
    const data = req.body;
    data.comment = validator.escape(req.body.comment);
    return next();
  } catch (err) {
    console.log("error from sanitizeComment middleware: " + err);
    
  }
}



const checkUserAuthorization = async (req, res, next) => {
  try {   
    if (req.headers?.admin == "true") {
      const { id } = req.headers;
      const user = await User.findById(id);
      if (user?.isAdmin) {
        next();
      } else {
        throw new ExpressError(403, "Access Denied");
      }
    } else {
      throw new ExpressError(403, "Access Denied");
    }
  } catch (err) {
    console.log("error from authorization check middleware: " + err);
  }
};

module.exports = {
  sanitizeCaseFile,
  sanitizeUser,
  sanitizeUserLogin,
  sanitizeComment,
  checkUserAuthorization,
};
