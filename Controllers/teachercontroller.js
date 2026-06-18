const Teacher = require("../Models/teachermodel");

const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);

    res.status(201).json({
      message: "Teacher created successfully",
      teacher,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();

    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTeacher,
  getTeachers,
};