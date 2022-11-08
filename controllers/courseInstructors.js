const Instructors = require('../models/courseInstructors');

// @desc    GET instructors
// @route   GET /courseInstructors
const getCourseInstructors = async (req, res) => {
    try {
        const instructors = await Instructors.find();
        console.log(instructors);
        res.status(200).json(instructors);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

// @desc    GET instructor
// @route   GET /courseInstructors/:id
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

// @desc    CREATE instructor
// @route   POST /courseInstructors
const addInstructor = async (req, res) => {
    try {
        const instructor = new Instructors({
            courseName: req.body.courseName,
            instructorFirstName: req.body.instructorFirstName,
            instructorLastName: req.body.instructorLastName,
            instructorEmail: req.body.instructorEmail,
            instructorPhone: req.body.instructorPhone,
        })
        const savedInstructor = await instructor.save();
        return res.status(201).json(savedInstructor._id);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// @desc    UPDATE course
// @route   PUT /courseInstructors/:id
const updateInstructor = async (req, res) => {
    try {
        const id = req.params.id;
        const instructor = await Instructors.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
        if (!instructor) {
            return res.status(404).send({ message: `Cannot update instructor with id=${id}` });
        } else {
            res.status(204).send({ message: 'Instructor has been successfully updated.' });
        }
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

// @desc    DELETE course
// @route   DELETE /courseInstructors/:id
const deleteInstructor = async (req, res) => {
    try {
        const id = req.params.id;
        const removedInstructor = await Courses.findByIdAndRemove(id);
        if (!removedInstructor) {
            res.status(404).send({ message: `Cannot delete instructor with id=${id}` });
        } else {
            res.status(200).send({ message: 'Instructor was deleted successfully.' })
        }
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}
module.exports = {
    addInstructor,
    deleteInstructor,
    getCourseInstructors,
    getSingleInstructor,
    updateInstructor,
};