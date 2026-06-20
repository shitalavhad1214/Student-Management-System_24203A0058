const express = require("express");
const router = express.Router();

const {
  createTeacher,
  getTeachers,
} = require("../Controllers/teachercontroller");

const protect = require("../middleware/authmiddleware");

router.post("/",  protect ,createTeacher);
router.get("/",  protect ,getTeachers);

module.exports = router;