import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";
import useAuth from "../../Hooks/useAuth";
import { NavLink } from "react-router";

const AddAsset = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth()
    const [submitLoading, setSubmitLoading] = useState(false);


    const onSubmit = async (data) => {
        setSubmitLoading(true);

        try {
            const formData = new FormData();
            formData.append("image", data.productImage[0]);

            const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`;

            const imgRes = await axios.post(image_API_URL, formData);
            const photoURL = imgRes.data.data.url;

            const assetData = {
                productName: data.productName,
                productImage: photoURL,
                productType: data.productType,
                productQuantity: Number(data.productQuantity),
                hrEmail: data.hrEmail,
            };

            const res = await axiosSecure.post("/assets/add", assetData);

            if (res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Asset Added!",
                    text: "The asset has been successfully added.",
                    timer: 2000,
                    showConfirmButton: false,
                });
                reset({
                    productName: "",
                    productImage: "",
                    productType: "",
                    productQuantity: "",
                    hrEmail: user?.email,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: res.data.message || "Something went wrong.",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Something went wrong while adding the asset.",
            });
        } finally {
            setSubmitLoading(false);
        }
    };

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#cae1f1] px-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg shadow-gray-400 overflow-hidden flex flex-col md:flex-row">

                {/* Left Side */}
                <div className="md:w-1/2 w-full bg-blue-500 text-white flex flex-col items-center justify-center p-8 md:p-10 md:rounded-r-4xl rounded-r-none">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
                        Hello, Welcome!
                    </h2>
                    <p className="mb-6 text-center text-sm md:text-base">
                        Add and manage your company assets easily
                    </p>
                    <NavLink to="/dashboard/asset-list" className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-500 transition">
                        Asset Panel
                    </NavLink>
                </div>

                {/* Right Side Form */}
                <div className="md:w-1/2 w-full p-6 md:p-10">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
                        Add New Asset
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        {/* Product Name */}
                        <div>
                            <input
                                type="text"
                                {...register("productName", { required: true })}
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Product Name"
                            />
                            {errors.productName && (
                                <p className="text-red-500 text-sm mt-1">
                                    Product Name is required
                                </p>
                            )}
                        </div>

                        {/* Product Image */}
                        <div>
                            <input
                                type="file"
                                {...register("productImage", { required: true })}
                                className="file-input file-input-bordered w-full bg-gray-100"
                            />
                            {errors.productImage && (
                                <p className="text-red-500 text-sm mt-1">
                                    Product Image is required
                                </p>
                            )}
                        </div>

                        {/* Product Type */}
                        <div>
                            <select
                                {...register("productType", { required: true })}
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                <option value="">Select Product Type</option>
                                <option value="Returnable">Returnable</option>
                                <option value="Non-returnable">Non-returnable</option>
                            </select>
                            {errors.productType && (
                                <p className="text-red-500 text-sm mt-1">
                                    Product Type is required
                                </p>
                            )}
                        </div>

                        {/* Quantity */}
                        <div>
                            <input
                                type="number"
                                {...register("productQuantity", { required: true })}
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Product Quantity"
                                min="1"
                            />
                            {errors.productQuantity && (
                                <p className="text-red-500 text-sm mt-1">
                                    Product Quantity is required
                                </p>
                            )}
                        </div>

                        {/* HR Email */}
                        <div>
                            <input
                                type="email"
                                {...register("hrEmail", { required: true })}
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none"
                                defaultValue={user?.email}
                                readOnly
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={submitLoading}
                            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
                            {submitLoading ? "Adding..." : "Add Asset"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default AddAsset;
