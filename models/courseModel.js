const { Schema, model } = require("mongoose")

const courseSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "faculty",
  },
  title: {
    type: String,
  },

  category: {
    type: String,
  },
  courseImg: {
    type: String,
  },
})

module.exports = model("course", courseSchema)
