const coursecontroller = require("../Models/coursemodel");
//const bcrypt = require("bcrypt");

exports.createCourse = async (req, res) => {
    
    try {
        const { coursename , duration , courseteacher } = req.body;

        //const hpass = await bcrypt.hash(password ,10);

        const newCourse = await coursecontroller.create({
            coursename,
            duration,
            courseteacher,
        });
        return res.status(201).json({
            message: " Course Created Successfully",
            data: newCourse,
        });

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
        message: "Internal Server Error",
        });  
       
    }
    
};




exports.updateCourse = async (req, res) => {
    
    try {
        const { coursename , duration , courseteacher } = req.body;

        //const hpass = await bcrypt.hash(password ,10);

        const updateCourse = await coursecontroller.findByIdAndUpdate(req.params.id, {
            coursename,
            duration,
            courseteacher,
        },
        { new:true }
    );
        return res.status(200).json({
            message: " Course Updated Successfully",
            data: updateCourse,
        });

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
        message: "Internal Server Error",
        });  
       
    }
};


