const Courses = require('../models/courses');

// Get courses
const getCourses = async (req, res) => {
    //    if (!req.user) {
    //         return res.status(401).send({ message: 'Not Authenticated' })
    //     } 
    try {
        const courses = await Courses.find();
        res.status(200).json(courses);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const getSingleCourse = async (req, res) => {
    try {
        const course = await Courses.findById(req.params.id);
        if (course == null) {
            return res.status(404).json({ message: "Course with specified ID Not Found!" })
        }
        res.status(200).json(course);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = {
    getCourses,
    getSingleCourse
}