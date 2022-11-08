const CourseDetails = require('../models/courseDetails');

// @desc    GET courseDetails
// @route   GET /courseDetails
const getCourseDetails = async (req, res) => {
    try {
        const details = await CourseDetails.find();
        console.log(details);
        res.status(200).json(details);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }

}

// @desc    GET courseDetail
// @route   GET /courseDetails/:id
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

// @desc    CREATE courseDetails
// @route   POST /courseDetails
const addDetails = async (req, res) => {
    try {
        const details = new CourseDetails({
            courseName: req.body.courseName,
            courseDuration: req.body.courseDuration,
            courseDescription: req.body.courseDescription,
            coursePrice: req.body.coursePrice,
            courseInstructor: req.body.courseInstructor,
            courseRating: req.body.courseRating,
            courseTopics: req.body.courseTopics,
            courseRelatedArticles: req.body.courseRelatedArticles,
            courseLength: req.body.courseLength,
        });
        const savedDetails = await details.save();
        return res.status(201).json(savedDetails._id);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// @desc    UPDATE courseDetails
// @route   PUT /courseDetails/:id
const updateDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const detail = await CourseDetails.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
        if (!detail) {
            return res.status(404).send({ message: `Cannot update course with id=${id}` });
        } else {
            res.status(204).send({ message: 'Course has been successfully updated.' });
        }
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

// @desc    DELETE course
// @route   DELETE /courses/:id
const deleteDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const removedDetail = await CourseDetails.findByIdAndRemove(id);
        if (!removedDetail) {
            res.status(404).send({ message: `Cannot delete course with id=${id}` });
        } else {
            res.status(200).send({ message: 'Course was deleted successfully.' })
        }
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = {
    addDetails,
    deleteDetail,
    getCourseDetails,
    getSingleCourse,
    updateDetail,
};