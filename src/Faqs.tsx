import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How do I reset my password?",
            answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions to reset your password."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact customer support via email at support@example.com or call us at +1 (800) 123-4567."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 p-6">
            <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-3xl w-full">
                <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-gray-500 mt-2 text-lg">
                    Find answers to commonly asked questions below.
                </p>
                <div className="mt-8 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center bg-gray-100 px-5 py-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-gray-700">{faq.question}</span>
                                {openIndex === index ? <FaChevronUp className="text-indigo-500" /> : <FaChevronDown className="text-gray-500" />}
                            </button>
                            {openIndex === index && (
                                <div className="p-5 bg-white text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-600 mt-8">
                    Still have questions? <a href="/support" className="text-indigo-500 hover:underline font-medium">Contact us</a>
                </p>
            </div>
        </div>
    );
};

export default FAQ;
