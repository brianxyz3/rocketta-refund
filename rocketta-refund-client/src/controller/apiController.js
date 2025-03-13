const token = await cookieStore.get("token");
const userId = await cookieStore.get("userId");
const auth = await cookieStore.get("isAdmin");

const submitCaseFile = async (newCase) => {
  try {
    const res = await fetch("/api/newCase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCase),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const getCaseFiles = async () => {
  try {
    const res = await fetch("/api/cases", {
      method: "GET",
      headers: {
        authorization: token?.value,
        id: userId?.value,
        admin: auth.value,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const getFileData = async (id) => {
  try {
    const res = await fetch(`/api/cases/${id}`, {
      method: "GET",
      headers: {
        authorization: token?.value,
        id: userId?.value,
        admin: auth.value,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const registerUser = async (newUser) => {
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const registerAdmin = async (newUser) => {
  try {
    const res = await fetch("/api/registerAdmin", {
      method: "POST",
      headers: {
        authorization: token?.value,
        id: userId?.value,
        admin: auth.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const updateUserPermission = async (newUser) => {
  try {
    const res = await fetch("/api/updateUserPermission", {
      method: "PUT",
      headers: {
        authorization: token?.value,
        id: userId?.value,
        admin: auth.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const updateCaseFile = async (id, newInfo) => {
  try {
    const res = await fetch(`/api/cases/${id}`, {
      method: "PUT",
      headers: {
        authorization: token?.value,
        id: userId?.value,
        admin: auth.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInfo),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const addAdminComment = async (id, newComment) => {
  try {
    const res = await fetch(`/api/comments/${id}`, {
      method: "POST",
      headers: {
        authorization: token?.value,
        id: userId?.value,
        admin: auth.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const loginUser = async (user) => {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

export {
  submitCaseFile,
  registerUser,
  loginUser,
  registerAdmin,
  updateUserPermission,
  getCaseFiles,
  getFileData,
  updateCaseFile,
  addAdminComment,
};
