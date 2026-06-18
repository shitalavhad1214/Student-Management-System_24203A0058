const express = require("express");
const router = express.Router();

const {
  createTeacher,
  getTeachers,
} = require("../Controllers/teachercontroller");

const protect = require("../middleware/authmiddleware");

router.post("/",  createTeacher);
router.get("/",  getTeachers);

module.exports = router;