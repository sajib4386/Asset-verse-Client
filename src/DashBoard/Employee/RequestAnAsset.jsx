import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router";

const RequestAnAsset = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [note, setNote] = useState("");

    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [sort, setSort] = useState("newest");
    const [page, setPage] = useState(1);
    const [dateFilter, setDateFilter] = useState("");
    const limit = 12;


    const { data = {}, isLoading } = useQuery({
        queryKey: ["employeeAssets", search, type, sort, dateFilter, page],
        queryFn: async () => {
            const res = await axiosSecure.get(`/employee/assets?search=${search}&type=${type}&sort=${sort}&dateFilter=${dateFilter}&page=${page}&limit=${limit}`);
            return res.data;
        }
    });


    const totalPages = Math.ceil((data.total || 0) / limit);


    const handleRequest = () => {
        const requestData = {
            assetId: selectedAsset._id,
            requesterName: user.displayName,
            requesterEmail: user.email,
            note
        };

        axiosSecure.post("/requests", requestData)
            .then(res => {
                if (res.data.success) {
                    setSelectedAsset(null);
                    setNote("");
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Asset request submitted.",
                        timer: 2000,
                        showConfirmButton: false,
                    });
                }
                else {
                    Swal.fire({
                        icon: "warning",
                        title: "Oops!",
                        text: res.data.message,
                    });
                }
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong!',
                    text: 'Please try again later.',
                });
            });
    };

    return (
        <div className="p-6 bg-[#f3faff]">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Available Assets: {data.assets?.length}
            </h2>

            <div className="flex flex-wrap gap-4 justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search by name"
                    className="input input-bordered"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                />

                <select
                    className="select select-bordered"
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                        setPage(1);
                    }}
                >
                    <option value="">All Types</option>
                    <option value="Returnable">Returnable</option>
                    <option value="Non-returnable">Non-Returnable</option>
                </select>

                <select
                    className="select select-bordered"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>

                {/* Date Filter */}
                <select
                    className="select select-bordered"
                    value={dateFilter}
                    onChange={(e) => {
                        setDateFilter(e.target.value);
                        setPage(1);
                    }}
                >
                    <option value="">All Dates</option>
                    <option value="7">Last 7 Days</option>
                    <option value="30">Last 30 Days</option>
                    <option value="90">Last 90 Days</option>
                </select>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {/* Skeleton Loader */}
                {isLoading && Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="card h-full bg-white border shadow-md rounded-xl animate-pulse"
                    >
                        <div className="h-60 bg-gray-300 rounded-t-xl"></div>
                        <div className="card-body">
                            <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
                            <div className="h-3 bg-gray-300 rounded w-5/6 mb-1"></div>

                            <div className="mt-4 space-y-2">
                                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                                <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                            </div>

                            <div className="h-9 bg-gray-300 rounded w-full mt-4"></div>
                        </div>
                    </div>
                ))}

                {/* Asset Cards */}
                {!isLoading && data.assets?.map(asset => (
                    <div key={asset._id} className="card bg-base-100 shadow">
                        {/* Image */}
                        <figure>
                            <img src={asset?.productImage} className="h-60 w-full" />
                        </figure>

                        <div className="card-body flex flex-col">
                            {/* Title */}
                            <h2 className="card-title text-lg font-semibold">
                                {asset?.productName}
                            </h2>

                            {/* Short Description */}
                            <p className="text-sm text-gray-600 line-clamp-2">
                                {asset?.shortDescription}
                            </p>

                            {/* Meta Info */}
                            <div className="text-sm text-gray-500 mt-2 space-y-1">
                                <p><span className="font-bold">Type:</span> {asset?.productType}</p>
                                <p><span className="font-bold">Available:</span> {asset?.availableQuantity}</p>
                                <p>
                                    <span className="font-bold">Date:{" "}</span>
                                    {new Date(asset?.createdAt || Date.now()).toLocaleDateString()}
                                </p>
                            </div>

                            <div className="mt-auto pt-4 flex gap-2">
                                <Link
                                    to={`/assets/${asset._id}`}
                                    className="btn btn-primary btn-sm w-1/2 text-black"
                                >
                                    View Details
                                </Link>

                                <button
                                    className="btn btn-primary btn-sm w-1/2 text-black"
                                    onClick={() => setSelectedAsset(asset)}
                                >
                                    Request
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* Request Modal */}
            {selectedAsset && (
                <dialog open className="modal modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">
                            Request {selectedAsset?.productName}
                        </h3>

                        <textarea
                            className="textarea textarea-bordered w-full mt-3"
                            placeholder="Write a note (optional)"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />

                        <div className="modal-action">
                            <button className="btn btn-success" onClick={handleRequest}>
                                Submit Request
                            </button>
                            <button
                                className="btn"
                                onClick={() => setSelectedAsset(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </dialog>
            )}

            <div className="flex justify-center items-center gap-2 mt-8">

                <button
                    className="btn btn-sm"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </button>

                {[...Array(totalPages).keys()].map(num => (
                    <button
                        key={num}
                        className={`btn btn-sm ${page === num + 1 ? "btn-error" : ""}`}
                        onClick={() => setPage(num + 1)}
                    >
                        {num + 1}
                    </button>
                ))}

                <button
                    className="btn btn-sm"
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>

        </div>


    );
};

export default RequestAnAsset;
