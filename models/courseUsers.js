const mongoose = require('mongoose');
const courses = require('./courses')

const userSchema = new mongoose.Schema({
    identifier: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    givenName: { type: String, required: true },
    familyName: { type: String, required: true },
    locale: { type: String, required: true },
    picture: { type: String },
    favoriteCourse: [courses.schema]

}, { collection: 'users' })

module.exports = mongoose.model('users', userSchema);