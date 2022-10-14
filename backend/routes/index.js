const express = require('express');
const router = express.Router();

router
    .use('/courses', require('./courses'))
    .use('/courseInstructors', require('./courseInstructors'))
    .use('/courseDetails', require('./courseDetails'))

module.exports = router;
