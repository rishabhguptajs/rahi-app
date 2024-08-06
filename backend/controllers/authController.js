import e from "express";
import User from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelpers.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Name is required', success: false });
        }

        if (!email) {
            return res.status(400).json({ message: 'Email is required', success: false });
        }

        if (!password) {
            return res.status(400).json({ message: 'Password is required', success: false });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters', success: false });
        }

        let hashedPassword = hashPassword(password);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                name,
                email
            },
            success: true
        });
    } catch (error) {
        console.log('Error in registerController:', error);
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required', success: false });
        }

        if (!password) {
            return res.status(400).json({ message: 'Password is required', success: false });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        const isMatch = comparePasswords(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password', success: false });
        }

        res.status(200).json({
            message: 'User logged in successfully',
            user: {
                name: user.name,
                email: user.email
            },
            success: true
        });
    } catch (error) {
        console.log('Error in loginController:', error);
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
}