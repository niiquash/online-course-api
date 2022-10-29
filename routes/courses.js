const express = require('express');
const router = express.Router();
const { getCourses, getSingleCourse } = require('../controllers/courses');
const loadUser = require('../middleware/loadUser')

router.use([loadUser]);
router.get('/', getCourses).get('/:id', getSingleCourse);

module.exports = router;

