import React from "react";
import { FaMobileAlt, FaSyncAlt, FaCloud, FaLock, FaChartPie, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";

const Features = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    className="text-4xl font-bold mb-6 text-gray-800 bg-amber-50 btn p-3"
                    initial={{ opacity: 0, y: -70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                >
                    Our Features
                </motion.h2>

                <motion.p
                    className="text-gray-600 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    AssetVerse comes packed with powerful features to simplify asset management and streamline your workflow.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <motion.div
                        className="bg-amber-50 border-2 border-blue-300 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow shadow-gray-400 duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaMobileAlt className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Mobile Friendly</h3>
                        <p className="text-gray-600">Access your asset data anytime, anywhere with our responsive mobile interface.</p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="bg-amber-50 border-2 border-blue-300 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow shadow-gray-400 duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <FaSyncAlt className="text-4xl text-green-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Real-time Updates</h3>
                        <p className="text-gray-600">Keep your asset records up-to-date automatically across your team.</p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="bg-amber-50 border-2 border-blue-300 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow shadow-gray-400 duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <FaCloud className="text-4xl text-purple-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Cloud Storage</h3>
                        <p className="text-gray-600">Securely store all asset information in the cloud for easy access and backup.</p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                         className="bg-amber-50 border-2 border-blue-300 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow shadow-gray-400 duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <FaLock className="text-4xl text-red-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Access</h3>
                        <p className="text-gray-600">Control who can view and manage assets with our robust permissions system.</p>
                    </motion.div>

                    {/* Card 5*/}
                    <motion.div
                         className="bg-amber-50 border-2 border-blue-300 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow shadow-gray-400 duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2.5 }}
                    >
                        <FaChartPie className="text-4xl text-yellow-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Analytics & Reports</h3>
                        <p className="text-gray-600">Generate detailed reports and visual insights on asset usage and performance.</p>
                    </motion.div>

                    {/* Card 6 */}
                    <motion.div
                         className="bg-amber-50 border-2 border-blue-300 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow shadow-gray-400 duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3 }}
                    >
                        <FaBolt className="text-4xl text-indigo-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Performance</h3>
                        <p className="text-gray-600">Experience smooth, lag-free navigation even with large numbers of assets.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;
