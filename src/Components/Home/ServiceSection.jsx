import { motion } from "framer-motion";
import { FaLaptop, FaCheckCircle, FaBuilding, FaBoxOpen, FaUndoAlt, FaUserShield, } from "react-icons/fa";

const ServiceSection = () => {
    return (
        <section className="py-20 bg-linear-to-br from-indigo-900 via-slate-900 to-black">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        AssetVerse delivers smart, secure, and role-based asset management
                        solutions with a modern glassmorphism design.
                    </p>
                </div>

                {/* Services Card*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.06 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border bg-white/10 border-amber-500"
                    >
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md">
                                <FaLaptop className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Asset Management
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Manage company assets like laptops, chairs, keyboards, and
                                equipment from a centralized digital dashboard.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.06 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border bg-white/10 border-amber-500"
                    >
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md">
                                <FaCheckCircle className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Asset Request & Approval
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Employees request assets while HR managers approve or reject
                                requests with full transparency.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.06 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border bg-white/10 border-amber-500"
                    >
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-linear-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                                <FaBuilding className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Multi-Company Tracking
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Track and manage assets assigned from multiple companies in a
                                single unified view.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        whileHover={{ scale: 1.06 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border bg-white/10 border-amber-500"
                    >
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md">
                                <FaBoxOpen className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Direct Asset Assignment
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Assign assets directly to affiliated employees without waiting
                                for asset requests.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 5 */}
                    <motion.div
                        whileHover={{ scale: 1.06 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border bg-white/10 border-amber-500"
                    >
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-linear-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-md">
                                <FaUndoAlt className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Returnable Asset Management
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Maintain full control over returnable assets and their lifecycle
                                with easy return management.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 6 */}
                    <motion.div
                        whileHover={{ scale: 1.06 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border bg-white/10 border-amber-500"
                    >
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-linear-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center text-white shadow-md">
                                <FaUserShield className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Role-Based Secure Access
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Protect company data with strict role-based access for HR
                                managers and employees.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
