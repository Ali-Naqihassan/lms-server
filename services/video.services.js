const Video = require("../models/videoModel")
module.exports = {
  getVideos: async (req, res) => {
    try {
      const videos = await Video.find({ courseId: req.params.id })

      if (!videos.length)
        return res.status(404).json({ message: "No video available" })

      res.status(200).json({
        message: "videos fetched",
        videos: videos[0],
      })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
}
