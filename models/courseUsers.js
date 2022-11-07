const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    identifier: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    givenName: { type: String, required: true },
    familyName: { type: String, required: true },
    locale: { type: String, required: true },
    picture: { type: String },
}, { collection: 'users' })

module.exports = mongoose.model('users', userSchema);