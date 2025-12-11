import React, { useState } from "react";
import { useForm } from "react-hook-form";
import hrImg from "../assets/HR.png";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../Components/Loading/Loading";

const HRRegister = () => {
    const { createUser, updateUser } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);


    const handleHRRegisterSubmit = (data) => {
        setLoading(true);

        const profileImg = data.photo[0];
        const companyLogoImg = data.companyLogo[0];
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`;

        createUser(data.email, data.password)
            .then(() => {

                // Upload profile photo
                const profileForm = new FormData();
                profileForm.append("image", profileImg);

                axios.post(image_API_URL, profileForm)
                    .then(res => {
                        const profileURL = res.data.data.url;

                        // Upload company logo
                        const logoForm = new FormData();
                        logoForm.append("image", companyLogoImg);

                        axios.post(image_API_URL, logoForm)
                            .then(res => {
                                const companyLogoURL = res.data.data.url;

                                // Prepare HR info
                                const hrInfo = {
                                    name: data.name,
                                    email: data.email,
                                    dateOfBirth: data.dateOfBirth,
                                    photoURL: profileURL,
                                    companyName: data.companyName,
                                    companyLogo: companyLogoURL,
                                };

                                axiosSecure.post("/register/hr", hrInfo)
                                    .then(res => {
                                        if (res.data.success) {
                                            updateUser({
                                                displayName: data.name,
                                                photoURL: profileURL
                                            })
                                                .then(() => {
                                                    setLoading(false);
                                                    Swal.fire({
                                                        icon: "success",
                                                        title: "HR Registration Successful",
                                                        text: "Your HR Manager account has been created.",
                                                    });
                                                    navigate("/");
                                                })
                                                .catch(err => {
                                                    setLoading(false);
                                                    Swal.fire({
                                                        icon: "error",
                                                        title: "Profile Update Failed",
                                                        text: err.message,
                                                    });
                                                });
                                        } else {
                                            setLoading(false);
                                            Swal.fire({
                                                icon: "error",
                                                title: "Registration Failed",
                                                text: res.data.message || "Something went wrong",
                                            });
                                        }
                                    })
                                    .catch(err => {
                                        setLoading(false);
                                        Swal.fire({
                                            icon: "error",
                                            title: "Registration Error",
                                            text: err.message,
                                        });
                                    });

                            })
                            .catch(err => {
                                setLoading(false);
                                Swal.fire({
                                    icon: "error",
                                    title: "Company Logo Upload Failed",
                                    text: err.message,
                                });
                            });

                    })
                    .catch(err => {
                        setLoading(false);
                        Swal.fire({
                            icon: "error",
                            title: "Profile Photo Upload Failed",
                            text: err.message,
                        });
                    });

            })
            .catch(err => {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Account Creation Failed",
                    text: err.message,
                });
            });
    };

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="flex flex-col lg:flex-row w-full h-screen overflow-hidden">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#f3faff] p-10 h-full">

                <div className="bg-[#cae1f1] w-full max-w-xl p-5 lg:p-10 m-3 lg:m-0 rounded-2xl border-2 border-amber-400 shadow-gray-500 shadow-lg">

                    {/* Logo */}
                    <div className="flex justify-center mb-5">
                        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-3xl font-bold">A</span>
                            <span className="text-yellow-300 -ml-1 text-3xl font-bold">V</span>
                        </div>
                    </div>

                    <h1 className="text-3xl text-center font-bold mb-1">
                        Welcome To Our <span className="text-rose-600">A</span>sset<span className="text-rose-600">V</span>erse
                    </h1>
                    <p className="text-gray-700 font-medium text-center mb-6 text-sm">
                        Create your HR Manager account
                    </p>

                    {/* FORM */}
                    <form onSubmit={handleSubmit(handleHRRegisterSubmit)} className="space-y-4">

                        {/* Name */}
                        <div>
                            <label className="text-gray-700 text-sm font-medium">Full Name</label>
                            <input
                                className="w-full mt-1 px-4 py-3 rounded-xl bg-[#f3f6fa]
                                border border-green-300 focus:outline-green-500 transition"
                                {...register("name", { required: true })}
                                placeholder="Your Name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                        </div>

                        {/* PHOTO */}
                        <div>
                            <label className="text-gray-700 text-sm font-medium">Profile Photo</label>
                            <input
                                type="file"
                                className="file-input w-full mt-1 rounded-xl bg-[#f3f6fa]
                                border border-green-300 focus:outline-green-500 transition"
                                {...register("photo", { required: true })}
                            />
                            {errors.photo && <p className="text-red-500 text-sm">Photo is required</p>}
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label className="text-gray-700 text-sm font-medium">Date of Birth</label>
                            <input
                                type="date"
                                className="w-full mt-1 px-4 py-3 rounded-xl bg-[#f3f6fa]
                                border border-green-300 focus:outline-green-500 transition"
                                {...register("dateOfBirth", { required: true })}
                            />
                            {errors.dateOfBirth && <p className="text-red-500 text-sm">DOB is required</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-gray-700 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full mt-1 px-4 py-3 rounded-xl bg-[#f3f6fa]
                                border border-green-300 focus:outline-green-500 transition"
                                {...register("email", { required: true })}
                                placeholder="example@email.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-gray-700 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                className="w-full mt-1 px-4 py-3 rounded-xl bg-[#f3f6fa]
                                border border-green-300 focus:outline-green-500 transition"
                                {...register("password", { required: true, minLength: 6 })}
                                placeholder="******"
                            />
                            {errors.password?.type === "required" && (
                                <p className="text-red-500 text-sm">Password required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-500 text-sm">Minimum 6 characters</p>
                            )}
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="text-gray-700 text-sm font-medium">Company Name</label>
                            <input
                                className="w-full mt-1 px-4 py-3 rounded-xl bg-[#f3f6fa]
                                border border-green-300 focus:outline-green-500 transition"
                                {...register("companyName", { required: true })}
                                placeholder="Company Name"
                            />
                            {errors.companyName && <p className="text-red-500 text-sm">Company Name is required</p>}
                        </div>

                        {/* Company Logo */}
                        <div>
                            <label className="text-gray-700 text-sm font-medium">Company Logo</label>
                            <input
                                type="file"
                                className="file-input w-full mt-1 rounded-xl bg-[#f3f6fa]
                                border border-green-300 focus:outline-green-500 transition"
                                {...register("companyLogo", { required: true })}
                            />
                            {errors.companyLogo && <p className="text-red-500 text-sm">Company Logo is required</p>}
                        </div>



                        {/* Submit */}
                        <button className="btn bg-secondary text-white w-full mt-4 rounded-xl">
                            Register as HR Manager
                        </button>
                    </form>
                </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="w-full lg:w-1/2 h-full">
                <img
                    src={hrImg}
                    alt=""
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default HRRegister;
