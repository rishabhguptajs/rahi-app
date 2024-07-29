// Waitlist.js

"use client"
import React, { useState } from "react"
import axios from 'axios'
import { BackgroundBeams } from "../components/ui/background-beams"
import Input from "./input"
import { Toaster, toast } from "react-hot-toast"

export function Waitlist() {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async () => {
        if (email) {
            try {
                const toastLoad = toast.loading('Joining the waitlist...');
                const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/waitlist/join`, { email });
                toast.dismiss(toastLoad);
                toast.success(res.data.message);
            } catch (error) {
                alert(`There was an error joining the waitlist: ${error.response?.data?.message || error.message}`);
            }
        } else {
            alert('Please enter a valid email address.');
        }
    }

    return (
        <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <Toaster />
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-6">
                    Join the waitlist
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 mb-4 text-sm text-center relative z-10">
                    Welcome to <span className="bg-yellow-300 p-1 rounded-md text-lg text-zinc-800">Rahi</span>, your own travel app. <br />
                    Discover the world like never before with Rahi! Our cutting-edge
                    AI-powered travel planner crafts personalized itineraries tailored to
                    your preferences, budget, and interests. Be the first to experience
                    seamless travel planning, exclusive deals, and special discounts by
                    joining our waitlist. Say goodbye to travel stress and hello to
                    unforgettable adventures with Rahi – your ultimate guide to
                    discovering hidden gems.
                </p>

                <div className="my-4">
                    <Input
                        placeholders={[
                            "your@email.com",
                            "email@yours.com",
                            "your@email.com",
                            "email@yours.com",
                        ]}
                        handleChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
            <BackgroundBeams />
        </div>
    )
}
