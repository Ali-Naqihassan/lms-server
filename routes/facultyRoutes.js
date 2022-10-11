const express = require("express")
const passport = require("passport")
const upload = require("../utils/multer")

const router = express.Router()

const {
  fetchStudents,
  markAttendence,
  facultyLogin,
  getAllSubjects,
  updatePassword,
  forgotPassword,
  postOTP,
  uploadMarks,
  updateProfile,
  uploadFile,
  uploadVideo,
  facultyCreateCourse,
  facultyGetCourses,
  facultyGetVideos,
} = require("../controller/facultyController")

router.post("/login", facultyLogin)
router.get("/get/course", facultyGetCourses)
router.post("/create/course", facultyCreateCourse)
router.post("/upload/video/:id", uploadVideo)
router.get("/get/videos/:id", facultyGetVideos)
router.post("/forgotPassword", forgotPassword)

router.post("/postOTP", postOTP)

router.post(
  "/updateProfile",
  passport.authenticate("jwt", { session: false }),
  upload.single("avatar"),
  updateProfile
)

router.post(
  "/fetchStudents",
  passport.authenticate("jwt", { session: false }),
  fetchStudents
)

router.post(
  "/fetchAllSubjects",
  passport.authenticate("jwt", { session: false }),
  getAllSubjects
)

router.post(
  "/markAttendence",
  passport.authenticate("jwt", { session: false }),
  markAttendence
)

router.post(
  "/uploadMarks",
  passport.authenticate("jwt", { session: false }),
  uploadMarks
)

router.post(
  "/updatePassword",
  passport.authenticate("jwt", { session: false }),
  updatePassword
)

router.post("/uploadFile", upload.single("filename"), uploadFile)

module.exports = router
