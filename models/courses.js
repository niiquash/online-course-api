const mongoose = require('mongoose');

const coursesSchema = mongoose.Schema({
    courseName: { type: String, required: true },
    courseDuration: { type: String, required: true }
})

module.exports = {
    model: mongoose.model('courses', coursesSchema),
    schema: coursesSchema,
} 