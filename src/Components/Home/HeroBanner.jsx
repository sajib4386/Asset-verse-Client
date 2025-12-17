import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/hero1.jpg";

const HeroBanner = () => {
    return (
        <section className="bg-[#f3faff] p-20 border-t-2 border-t-gray-200 relative">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4">

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5 }}
                    className="lg:w-1/2"
                >
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-6 transition-colors duration-300 hover:text-rose-600">
                        Efficient HR & Asset Management for Your Company
                    </h1>

                    <p className="text-gray-700 mb-6">
                        Keep every company asset under control, from laptops and keyboards to office furniture, with real-time tracking and reporting.
                        Manage and assign assets to employees effortlessly, reducing loss and improving operational efficiency.
                    </p>
                    <a
                        className="bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transform transition duration-300 shadow-md hover:shadow-lg"
                    >
                        Get Started
                    </a>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5 }}
                    whileHover={{ scale: 1.2 }}
                    className="lg:w-1/2 mb-10 lg:mb-0"
                >
                    <img src={heroImage} alt="AssetVerse hero" className="w-full rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300" />
                </motion.div>

            </div>
        </section>
    );
};

export default HeroBanner;
