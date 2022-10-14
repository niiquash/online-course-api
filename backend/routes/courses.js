const express = require('express');
const router = express.Router();
const { getCourses, getSingleCourse } = require('../controllers/courses');

router.get('/', getCourses).get('/:id', getSingleCourse);

module.exports = router;

