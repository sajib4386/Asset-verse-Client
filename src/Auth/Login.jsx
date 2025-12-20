import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loading from "../Components/Loading/Loading";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { signIn, loading, setLoading, setError } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginSubmit = (data) => {
        setLoading(true);
        setError("");

        signIn(data.email, data.password)
            .then(() => {
                setLoading(false);
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    timer: 1500,
                });
                navigate("/");
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
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

            <div className="bg-[#cae1f1] w-full max-w-lg p-5 lg:p-10 rounded-2xl border-2 border-amber-400 shadow-gray-500 shadow-lg">

                {/* LOGO */}
                <Link to="/" className="flex justify-center mb-5">
                    <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-3xl font-bold">A</span>
                        <span className="text-yellow-300 -ml-1 text-3xl font-bold">V</span>
                    </div>
                </Link>

                <h1 className="text-3xl text-center font-bold mb-1">
                    Welcome Back to
                    <span className="text-rose-600"> A</span>sset
                    <span className="text-rose-600">V</span>erse
                </h1>

                <p className="text-gray-700 font-medium text-center mb-6 text-sm">
                    Login to continue
                </p>

                {/* LOGIN FORM */}
                <form onSubmit={handleSubmit(handleLoginSubmit)} className="space-y-4">

                    {/* EMAIL */}
                    <div>
                        <label className="text-gray-700 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full mt-1 px-4 py-3 rounded-xl bg-[#f3f6fa]
                                border border-green-300 focus:outline-green-500 transition"
                            {...register("email", { required: true })}
                            placeholder="your@email.com"
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
                            {...register("password", { required: true })}
                            placeholder="******"
                        />

                        <button type="button" onClick={handlePassword} className="btn btn-xs absolute right-3 bottom-3">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>

                        {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button className="btn bg-secondary text-white w-full mt-4 rounded-xl">
                        Login
                    </button>
                </form>

                {/* NEW USER LINK */}
                <div className="text-center mt-4 text-sm">
                    <p className="mb-2">Don’t have an account? Register now:</p>
                    <div className="flex justify-center gap-2">
                        <Link
                            to="/employee-register"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                            Join as Employee
                        </Link>
                        <Link
                            to="/hr-register"
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                        >
                            Join as HR Manager
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
