const express = require('express');
const router = express.Router();
const { getUsers, getSingleUser, createUser, updateUser } = require('../controllers/courseUsers')

router.get('/', getUsers).get('/:id', getSingleUser);
router.post('/', createUser);
// router.put('/:id', updateUser);

module.exports = router;
