const { Schema, model } = require("mongoose")

// const sectionSchema = new Schema({
//   sectionName: { type: String },
//   videoDetails: [
//     {
//       videoUrl: String,
//       videoTitle: String,
//     },
//   ],
// })

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
