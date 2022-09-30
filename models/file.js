const mongoose = require("mongoose");
const { Schema } = mongoose;

const fileSchema = new Schema({
  department: {
    type: String,
    // required: true
  },
  subjectName: {
    type: String,
    // required: true,
  },
  filename: {
    type: String,
    // required:true
  },
  year: {
    type: Number,
  },
});

module.exports = mongoose.model("file", fileSchema);
