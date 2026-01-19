import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaLinkedin, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: `Thank you, ${formData.name}!`,
            text: 'We received your message.',
            showConfirmButton: false,
            timer: 2000
        });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto p-6 min-h-screen"
        >
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Contact Info */}
                <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="mb-6 text-gray-700">
                        We’d love to hear from you. Fill out the form or reach us through the info below.
                    </p>

                    {/* Contact Details */}
                    <div className="flex items-center mb-4">
                        <FaUser className="text-blue-600 text-xl mr-3" />
                        <span>John Doe - Support Manager</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-blue-600 text-xl mr-3" />
                        <a href="mailto:support@assetverse.com" className="hover:underline text-gray-800">
                            support@assetverse.com
                        </a>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaCommentDots className="text-blue-600 text-xl mr-3" />
                        <a href="tel:+1234567890" className="hover:underline text-gray-800">
                            +1 234 567 890
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4 mt-6">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-800 text-2xl"
                        >
                            <FaFacebook></FaFacebook>
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-800 text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://x.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-500 text-2xl"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-gray-900 text-2xl"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <FaUser className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                required
                            />
                        </div>

                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                required
                            />
                        </div>

                        <div className="relative">
                            <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
