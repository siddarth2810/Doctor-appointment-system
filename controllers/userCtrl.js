const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    try {

        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            console.warn('User already exists:', req.body.email);
            return res.status(200).send({ success: false, message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new userModel({ ...req.body, password: hashedPassword });
        await newUser.save();

        console.log('User registered successfully:', req.body.email);
        res.status(201).send({ success: true, message: 'Registration successful' });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};

const loginController = async (req, res) => {
};

module.exports = { registerController, loginController };
