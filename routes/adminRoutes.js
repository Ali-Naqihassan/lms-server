const express = require("express")
const router = express.Router()
const passport = require("passport")
const upload = require("../utils/multer")
const {
  uploadFile,
  adminLogin,
  addFaculty,
  addStudent,
  addSubject,
  getAllFaculty,
  getAllStudents,
  getAllSubjects,
  addAdmin,
  getAllStudent,
  getAllSubject,
} = require("../controller/adminController")

router.post("/login", adminLogin)
router.post("/addAdmin", addAdmin)
router.post(
  "/getAllFaculty",
  passport.authenticate("jwt", { session: false }),
  getAllFaculty
)
router.post(
  "/getAllStudent",
  passport.authenticate("jwt", { session: false }),
  getAllStudent
)
router.post(
  "/getAllSubject",
  passport.authenticate("jwt", { session: false }),
  getAllSubject
)
router.post("/addFaculty", addFaculty)
router.get(
  "/getFaculties",
  passport.authenticate("jwt", { session: false }),
  getAllFaculty
)
router.post(
  "/addStudent",

  addStudent
)
router.get(
  "/getStudents",
  passport.authenticate("jwt", { session: false }),
  getAllStudents
)
router.post(
  "/addSubject",
  passport.authenticate("jwt", { session: false }),
  addSubject
)
router.get(
  "/getSubjects",
  passport.authenticate("jwt", { session: false }),
  getAllSubjects
)
router.post("/uploadFile", upload.single("file"), uploadFile)

module.exports = router
