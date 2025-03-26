const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserCaseFileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
    default: "Nil",
  },
  contactEmail: {
    type: String,
    required: true,
  },
  lostAmount: {
    type: String,
    enum: [
      "Less than $5,000",
      "$5,000 - $10,000",
      "$10,000 - $20,000",
      "$20,000 - $40,000",
      "$40,000 - $80,000",
      "$80,000 - $100,000",
      "$100,000 - $150,000",
      "Over $150,000",
    ],
  },
  description: {
    type: String,
  },
  isClosed: {
    type: Boolean,
    default: false,
  },
  isActiveInvestigation: {
    type: Boolean,
    default: false,
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  adminComment: [{
    type: Schema.Types.ObjectId,
    ref: "AdminComment"
  }]
});

module.exports = mongoose.model("UserCaseFile", UserCaseFileSchema);