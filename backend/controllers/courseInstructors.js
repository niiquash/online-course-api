const Instructors = require('../models/courseInstructors');

// Get courses
const getCourseInstructors = async (req, res) => {
    try {
        const instructors = await Instructors.find();
        console.log(instructors);
        res.status(200).json(instructors);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const getSingleInstructor = async (req, res) => {
    try {
        const instructor = await Instructors.findById(req.params.id);
        if (instructor == null) {
            return res.status(404).json({ message: "Instructor with specified ID Not Found!" })
        }
        res.status(200).json(instructor);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = {
    getCourseInstructors,
    getSingleInstructor
};