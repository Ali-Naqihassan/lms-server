const Video = require("../models/videoModel")
module.exports = {
  getVideos: async (req, res) => {
    try {
      console.log(req.params)
      const videos = await Video.find(req.params)
      if (!videos.length)
        return res.status(404).json({ message: "No video available" })

      res.status(200).json({
        message: "videos fetched",
        videos,
      })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
}
