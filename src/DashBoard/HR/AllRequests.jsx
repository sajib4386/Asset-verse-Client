import React from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllRequests = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: requests = [], refetch: requestRefetch } = useQuery({
        queryKey: ["allRequests", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/requests/hr?hrEmail=${user?.email}`);
            return res.data;
        }
    });



    const handleApprove = (id) => {
        Swal.fire({
            title: "Approve Request?",
            text: "Asset will be assigned to employee",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/requests/approve/${id}`)
                    .then((res) => {
                        if (res.data.success) {
                            requestRefetch()
                            Swal.fire({
                                title: "Approved!",
                                text: "Request has been approved.",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: res.data.message || "Failed to approve",
                                icon: "error"
                            });
                        }
                    })
                    .catch((err) => {
                        Swal.fire({
                            title: "Error!",
                            text: err.message || "Something went wrong",
                            icon: "error"
                        });
                    });
            }
        });
    };



    const handleReject = (id) => {
        Swal.fire({
            title: "Reject Request?",
            text: "This request will be rejected!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, reject it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/requests/reject/${id}`)
                    .then((res) => {
                        if (res.data.success) {
                            requestRefetch()
                            Swal.fire({
                                title: "Rejected!",
                                text: "Request has been rejected.",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: res.data.message || "Failed to reject",
                                icon: "error"
                            });
                        }
                    })
                    .catch((err) => {
                        Swal.fire({
                            title: "Error!",
                            text: err.message || "Something went wrong",
                            icon: "error"
                        });
                    });
            }
        });
    };


    return (
        <div className="p-6 bg-[#cae1f1] min-h-screen">
            <h2 className="text-2xl font-bold mb-4 text-center">All Asset Requests: {requests.length}</h2>

            <div className="bg-white overflow-x-auto shadow-lg shadow-gray-500 rounded-xl">
                <table className="table table-zebra">
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>SL NO</th>
                            <th>Employee</th>
                            <th>Asset</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {requests.map((req, index) => (
                            <tr key={req._id}>
                                <td>{index + 1}</td>
                                <td>{req?.requesterName}</td>
                                <td>{req?.assetName}</td>
                                <td>{new Date(req?.requestDate).toLocaleString()}</td>
                                <td>
                                    {req?.requestStatus === "approved" && (
                                        <span className="btn btn-sm btn-success text-black">Approved</span>
                                    )}
                                    {req?.requestStatus === "pending" && (
                                        <span className="btn btn-sm btn-warning text-black">Pending</span>
                                    )}
                                    {req.requestStatus === "rejected" && (
                                        <span className="btn btn-sm btn-secondary">Rejected</span>
                                    )}
                                </td>

                                <td className="space-y-2 md:space-y-0 md:space-x-2">
                                    {req?.requestStatus === "pending" && (
                                        <>
                                            <button
                                                onClick={() => handleApprove(req._id)}
                                                className="btn btn-sm btn-success"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleReject(req._id)}
                                                className="btn btn-sm btn-secondary"
                                            >
                                                Reject
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllRequests;
