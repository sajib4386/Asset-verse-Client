import React from 'react'
import { FaArrowRight, FaEnvelope } from 'react-icons/fa'

const ContactCTA = () => {
    return (
        <section className="py-16 bg-black text-white">
            <div className='container mx-auto'>
                <div className="p-10 text-center bg-blue-800 rounded-2xl m-5">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Simplify Asset Management?
                    </h2>
                    <p className="text-lg mb-8 text-blue-100">
                        Get started with AssetVerse today and take full control of your
                        company’s assets.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary transition">
                            <FaEnvelope />
                            Contact Us
                        </button>

                        <button className="border border-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-white hover:text-blue-600 transition">
                            Get Started
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactCTA