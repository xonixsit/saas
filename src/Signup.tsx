import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        console.log("Signing up with:", { email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-600">
            <div className="bg-white rounded-lg shadow-lg p-10 max-w-lg w-full">
                <h2 className="text-center text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">Join Us Today</h2>
                <p className="text-center text-gray-500 mt-2">
                Create your free account in just a few minutes</p>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-6 py-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Choose a strong password"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Confirm your password"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300">
                        Get Started
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log In</a>
                </p>

                <p className="text-center text-gray-400 mt-4 text-sm">We value your privacy. Read our <a href="/privacy" className="underline">Privacy Policy</a></p>
            </div>
        </div>
    );
};

export default Signup;
