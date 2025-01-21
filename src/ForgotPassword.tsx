import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            setError("Please enter your email address.");
            return;
        }
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setError('');
        setSuccess(true);
        console.log("Reset link sent to:", email);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 to-blue-600">
            <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
            <h2 className="text-center text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
    Forgot Your Password
</h2>
                <p className="text-center text-gray-500 mb-6">
                    Enter your email below and we'll send you instructions to reset your password.
                </p>

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">Password reset link sent! Check your email.</p>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email Address
                        </label>
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

                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300"
                    >
                        Send Reset Link
                    </button>
                </form>

                <div className="text-center mt-6">
                    <a href="/login" className="text-blue-500 hover:underline">Back to Sign In</a>
                </div>

                <p className="text-center text-gray-400 mt-6 text-sm">
                    Need help? <a href="/support" className="underline">Contact Support</a>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
