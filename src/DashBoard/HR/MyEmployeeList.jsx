import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import Swal from "sweetalert2";

const MyEmployeeList = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();

    const { data = {}, refetch } = useQuery({
        queryKey: ["employees", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/hr/employee-list?hrEmail=${user?.email}`);
            return res.data;
        }
    });

    const { result: employees = [], used = 0, limit = 0 } = data;

    const handleEmployeeDelete = (emp) => {
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
                axiosSecure.patch(`/hr/remove-employee`, {
                    hrEmail: user.email,
                    employeeEmail: emp.email
                })
                    .then(res => {
                        if (res.data.deletedCount)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Employee has been deleted.",
                                icon: "success"
                            });
                        refetch()
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
        <div className="p-6 bg-[#f3faff] min-h-screen">
            <h2 className="text-2xl font-bold mb-4">
                My Employees ({employees?.length})
            </h2>

            <p className="mb-4 text-sm font-semibold text-gray-600">
                Employee count: {used}/{limit} employees used.
            </p>

            <div className="grid md:grid-cols-4 gap-4">
                {employees.map(emp => (
                    <div key={emp._id} className="card bg-[#cae1f1] p-4 shadow-md shadow-gray-400 border-2 border-emerald-200">
                        <img
                            src={emp?.photoURL}
                            className="w-16 h-16 rounded-full mx-auto"
                        />
                        <h3 className="text-center font-bold mt-2">{emp?.name}</h3>
                        <p className="text-center text-sm">{emp?.email}</p>
                        <p className="text-center text-sm">
                            Joined: {new Date(emp?.joinDate).toLocaleString()}
                        </p>
                        <p className="text-center font-semibold">
                            Assets: {emp?.assetCount}
                        </p>

                        <button
                            onClick={() => handleEmployeeDelete(emp)}
                            className="btn btn-sm btn-secondary mt-2 w-full shadow-md shadow-gray-400"
                        >
                            Remove from Team
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEmployeeList;
