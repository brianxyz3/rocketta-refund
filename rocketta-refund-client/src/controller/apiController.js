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

const getCaseFiles = async (headerObj) => {
  try {
    const res = await fetch("/api/cases", {
      method: "GET",
      headers: headerObj,
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const getFileData = async (id, headerObj) => {
  try {
    const res = await fetch(`/api/cases/${id}`, {
      method: "GET",
      headers: headerObj,
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

const registerAdmin = async (newUser, headerObj) => {
  try {
    const res = await fetch("/api/registerAdmin", {
      method: "POST",
      headers: headerObj,
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const updateUserPermission = async (user, headerObj) => {
  try {
    const res = await fetch("/api/updateUserPermission", {
      method: "PUT",
      headers: headerObj,
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const updateCaseFile = async (id, newInfo, headerObj) => {
  try {
    const res = await fetch(`/api/cases/${id}`, {
      method: "PUT",
      headers: headerObj,
      body: JSON.stringify(newInfo),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const addAdminComment = async (id, newComment, headerObj) => {
  try {
    const res = await fetch(`/api/comments/${id}`, {
      method: "POST",
      headers: headerObj,
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
