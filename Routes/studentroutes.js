const express = require("express");
const router = express.Router();

const { createStudent, getStudents , updateStudent } = require("../Controllers/studentController");

router.post("/", createStudent);
router.get("/", getStudents);
router.put("/:id", updateStudent);

module.exports = router;