const mongoose = require('mongoose');

const courseDetailsSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    courseDuration: { type: String, required: true },
    courseDescription: { type: String, required: true },
    coursePrice: { type: String, required: true },
    courseInstructor: { type: String, required: true },
    courseRating: { type: String, required: true },
    courseTopics: { type: Array, required: true },
    courseRelatedArticles: { type: Array, required: true },
    courseLength: { type: String, required: true }
});

module.exports = mongoose.model('details', courseDetailsSchema);