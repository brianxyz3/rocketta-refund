const apiUrl = "https://rocketta-refund.onrender.com";

const submitCaseFile = async (newCase) => {
  try {
    const res = await fetch(`${apiUrl}/newCase`, {
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
    const res = await fetch(`${apiUrl}/cases`, {
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
    const res = await fetch(`${apiUrl}/cases/${id}`, {
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
    const res = await fetch(`${apiUrl}/register`, {
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
    const res = await fetch(`${apiUrl}/registerAdmin`, {
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
    const res = await fetch(`${apiUrl}/updateUserPermission`, {
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
    const res = await fetch(`${apiUrl}/cases/${id}`, {
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
    const res = await fetch(`${apiUrl}/comments/${id}`, {
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
    const res = await fetch(`${apiUrl}/login`, {
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
