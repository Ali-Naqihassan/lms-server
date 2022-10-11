const { Schema, model } = require("mongoose")

const videoSchema = new Schema({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "course",
  },

  videoUrl: [String],
})

module.exports = model("video", videoSchema)
