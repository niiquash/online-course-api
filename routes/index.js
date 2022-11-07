const express = require('express');
const loadUser = require('../middleware/loadUser');
const router = express.Router();

router
    .use('/courses', require('./courses'))
    .use('/courseInstructors', require('./courseInstructors'))
    .use('/courseDetails', require('./courseDetails'))
    // .use('/courseUsers', require('./courseUsers'))
    .use('/authorization', require('./authorization'))

module.exports = router;
