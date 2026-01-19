import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import blog1 from "../../assets/blogs1.jpg"
import blog2 from "../../assets/blogs2.jpg"
import blog3 from "../../assets/blogs3.jpg"
import blog4 from "../../assets/blogs4.jpg"
import blog5 from "../../assets/blogs5.avif"
import blog6 from "../../assets/blogs6.avif"

const Blogs = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Our Blogs</h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {/* Blog Card 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <img
                        src={blog1}
                        alt=""
                        className="w-full h-48"
                    />
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                            <FaRegCalendarAlt className="mr-2" /> Jan 15, 2026
                        </div>
                        <h2 className="text-xl font-semibold mb-2">
                            Maximizing Asset Utilization in Corporates
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Learn strategies to efficiently manage company assets and reduce wastage in your organization.
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Blog Card 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <img
                        src={blog2}
                        alt=""
                        className="w-full h-48"
                    />
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                            <FaRegCalendarAlt className="mr-2" /> Jan 12, 2026
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Top Tools for Asset Tracking</h2>
                        <p className="text-gray-700 mb-4">
                            Discover modern tools and software that make asset tracking easier for your team.
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Blog Card 3 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <img
                        src={blog3}
                        alt=""
                        className="w-full h-48"
                    />
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                            <FaRegCalendarAlt className="mr-2" /> Jan 10, 2026
                        </div>
                        <h2 className="text-xl font-semibold mb-2">
                            Best Practices for Corporate Asset Management
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Tips and techniques to keep your corporate assets organized and efficient.
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Blog Card 4 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <img
                        src={blog4}
                        alt=""
                        className="w-full h-48"
                    />
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                            <FaRegCalendarAlt className="mr-2" /> Jan 8, 2026
                        </div>
                        <h2 className="text-xl font-semibold mb-2">
                            How Technology is Changing Asset Management
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Exploring the role of AI and IoT in modern asset tracking systems.
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Blog Card 5 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <img
                        src={blog5}
                        alt=""
                        className="w-full h-48"
                    />
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                            <FaRegCalendarAlt className="mr-2" /> Jan 5, 2026
                        </div>
                        <h2 className="text-xl font-semibold mb-2">
                            Streamlining Corporate Asset Workflows
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Learn how to simplify asset management processes to save time and resources.
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Blog Card 6 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                    <img
                        src={blog6}
                        alt=""
                        className="w-full h-48"
                    />
                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                            <FaRegCalendarAlt className="mr-2" /> Jan 1, 2026
                        </div>
                        <h2 className="text-xl font-semibold mb-2">
                            Employee Asset Engagement Tips
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Strategies to increase employee engagement and accountability with company assets.
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
