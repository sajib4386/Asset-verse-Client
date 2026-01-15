import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

const NewsLetter = () => {
    return (
        <section className="py-20 bg-linear-to-br from-indigo-900 via-slate-900 to-black">
            <div className="max-w-4xl mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="rounded-3xl bg-white/10 border border-white/20 shadow-xl"
                >
                    <div className="p-10 md:p-14 text-center">

                        {/* Icon */}
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md">
                            <FaEnvelopeOpenText className="text-4xl" />
                        </div>

                        {/* Content */}
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="text-gray-300 max-w-xl mx-auto mb-8">
                            Get the latest updates, product improvements, and asset management
                            insights directly to your inbox.
                        </p>

                        {/* Form */}
                        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-indigo-400"
                            />
                            <button
                                className="px-8 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-indigo-500 to-purple-600"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className="text-xs text-gray-400 mt-6">
                            We respect your privacy. Unsubscribe at any time.
                        </p>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsLetter;
