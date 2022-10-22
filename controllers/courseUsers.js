const Users = require('../models/courseUsers');

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({ message: 'Cannot find users' })
    }
}

// Get single user
const getSingleUser = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: "Instructor with specified ID Not Found!" })
        }
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// Create user
const createUser = async (req, res) => {
    try {
        const user = new Users({
            username: req.body.username,
            userPassword: req.body.userPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            savedCourses: req.body.savedCourses,
            favoriteCourses: req.body.favoriteCourses
        })
        const savedUser = await user.save();
        // DISPLAY NEW CONTACT
        return res.status(201).json(savedUser._id);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
};

// Update user info
const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const users = await Users.findByIdAndUpdate(id, req.body, { userFindAndModify: false });
        if (!users) {
            return res.status(404).send({ message: `Cannot update contact with id=${id}` });
        } else {
            res.status(204).send({ message: 'User has been successfully updated.' });
        }
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
};

// Delete user info
const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        const removedUser = await Users.findByIdAndRemove(id);
        if (!removedUser) {
            res.status(404).send({ message: `Cannot delete user with id=${id}. User was not found` });
        } else {
            res.status(200).send({ message: 'User was deleted successfully!' });
        }
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}


module.exports = {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
}