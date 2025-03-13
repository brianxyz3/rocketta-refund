import {
  registerUser,
  loginUser,
} from "../controller/apiController";

const aDay = 24 * 60 * 60 * 1000;

const signUpWithEmailAndPassword = async (details) => {
  const newUser = await registerUser(details);
  await initializeUser(newUser);
  return newUser;
};

const logInWithEmailAndPassword = async (details) => {
  const user = await loginUser(details);
  initializeUser(user);
  return user;
};

const signOut = () => initializeUser(null);

const initializeUser = async (user) => {
  if (user && user.token) {
    await cookieStore.set({
      name: "token",
      value: user.token,
      secure: true,
      httpOnly: true,
      expires: Date.now() + aDay,
    });

    await cookieStore.set({
      name: "userId",
      value: user.id,
      expires: Date.now() + aDay,
    });

    await cookieStore.set({
      name: "userEmail",
      value: user.email,
      secure: true,
      httpOnly: true,
      expires: Date.now() + aDay,
    });

    await cookieStore.set({
      name: "isAdmin",
      value: user.isAdmin,
      secure: true,
      httpOnly: true,
      expires: Date.now() + aDay,
    });
  } else {
    await cookieStore.delete("token");
    await cookieStore.delete("userEmail");
    await cookieStore.delete("userId");
    await cookieStore.delete("isAdmin");
  }
};

export {
  signUpWithEmailAndPassword,
  logInWithEmailAndPassword,
  signOut,
};
