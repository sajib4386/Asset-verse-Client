import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router";
import errorImg from "../../Animation/error_404.json";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const NotFound = () => {
    return (
        <div>
            <NavBar />

            <div className="bg-[#f3faff]"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh",
                    textAlign: "center",
                    padding: "20px"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: "800px",
                        margin: "0 auto",
                    }}
                >
                    <Lottie
                        animationData={errorImg}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>

                <div className="mt-4 flex justify-center w-full">
                    <Link
                        to="/"
                        className="px-5 py-2 bg-indigo-600 text-white rounded-md font-semibold"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default NotFound;
