import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import Loading from "../Components/Loading/Loading";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const EmployeeRegister = () => {
    const { createUser, updateUser, loading } = useAuth();
    const navigate = useNavigate();
    const axiosInstance = useAxios()
    const [submitLoading, setSubmitLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleRegisterSubmit = (data) => {
        setSubmitLoading(true);
        const profileImg = data.photo[0];

        createUser(data.email, data.password)
            .then(() => {
                const formData = new FormData();
                formData.append("image", profileImg);
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`;

                axios.post(image_API_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;

                        const employeeInfo = {
                            name: data.name,
                            email: data.email,
                            dateOfBirth: data.dateOfBirth,
                            photoURL: photoURL
                        };

                        axiosInstance.post("/register/employee", employeeInfo)
                            .then(res => {
                                if (res.data.success) {
                                    updateUser({ displayName: data.name, photoURL })
                                        .then(() => {
                                            setSubmitLoading(false);
                                            Swal.fire({
                                                icon: "success",
                                                title: "Registration Successful",
                                                text: "Your employee account has been created.",
                                            });
                                            navigate("/");
                                        })
                                        .catch(err => {
                                            setSubmitLoading(false);
                                            Swal.fire({
                                                icon: "error",
                                                title: "Profile Update Failed",
                                                text: err.message,
                                            });
                                        });
                                } else {
                                    setSubmitLoading(false);
                                    Swal.fire({
                                        icon: "error",
                                        title: "Registration Failed",
                                        text: res.data.message || "Something went wrong",
                                    });
                                }
                            })
                            .catch(err => {
                                setSubmitLoading(false);
                                Swal.fire({
                                    icon: "error",
                                    title: "Registration Error",
                                    text: err.message,
                                });
                            });
                    })
                    .catch(err => {
                        setSubmitLoading(false);
                        Swal.fire({
                            icon: "error",
                            title: "Image Upload Failed",
                            text: err.message,
                        });
                    });
            })
            .catch(err => {
                setSubmitLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Account Creation Failed",
                    text: err.message,
                });
            });
    };

    const handlePassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }


    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#f3faff] p-10 h-full">

            <div className="bg-[#cae1f1] w-full max-w-xl p-5 lg:p-10 rounded-2xl border-2 border-amber-400 shadow-gray-500 shadow-lg">

                {/* Logo */}
                <Link to="/" className="flex justify-center mb-5">
                    <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-3xl font-bold">A</span>
                        <span className="text-yellow-300 -ml-1 text-3xl font-bold">V</span>
                    </div>
                </Link>

                <h1 className="text-3xl text-center font-bold mb-1">
                    Welcome To Our <span className="text-rose-600">A</span>sset<span className="text-rose-600">V</span>erse
                </h1>
                <p className="text-gray-700 font-medium text-center mb-6 text-sm">
                    Create your employee account
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit(handleRegisterSubmit)} className="space-y-4">

                    {/* NAME */}
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

                    {/* DOB */}
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

                    {/* EMAIL */}
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

                    {/* PASSWORD */}
                    <div className="relative">
                        <label className="text-gray-700 text-sm font-medium">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="w-full mt-1 px-4 py-3 rounded-xl bg-[#f3f6fa]
                                border border-green-300 focus:outline-green-500 transition"
                            {...register("password", { required: true, minLength: 6 })}
                            placeholder="******"
                        />

                        <button type="button" onClick={handlePassword} className="btn btn-xs absolute right-3 bottom-3">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>

                        {errors.password?.type === "required" && (
                            <p className="text-red-500 text-sm">Password required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-500 text-sm">Minimum 6 characters</p>
                        )}
                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        disabled={submitLoading}
                        className="btn bg-secondary text-white w-full mt-4 rounded-xl">
                        {submitLoading ? "Registering..." : "Register as Employee"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EmployeeRegister;



