const CourseDetails = require('../models/courseDetails');

// Get courses
const getCourseDetails = async (req, res) => {
    try {
        const details = await CourseDetails.find({});
        console.log(details);
        res.status(200).json(details);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }

}

// Get single course
const getSingleCourse = async (req, res) => {
    try {
        const details = await CourseDetails.findById(req.params.id);
        if (details == null) {
            return res.status(404).json({ message: "Course with specified ID Not Found!" })
        }
        res.status(200).json(details);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

module.exports = {
    getCourseDetails,
    getSingleCourse
};