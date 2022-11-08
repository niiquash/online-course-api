const express = require('express');
const router = express.Router();
const { addCourse, deleteCourse, getCourses, getSingleCourse, updateCourse } = require('../controllers/courses');
const loadUser = require('../middleware/loadUser')

router.use([loadUser]);
router.get('/', getCourses).get('/:id', getSingleCourse);
router.post('/', addCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;

