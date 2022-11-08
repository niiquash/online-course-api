const express = require('express');
const router = express.Router();
const { addDetails, deleteDetail, getCourseDetails, getSingleCourse, updateDetail } = require('../controllers/courseDetails');

router.get('/', getCourseDetails).get('/:id', getSingleCourse);
router.post('/', addDetails);
router.put('/:id', updateDetail);
router.delete('/:id', deleteDetail);

module.exports = router;