import React, { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";


const AssetList = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalAssets, setTotalAssets] = useState(0);


    const assetMOdalRef = useRef()
    const [selectedAsset, setSelectedAsset] = useState(null)


    const { data, refetch: assetRefetch } = useQuery({
        queryKey: ["assets", user?.email, search, page],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/assets?email=${user?.email}&search=${search}&page=${page}&limit=10`
            );
            setTotalPages(res.data.totalPages);
            setTotalAssets(res.data.total);
            return res.data.data;
        }
    });


    const handleEditModal = (asset) => {
        setSelectedAsset(asset);
    };

    useEffect(() => {
        if (selectedAsset) {
            assetMOdalRef.current.showModal();
        }
    }, [selectedAsset]);

    useEffect(() => {
        setPage(1);
    }, [search]);

    const handleUpdateAsset = (e) => {
        e.preventDefault();
        const form = e.target;

        const assetInfo = {
            productName: form.updatedName.value,
            productQuantity: parseInt(form.updatedQty.value),
            productType: form.updatedType.value,
            productImage: form.updatedImage.value
        }
        axiosSecure.patch(`/assets/${selectedAsset._id}`, assetInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    assetMOdalRef.current.close();
                    assetRefetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Asset updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong while updating.",
                    icon: "error",
                });
            })
    }


    const handleAssetDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/assets/${id}`)
                    .then(res => {
                        if (res.data.deletedCount)
                            assetRefetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Asset has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong while deleting.",
                            icon: "error"
                        });
                    });

            }
        });
    }

    if (loading) {
        return <Loading></Loading>
    }



    return (
        <div className="p-6 bg-[#cae1f1] min-h-screen">
            <h2 className="text-3xl font-bold mb-4 ml-20">
                Asset List ({totalAssets})
            </h2>

            <input
                type="text"
                placeholder="Search asset..."
                className="input input-bordered mb-4 w-full max-w-sm rounded-2xl shadow-md shadow-amber-100"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="bg-white overflow-x-auto shadow-lg shadow-gray-500 rounded-xl">
                <table className="table">
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>SL NO</th>
                            <th>Asset Image</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>Date & Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((asset, index) => (
                            <tr key={asset._id}>
                                <td>{(page - 1) * 10 + index + 1}</td>
                                <td>
                                    <img
                                        src={asset?.productImage}
                                        className="w-12 h-12 rounded"
                                    />
                                </td>
                                <td>{asset?.productName}</td>
                                <td>{asset?.productType}</td>
                                <td>
                                    <span className="text-green-600 font-bold">
                                        {asset?.availableQuantity}
                                    </span>

                                    <span className="mx-1 text-gray-500 text-xl">
                                        /
                                    </span>

                                    <span className="text-red-500 font-bold">
                                        {asset?.productQuantity}
                                    </span>
                                </td>

                                <td>
                                    {new Date(asset?.createdAt).toLocaleString()}
                                </td>
                                <td className="space-x-2 space-y-2 md:space-y-0">
                                    <button
                                        onClick={() => handleEditModal(asset)}
                                        className="btn btn-sm btn-info"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleAssetDelete(asset._id)}
                                        className="btn btn-sm btn-error"
                                    >
                                        <RiDeleteBin5Fill />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {data?.length === 0 && (
                    <p className="text-center py-4 text-gray-500">
                        No assets found
                    </p>
                )}
            </div>


            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-4">
                <button
                    className="btn btn-sm btn-primary text-black"
                    disabled={page === 1}
                    onClick={() => setPage((prev) => prev - 1)}
                >
                    Previous
                </button>

                {[...Array(totalPages).keys()].map((i) => {
                    const pageNumber = i + 1;
                    return (
                        <button
                            key={pageNumber}
                            className={`btn btn-sm ${page === pageNumber ? "btn-secondary" : ""}`}
                            onClick={() => setPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                <button
                    className="btn btn-sm btn-primary text-black"
                    disabled={page === totalPages}
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>



            {/* Edit Asset Modal */}
            <dialog key={selectedAsset?._id} ref={assetMOdalRef} className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleUpdateAsset}
                    className="max-w-5xl w-full flex justify-center items-center p-4"
                >
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit Asset</h3>
                        {selectedAsset && (
                            <>
                                <div className="mb-2">
                                    <label className="block mb-1 font-medium">Asset Name</label>
                                    <input
                                        name="updatedName"
                                        className="input input-bordered w-full"
                                        defaultValue={selectedAsset?.productName}
                                    />
                                </div>

                                <div className="mb-2">
                                    <label className="block mb-1 font-medium">Quantity</label>
                                    <input
                                        name="updatedQty"
                                        type="number"
                                        min="0"
                                        className="input input-bordered w-full"
                                        defaultValue={selectedAsset?.productQuantity}
                                    />
                                </div>

                                <div className="mb-2">
                                    <label className="block mb-1 font-medium">Image URL</label>
                                    <input
                                        name="updatedImage"
                                        className="input input-bordered w-full"
                                        defaultValue={selectedAsset?.productImage}
                                    />
                                </div>

                                <div className="mb-2">
                                    <label className="block mb-1 font-medium">Asset Type</label>
                                    <select
                                        name="updatedType"
                                        className="input input-bordered w-full"
                                        defaultValue={selectedAsset?.productType}
                                    >
                                        <option>Returnable</option>
                                        <option>Non-returnable</option>
                                    </select>
                                </div>
                            </>
                        )}
                        <div className="modal-action">
                            <button type="submit" className="btn btn-secondary">
                                Update
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary text-black"
                                onClick={() => assetMOdalRef.current.close()}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default AssetList;