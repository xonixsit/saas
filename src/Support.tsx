import React, { useState } from 'react';

const ContactSupport = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const target = e.target;
        setFormData({ ...formData, [target.id]: target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 p-6">
            <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-3xl w-full">
                <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
                    Need Help? We're Here for You
                </h2>
                <p className="text-center text-gray-500 mt-2 text-lg">
                    Reach out to us anytime and we’ll happily answer your questions.
                </p>
                {successMessage && <p className="text-green-500 text-center mt-4 font-medium">{successMessage}</p>}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit} aria-live="polite">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full pl-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Your Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            aria-label="Full Name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full pl-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="yourname@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            aria-label="Email Address"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            className="w-full pl-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="Describe your issue or inquiry..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            aria-label="Your Message"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-indigo-700 transition duration-300 shadow-md">
                        {loading ? 'Submitting...' : 'Get Support'}
                    </button>
                </form>
                <div className="text-center mt-8 text-gray-600">
                    <p>Or reach us directly at:</p>
                    <p className="text-indigo-500 font-semibold">support@example.com</p>
                    <p className="text-indigo-500 font-semibold">+1 (800) 123-4567</p>
                </div>
                <p className="text-center text-gray-600 mt-6">
                    Need immediate help? <a href="/faq" className="text-indigo-500 hover:underline font-medium">Check our FAQ</a>
                </p>
            </div>
        </div>
    );
};

export default ContactSupport;
