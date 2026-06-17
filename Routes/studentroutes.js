const express = require("express");
const router = express.Router();

const { createStudent, getStudents } = require("../Controllers/studentController");

router.post("/", createStudent);
router.get("/", getStudents);

module.exports = router;