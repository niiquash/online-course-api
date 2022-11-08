const express = require('express');
const router = express.Router();
const { addInstructor, deleteInstructor, getCourseInstructors, getSingleInstructor, updateInstructor } = require('../controllers/courseInstructors');

router.get('/', getCourseInstructors).get('/:id', getSingleInstructor)
router.post('/', addInstructor);
router.put('/:id', updateInstructor);
router.delete('/:id', deleteInstructor);

module.exports = router;