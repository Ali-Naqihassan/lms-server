const { Schema, model } = require("mongoose")

const videoSchema = new Schema({
  courseid: {
    type: Schema.Types.ObjectId,
    ref: "course",
  },

  videoUrl: [String],
})

module.exports = model("video", videoSchema)
