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
    const user = new Users({
        username: req.body.username,
        userPassword: req.body.userPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        savedCourses: req.body.savedCourses,
        favoriteCourses: req.body.favoriteCourses
    })
    try {
        const savedUser = await user.save();
        // DISPLAY NEW CONTACT
        return res.json(savedUser._id);
    } catch (e) {
        res.json({ message: e.message })
    }
};

// Update user info
const updateUser = async (req, res) => {
    try {
        // if (!req.body) {
        //     return res.status(400).send({
        //         message: "Data to be updated cannot be empty!"
        //     });
        // }
        const id = req.params.id;
        const users = await Users.findByIdAndUpdate(id, req.body, { userFindAndModify: false });
        if (!users) {
            return res.status(404).send({ message: `Cannot update contact with id=${id}` });
        } else {
            res.send({ message: 'User has been successfully updated.' });
        }
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
};

module.exports = {
    getUsers,
    getSingleUser,
    createUser,
    updateUser
}