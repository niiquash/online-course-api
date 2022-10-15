const express = require('express');
const router = express.Router();
const { getCourseInstructors, getSingleInstructor } = require('../controllers/courseInstructors');

router.get('/', getCourseInstructors).get('/:id', getSingleInstructor)

module.exports = router;