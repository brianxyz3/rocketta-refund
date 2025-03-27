const apiUrl = "https://rocketta-refund.onrender.com";

const submitCaseFile = async (headerObj, newCase) => {
  try {
    const res = await fetch(`${apiUrl}/newCase`, {
      method: "POST",
      headers: headerObj,
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

const getCasesForUser = async (headerObj, userId) => {
  try {
    const res = await fetch(`${apiUrl}/${userId}/cases`, {
      method: "GET",
      headers: headerObj,
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const getFileForUser = async (headerObj, userId, caseId) => {
  try {
    const res = await fetch(`${apiUrl}/${userId}/cases/${caseId}`, {
      method: "GET",
      headers: headerObj,
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return console.log(`An error occurred, ${err}`);
  }
};

const getFileData = async (headerObj, id) => {
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

const addAdminComment = async (caseId, newComment, headerObj) => {
  try {
    const res = await fetch(`${apiUrl}/${caseId}/comments`, {
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
  getCasesForUser,
  getFileForUser,
  updateCaseFile,
  addAdminComment,
};
