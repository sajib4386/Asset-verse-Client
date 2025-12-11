import React from "react";
import { useForm } from "react-hook-form";
import hrImg from "../assets/HR.png";

const HRRegister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("HR Form Data:", data);
    };

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
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

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
