import React from "react";
import { FaLaptop, FaUsers, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="py-20 bg-[#f3faff] mt-20">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    className="text-4xl font-bold mb-6 text-black underline underline-offset-8"
                    initial={{ opacity: 0, y: -70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                >
                    About AssetVerse
                </motion.h2>

                <motion.p
                    className="text-gray-600 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, x: 70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                >
                    AssetVerse is a comprehensive digital platform that helps companies efficiently manage
                    their physical assets like laptops, chairs, keyboards, and more, while keeping track of
                    which employee has which equipment. Streamline your asset management and eliminate
                    asset loss.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow shadow-gray-400 duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <div className="mb-4">
                            <FaLaptop className="text-4xl text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Efficient Asset Tracking</h3>
                        <p className="text-gray-600">
                            Easily monitor who has which equipment, reducing asset loss and improving accountability.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow shadow-gray-400 duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2.5 }}
                    >
                        <div className="mb-4">
                            <FaUsers className="text-4xl text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Employee Assignment Management</h3>
                        <p className="text-gray-600">
                            Assign assets to employees seamlessly and track their usage history over time.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow shadow-gray-400 duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3 }}
                    >
                        <div className="mb-4">
                            <FaChartLine className="text-4xl text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Insightful Analytics</h3>
                        <p className="text-gray-600">
                            Gain actionable insights into asset utilization, lifecycle, and maintenance needs.
                        </p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow shadow-gray-400 duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3.5 }}
                    >
                        <div className="mb-4">
                            <FaShieldAlt className="text-4xl text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure & Reliable</h3>
                        <p className="text-gray-600">
                            Ensure that your company’s valuable equipment is tracked and protected efficiently.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
