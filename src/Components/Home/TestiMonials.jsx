import React from "react";
import img1 from "../../assets/sherlock.webp"
import img2 from "../../assets/tomcruise.webp"
import img3 from "../../assets/tommy-shelby.webp"

const Testimonials = () => {
    return (
        <section className="py-24 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container mx-auto px-6 text-center text-white">

                <h2 className="text-4xl font-bold mb-4">
                    Trusted by Modern Teams
                </h2>

                <p className="text-blue-50 mb-16 max-w-2xl mx-auto">
                    Companies rely on AssetVerse to stay organized, accountable, and efficient.
                </p>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 mb-20">

                    {/* Card 1 */}
                    <div className="relative bg-white rounded-3xl px-8 pt-16 pb-10 text-center shadow-xl hover:scale-105 transition">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                            <img
                               src={img1}
                                alt=""
                                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="flex justify-center mt-4 mb-4 text-yellow-400 text-xl">
                            ★★★★★
                        </div>

                        <p className="text-gray-600 mb-6">
                            “AssetVerse transformed how we track our equipment. Everything is now transparent and reliable.”
                        </p>

                        <h4 className="font-semibold text-gray-900">Sherlock Holmes</h4>
                        <span className="text-sm text-gray-500">
                            Operations Manager, TechCorp
                        </span>
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-white rounded-3xl px-8 pt-16 pb-10 text-center shadow-xl hover:scale-105 transition">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                            <img
                                src={img2}
                                alt=""
                                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="flex justify-center mt-4 mb-4 text-yellow-400 text-xl">
                            ★★★★★
                        </div>

                        <p className="text-gray-600 mb-6">
                            “The analytics alone save us hours every week. AssetVerse is a must-have tool.”
                        </p>

                        <h4 className="font-semibold text-gray-900">Tom Cruise</h4>
                        <span className="text-sm text-gray-500">
                            IT Head, SoftSolutions
                        </span>
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-white rounded-3xl px-8 pt-16 pb-10 text-center shadow-xl hover:scale-105 transition">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                            <img
                                src={img3}
                                alt=""
                                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="flex justify-center mt-4 mb-4 text-yellow-400 text-xl">
                            ★★★★★
                        </div>

                        <p className="text-gray-600 mb-6">
                            “Clean interface, powerful features, and zero confusion. Highly recommended.”
                        </p>

                        <h4 className="font-semibold text-gray-900">Tommy Shelby</h4>
                        <span className="text-sm text-gray-500">
                            Finance Manager, BizWorks
                        </span>
                    </div>

                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

                    <div className="py-8 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 shadow-lg">
                        <h3 className="text-4xl font-bold text-white">100+</h3>
                        <p className="text-blue-100 mt-2">
                            Companies Trust Us
                        </p>
                    </div>

                    <div className="py-8 rounded-2xl bg-linear-to-r from-emerald-600 to-teal-600 shadow-lg">
                        <h3 className="text-4xl font-bold text-white">50k+</h3>
                        <p className="text-emerald-100 mt-2">
                            Assets Managed
                        </p>
                    </div>

                    <div className="py-8 rounded-2xl bg-linear-to-r from-purple-600 to-pink-600 shadow-lg">
                        <h3 className="text-4xl font-bold text-white">99.9%</h3>
                        <p className="text-purple-100 mt-2">
                            System Reliability
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
