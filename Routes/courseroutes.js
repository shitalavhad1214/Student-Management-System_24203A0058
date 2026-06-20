const express = require("express");
const router = express.Router();

const { createCourse, updateCourse } =require("../Controllers/coursecontroller");

const protect = require("../Middleware/authMiddleware");

router.post("/", protect ,createCourse);
router.put("/:id" , protect, updateCourse);

module.exports=router;


