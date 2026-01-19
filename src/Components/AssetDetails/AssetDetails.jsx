import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import Loading from "../Loading/Loading";
import useAxios from "../../Hooks/useAxios";

const AssetDetails = () => {
    const { id } = useParams();
    const axiosInstance = useAxios()

    const { data: asset, isLoading } = useQuery({
        queryKey: ["asset", id],
        queryFn: async () => {
            const res = await axiosInstance.get(`/assets/${id}`);
            return res.data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="p-6 bg-[#f3faff] min-h-screen">

            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <Link to="/all-assets" className="btn btn-outline btn-active mb-4">
                    ← Back
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Image */}
                    <div className="col-span-1">
                        <img
                            src={asset?.productImage}
                            alt=""
                            className="w-full h-96 rounded-xl"
                        />
                    </div>

                    {/* Details */}
                    <div className="col-span-2 space-y-4">

                        {/* Title */}
                        <h2 className="text-3xl font-bold">{asset?.productName}</h2>

                        {/* Overview */}
                        <div className="bg-gray-200 p-5 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">Overview</h3>
                            <p className="text-gray-600">
                                {asset?.description}
                            </p>
                        </div>

                        {/* Key information */}
                        <div className="bg-white p-4 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2">Key Information</h3>
                            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                                <div><span className="font-bold">Type:</span>  <span className="badge badge-warning badge-outline">{asset?.productType}</span></div>
                                <div><span className="font-bold">Available:</span> <span className="badge badge-info badge-outline">{asset?.availableQuantity}</span></div>
                                <div><span className="font-bold">Quantity:</span> <span className="badge badge-warning badge-outline">{asset?.productQuantity}</span></div>
                                <div><span className="font-bold">Company:</span> <span className="badge badge-info badge-outline">{asset?.companyName}</span></div>
                                <div><span className="font-bold">HR Email:</span> <span className="badge badge-warning badge-outline">{asset?.hrEmail}</span></div>
                                <div><span className="font-bold">Date:</span> <span className="badge badge-info badge-outline">{new Date(asset?.createdAt).toLocaleDateString()}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssetDetails;
