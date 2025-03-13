const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminCommentSchema = new Schema({
    comment: {
        type: String
    }
})

module.exports = mongoose.model("AdminComment", adminCommentSchema);