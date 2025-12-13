import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";


const AssetList = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();
    const [search, setSearch] = useState("");

    const { data: assets = [] } = useQuery({
        queryKey: ["assets", user?.email, search],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/assets?email=${user?.email}&search=${search}`);
            return res.data;
        }
    });

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">
                Asset List ({assets.length})
            </h2>

            <input
                type="text"
                placeholder="Search asset..."
                className="input input-bordered mb-4 w-full max-w-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Asset Image</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Date & Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assets.map((asset, index) => (
                            <tr key={asset._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={asset?.productImage}
                                        className="w-12 h-12 rounded"
                                    />
                                </td>
                                <td>{asset?.productName}</td>
                                <td>{asset?.productType}</td>
                                <td>{asset?.productQuantity}</td>
                                <td>
                                    {new Date(asset.createdAt).toLocaleString()}
                                </td>
                                <td className="space-x-2">
                                    <button
                                        className="btn btn-sm btn-info"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        className="btn btn-sm btn-error"
                                    >
                                        <RiDeleteBin5Fill />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {assets.length === 0 && (
                    <p className="text-center py-4 text-gray-500">
                        No assets found
                    </p>
                )}
            </div>
        </div>
    );
};

export default AssetList;
