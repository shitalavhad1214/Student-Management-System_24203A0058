const express = require("express");
const router = express.Router();

const { createCourse, updateCourse } =require("../Controllers/coursecontroller");

const protect = require("../Middleware/authMiddleware");

router.post("/", createCourse);
router.put("/:id" , updateCourse);

module.exports=router;


