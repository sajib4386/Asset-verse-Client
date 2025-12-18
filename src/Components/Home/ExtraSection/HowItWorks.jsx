import React from 'react'
import { FaBoxOpen, FaBuilding, FaChartLine, FaClipboardCheck, FaUsers } from 'react-icons/fa'

const HowitWorks = () => {
    return (
        <section className="py-20 bg-[#f3faff]">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12">
                    How AssetVerse Works
                </h2>

                <div className="grid md:grid-cols-2 gap-14">
                   
                   {/* Left Side */}
                    <div className="relative border-l-2 border-primary pl-8 space-y-10">

                        {/* STEP 1 */}
                        <div className="relative">
                            <span className="absolute -left-[42px] top-0 bg-primary text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                                1
                            </span>
                            <FaBuilding className="text-primary text-xl mb-2" />
                            <h3 className="font-semibold text-lg">
                                HR Registers Company
                            </h3>
                            <p className="text-gray-600">
                                HR managers register their company, receive a default subscription
                                package (5 employees), and can instantly start managing assets.
                            </p>
                        </div>

                        {/* STEP 2 */}
                        <div className="relative">
                            <span className="absolute -left-[42px] top-0 bg-primary text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                                2
                            </span>
                            <FaUsers className="text-primary text-xl mb-2" />
                            <h3 className="font-semibold text-lg">
                                Employees Join Independently
                            </h3>
                            <p className="text-gray-600">
                                Employees register with personal details only. They can log in
                                immediately but remain unaffiliated until an asset request is approved.
                            </p>
                        </div>

                        {/* STEP 3 */}
                        <div className="relative">
                            <span className="absolute -left-[42px] top-0 bg-primary text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                                3
                            </span>
                            <FaBoxOpen className="text-primary text-xl mb-2" />
                            <h3 className="font-semibold text-lg">
                                HR Adds Company Assets
                            </h3>
                            <p className="text-gray-600">
                                HR managers add returnable and non-returnable assets into the
                                company inventory with quantities and tracking details.
                            </p>
                        </div>
                    </div>

                   {/* Right Side */}
                    <div className="relative border-l-2 border-secondary pl-8 space-y-10">

                        {/* STEP 4 */}
                        <div className="relative">
                            <span className="absolute -left-[42px] top-0 bg-secondary text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                                4
                            </span>
                            <FaClipboardCheck className="text-secondary text-xl mb-2" />
                            <h3 className="font-semibold text-lg">
                                Asset Request & Approval
                            </h3>
                            <p className="text-gray-600">
                                Employees request assets. HR reviews requests, approves or rejects them,
                                and auto-affiliates employees on their first approved request.
                            </p>
                        </div>

                        {/* STEP 5 */}
                        <div className="relative">
                            <span className="absolute -left-[42px] top-0 bg-secondary text-white w-9 h-9 rounded-full flex items-center justify-center font-bold">
                                5
                            </span>
                            <FaChartLine className="text-secondary text-xl mb-2" />
                            <h3 className="font-semibold text-lg">
                                Track, Return & Analyze
                            </h3>
                            <p className="text-gray-600">
                                Assets are tracked from assignment to return. HR gets real-time
                                insights, reports, and analytics for better decision-making.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowitWorks