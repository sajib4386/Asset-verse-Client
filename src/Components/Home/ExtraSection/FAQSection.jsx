import React from 'react'

const FAQSection = () => {
    return (
        <section className="py-16 bg-[#f3faff]">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    <div className="border p-5 rounded-lg shadow-lg shadow-gray-300">
                        <h3 className="font-semibold text-lg">
                            What is AssetVerse used for?
                        </h3>
                        <p className="text-gray-600 mt-2">
                            AssetVerse is a B2B asset management platform that helps companies
                            track physical assets and manage employee assignments efficiently.
                        </p>
                    </div>

                    <div className="border p-5 rounded-lg shadow-lg shadow-gray-300">
                        <h3 className="font-semibold text-lg">
                            Can multiple employees use the system?
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Yes, AssetVerse supports multiple roles including HR, Admin, and
                            Employees with secure access control.
                        </p>
                    </div>

                    <div className="border p-5 rounded-lg shadow-lg shadow-gray-300">
                        <h3 className="font-semibold text-lg">
                            Is AssetVerse suitable for small companies?
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Absolutely. AssetVerse is scalable and works perfectly for both
                            small startups and large enterprises.
                        </p>
                    </div>

                    <div className="border p-5 rounded-lg shadow-lg shadow-gray-300">
                        <h3 className="font-semibold text-lg">
                            Can I track asset history?
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Yes, you can view complete asset history including assignments,
                            returns, and status updates.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection