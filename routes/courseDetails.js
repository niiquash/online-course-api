const express = require('express');
const router = express.Router();
const { getCourseDetails, getSingleCourse } = require('../controllers/courseDetails');

router.get('/', getCourseDetails).get('/:id', getSingleCourse);

module.exports = router;