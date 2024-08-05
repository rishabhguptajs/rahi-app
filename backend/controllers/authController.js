import e from "express";
import User from "../models/userModel.js";

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

        const user = new User({
            name,
            email,
            password
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