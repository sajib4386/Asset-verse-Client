import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const RequestAnAsset = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [note, setNote] = useState("");

    const { data: assets = [] } = useQuery({
        queryKey: ["employeeAssets"],
        queryFn: async () => {
            const res = await axiosSecure.get("/employee/assets");
            return res.data;
        }
    });

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
            <h2 className="text-3xl font-bold mb-6 text-center">Available Assets: {assets.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {assets.map(asset => (
                    <div key={asset._id} className="card bg-base-100 shadow">
                        <figure>
                            <img src={asset?.productImage} className="h-60 w-full" />
                        </figure>
                        <div className="card-body">
                            <h3 className="font-bold">{asset?.productName}</h3>
                            <p>Type: {asset?.productType}</p>
                            <p>Available: {asset?.availableQuantity}</p>
                            <button
                                className="btn btn-primary text-black mt-2"
                                onClick={() => setSelectedAsset(asset)}
                            >
                                Request
                            </button>
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
        </div>
    );
};

export default RequestAnAsset;
