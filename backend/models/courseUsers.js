const mongoose = require('mongoose');

const userEventsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    savedCourses: {
        type: Array,
        required: true
    },
    favoriteCourses: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('users', userEventsSchema);