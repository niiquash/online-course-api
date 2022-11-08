const mongoose = require('mongoose');

const courseInstructorsSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    instructorFirstName: { type: String, required: true },
    instructorLastName: { type: String, required: true },
    instructorEmail: { type: String, required: true },
    instructorPhone: { type: String, required: true },
});

module.exports = mongoose.model('instructors', courseInstructorsSchema);