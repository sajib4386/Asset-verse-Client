import React from "react";
import {FaLaptopCode,FaUserTie,FaCheckCircle,FaNetworkWired,FaCcStripe,FaChartPie,FaLock,FaTabletAlt,} from "react-icons/fa";

const Highlights = () => {
    return (
        <section className="py-20 bg-neutral text-neutral-content">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Powerful Features of{" "}
                        <span className="text-primary">AssetVerse</span>
                    </h2>
                    <p className="mt-4 text-neutral-content/70">
                        A secure, scalable and modern asset management system designed for growing organizations.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1 */}
                    <div className="flex gap-5 p-6 bg-neutral-focus border border-neutral-content/10 rounded-xl hover:border-primary hover:shadow-xl transition">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <FaLaptopCode className="text-2xl text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">
                                Smart Asset Management
                            </h3>
                            <p className="text-sm text-neutral-content/70 mt-1">
                                Centralized tracking for laptops, keyboards, chairs and all corporate equipment.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex gap-5 p-6 bg-neutral-focus border border-neutral-content/10 rounded-xl hover:border-primary hover:shadow-xl transition">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <FaUserTie className="text-2xl text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">
                                Role-Based Access Control
                            </h3>
                            <p className="text-sm text-neutral-content/70 mt-1">
                                Secure dashboards for HR Managers and Employees with proper permission handling.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex gap-5 p-6 bg-neutral-focus border border-neutral-content/10 rounded-xl hover:border-primary hover:shadow-xl transition">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <FaCheckCircle className="text-2xl text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">
                                Approval Workflow
                            </h3>
                            <p className="text-sm text-neutral-content/70 mt-1">
                                Fast asset request approval with automated employee affiliation.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex gap-5 p-6 bg-neutral-focus border border-neutral-content/10 rounded-xl hover:border-primary hover:shadow-xl transition">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <FaNetworkWired className="text-2xl text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">
                                Multi-Company Support
                            </h3>
                            <p className="text-sm text-neutral-content/70 mt-1">
                                Employees can work with multiple organizations seamlessly.
                            </p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="flex gap-5 p-6 bg-neutral-focus border border-neutral-content/10 rounded-xl hover:border-primary hover:shadow-xl transition">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <FaCcStripe className="text-2xl text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">
                                HR Package Upgrade
                            </h3>
                            <p className="text-sm text-neutral-content/70 mt-1">
                                HR Managers can upgrade their subscription packages to unlock more features and capacity.
                            </p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="flex gap-5 p-6 bg-neutral-focus border border-neutral-content/10 rounded-xl hover:border-primary hover:shadow-xl transition">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <FaChartPie className="text-2xl text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">
                                Analytics & Reports
                            </h3>
                            <p className="text-sm text-neutral-content/70 mt-1">
                                Visual dashboards with exportable PDF and print options.
                            </p>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="flex gap-5 p-6 bg-neutral-focus border border-neutral-content/10 rounded-xl hover:border-primary hover:shadow-xl transition">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <FaLock className="text-2xl text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">
                                Privacy & Authentication
                            </h3>
                            <p className="text-sm text-neutral-content/70 mt-1">
                                Secure authentication system with strong privacy protection for all user data.
                            </p>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="flex gap-5 p-6 bg-neutral-focus border border-neutral-content/10 rounded-xl hover:border-primary hover:shadow-xl transition">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <FaTabletAlt className="text-2xl text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">
                                Responsive UI
                            </h3>
                            <p className="text-sm text-neutral-content/70 mt-1">
                                Optimized for mobile, tablet and desktop devices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
