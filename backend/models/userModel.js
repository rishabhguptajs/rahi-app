import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    preferences: {
        budget: {
            min: { type: Number, required: true, default: 0 },
            max: { type: Number, required: true, default: 1000 }
        },
        interests: [{ type: String }],
        dietaryPreferences: [{ type: String }],
        accomodationPreferences: [{ type: String }],
        travelPreferences: [{ type: String }],
    },
    trips: [{
        tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
        date: { type: Date, required: true, default: Date.now },
        duration: { type: Number, required: true, default: 1 },
        budget: { type: Number, required: true, default: 0 },
        interests: [{ type: String }],
        dietaryPreferences: [{ type: String }],
        accomodationPreferences: [{ type: String }],
        travelPreferences: [{ type: String }],
    }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    membershipStatus: { type: String, enum: ['free', 'premium'], default: 'free' },
    membershipExpiry: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema);

export default User;