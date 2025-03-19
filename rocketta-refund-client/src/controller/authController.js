import {
  registerUser,
  loginUser,
} from "../controller/apiController";

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 100).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; Secure; SameSite=Lax;`
}

const signUpWithEmailAndPassword = async (details) => {
  const newUser = await registerUser(details);
  initializeUser(newUser);
  return newUser;
};

const logInWithEmailAndPassword = async (details) => {
  const user = await loginUser(details);
  initializeUser(user);
  return user;
};

const signOut = () => {
  const splitCookie = document.cookie.split(";");
  splitCookie.forEach((cookie) => {
    const [name] = cookie.trim().split("=");
    setCookie(name, "", -100);
  });
};

const initializeUser = async (user) => {
  if (user && user.token) {
    setCookie("token", user.token, 2);
    setCookie("email", user.email, 2);
    setCookie("id", user.id, 2);
    setCookie("isAdmin", user.isAdmin, 2);
  }
};

export {
  signUpWithEmailAndPassword,
  logInWithEmailAndPassword,
  signOut,
};