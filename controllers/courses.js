const Courses = require('../models/courses');

// @desc    GET courses
// @route   GET /courses
const getCourses = async (req, res) => {
    if (!req.user) {
        return res.status(401).send({ message: 'Not Authenticated' })
    }
    try {
        const courses = await Courses.model.find();
        res.status(200).json(courses);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// @desc    GET course
// @route   GET /courses/:id
const getSingleCourse = async (req, res) => {
    try {
        const course = await Courses.model.findById(req.params.id);
        if (course == null) {
            return res.status(404).json({ message: "Course with specified ID Not Found!" })
        }
        res.status(200).json(course);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// @desc    CREATE course
// @route   POST /courses
const addCourse = async (req, res) => {
    try {
        const course = new Courses.model({
            courseName: req.body.courseName,
            courseDuration: req.body.courseDuration
        })
        const savedCourse = await course.save();
        return res.status(201).json(savedCourse._id);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// @desc    UPDATE course
// @route   PUT /courses/:id
const updateCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const course = await Courses.model.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
        if (!course) {
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
const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const removedCourse = await Courses.model.findByIdAndRemove(id);
        if (!removedCourse) {
            res.status(404).send({ message: `Cannot delete course with id=${id}` });
        } else {
            res.status(200).send({ message: 'Course was deleted successfully.' })
        }
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = {
    addCourse,
    deleteCourse,
    getCourses,
    getSingleCourse,
    updateCourse,
}