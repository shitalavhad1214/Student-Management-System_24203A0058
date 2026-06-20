const protect = require("../Middleware/authMiddleware");
const express = require("express");
const router = express.Router();

const { createStudent, getStudents , updateStudent , deleteStudent } = require("../Controllers/studentController");

router.post("/", protect ,createStudent);
router.get("/", protect ,getStudents);
router.put("/:id", protect , updateStudent);
router.delete("/:id", protect ,deleteStudent);

module.exports = router;