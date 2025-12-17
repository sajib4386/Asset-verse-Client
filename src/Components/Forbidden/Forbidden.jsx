import React from "react";
import { Link } from "react-router";
import noEntry from "../../Animation/forbidden.json"
import Lottie from "lottie-react";

const Forbidden = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
            <Lottie animationData={noEntry} className="w-32"></Lottie>
            <h1 className="text-5xl font-bold text-red-600 mb-4">403</h1>
            <h2 className="text-2xl font-semibold mb-2">Forbidden Access</h2>
            <p className="mb-4">You don’t have permission to view this page.</p>
            <Link to="/" className="btn bg-blue-600 text-white rounded hover:bg-primary hover:text-black">
                Go to Home
            </Link>
        </div>
    );
};

export default Forbidden;
