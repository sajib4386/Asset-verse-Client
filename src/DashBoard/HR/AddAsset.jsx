import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";
import useAuth from "../../Hooks/useAuth";

const AddAsset = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const { user, loading, setLoading } = useAuth()

    const onSubmit = async (data) => {
        setLoading(true);

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
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="max-w-xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Add New Asset</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Product Name */}
                <div>
                    <label className="block font-medium mb-1">Product Name</label>
                    <input
                        type="text"
                        {...register("productName", { required: true })}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Product Name"
                    />
                    {errors.productName && <p className="text-red-500 text-sm">Product Name is required</p>}
                </div>

                {/* Product Image */}
                <div>
                    <label className="block font-medium mb-1">Product Image</label>
                    <input
                        type="file"
                        {...register("productImage", { required: true })}
                        className="file-input w-full mt-1 rounded-xl bg-[#f3f6fa]"
                    />
                    {errors.productImage && <p className="text-red-500 text-sm">Product Image is required</p>}
                </div>

                {/* Product Type */}
                <div>
                    <label className="block font-medium mb-1">Product Type</label>
                    <select
                        {...register("productType", { required: true })}
                        className="w-full border px-3 py-2 rounded"
                    >
                        {errors.productType && <p className="text-red-500 text-sm">Product Type is required</p>}

                        <option value="Returnable">Returnable</option>
                        <option value="Non-returnable">Non-returnable</option>
                    </select>
                </div>

                {/* Quantity */}
                <div>
                    <label className="block font-medium mb-1">Product Quantity</label>
                    <input
                        type="number"
                        {...register("productQuantity", { required: true })}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="10"
                        min="1"
                    />
                    {errors.productQuantity && <p className="text-red-500 text-sm">Product Quantity is required</p>}
                </div>

                {/* HR Email */}
                <div>
                    <label className="block font-medium mb-1">HR Email</label>
                    <input
                        type="email"
                        {...register("hrEmail", { required: true })}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="hr@company.com"
                        defaultValue={user?.email}
                        readOnly
                    />

                    {errors.hrEmail && <p className="text-red-500 text-sm">Email is required</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Add Asset
                </button>
            </form>
        </div>
    );
};

export default AddAsset;
