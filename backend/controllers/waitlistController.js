import Waitlist from "../models/waitlistModel.js";

export const waitlistAdd = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const newWaitlistEntry = new Waitlist({ email });
        await newWaitlistEntry.save();

        return res.status(200).json({ 
            message: 'Successfully joined the waitlist',
            success: true
         });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists in the waitlist' });
        }
        return res.status(500).json({ 
            message: 'Server error',
            success: false
         });
    }
}