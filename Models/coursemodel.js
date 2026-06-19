const mongoose = require("mongoose");

const courseschema = new mongoose.Schema(
    {
        coursename: String,
        duration: String,
        courseteacher: String,
    },{
        timestamps: true,
        collection: 'course',
    });

    const course = mongoose.model('course', courseschema);

    module.exports = course;