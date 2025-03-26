const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  caseFiles:[{
    type: Schema.Types.ObjectId,
    ref: "UserCaseFile"
  }]
});

module.exports = mongoose.model("User", UserSchema);
