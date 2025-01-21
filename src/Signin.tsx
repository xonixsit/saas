import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        console.log("Signing in with:", { email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-blue-600">
            <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
                <h2 className="text-center text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mt-2">
                    Sign in to access your account securely.
                </p>

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
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '🙈' : '👁'}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <label className="flex items-center text-gray-600">
                            <input type="checkbox" className="mr-2" /> Remember me
                        </label>
                        <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot password?</a>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 shadow-md transition duration-300">
                        Sign In
                    </button>
                </form>

                <div className="text-center my-6 text-gray-500">OR</div>

                <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                    <FcGoogle className="text-2xl mr-2" />
                    Sign in with Google
                </button>

                <p className="text-center text-gray-600 mt-6">
                    Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
