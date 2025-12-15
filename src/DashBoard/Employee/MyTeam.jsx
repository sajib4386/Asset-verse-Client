import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";

const MyTeam = () => {
    const axiosSecure = useAxiosSecure();
    const [selectedCompany, setSelectedCompany] = useState(null);


    const { data: companies = [], isLoading: companiesLoading } = useQuery({
        queryKey: ["companies"],
        queryFn: async () => {
            const res = await axiosSecure.get("/hr/companies");
            return res.data;
        },
    });

    const { data: employees = [], isLoading: employeesLoading } = useQuery({
        queryKey: ["employees", selectedCompany?._id],
        enabled: !!selectedCompany,
        queryFn: async () => {
            const res = await axiosSecure.get(`/hr/employee-list?hrEmail=${selectedCompany?.email}`);
            return Array.isArray(res.data) ? res.data : res.data.result || [];
        },
    });

    const currentMonth = new Date().getMonth() + 1;
    const birthdays = employees.filter((emp) => new Date(emp.dateOfBirth).getMonth() + 1 === currentMonth);


    if (companiesLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Team</h2>

            {/* Company selector */}
            <select
                className="select select-bordered mb-6"
                value={selectedCompany?._id || ""}
                onChange={(e) =>
                    setSelectedCompany(companies.find((c) => c._id === e.target.value))
                }
            >
                <option value="">Select Company</option>
                {companies.map((company) => (
                    <option key={company._id} value={company._id}>
                        {company?.companyName}
                    </option>
                ))}
            </select>

           {selectedCompany && employeesLoading && <Loading />}

            {/* Employee Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {employees.map((emp) => (
                    <div key={emp._id} className="card bg-base-100 shadow p-4">
                        <img
                            src={emp?.photoURL}
                            alt=""
                            className="w-20 h-20 rounded-full mx-auto"
                        />
                        <h3 className="font-bold text-center mt-2">{emp?.name}</h3>
                        <p className="text-center text-gray-500">{emp?.email}</p>
                        <p className="text-center text-gray-500">
                            {emp?.position || "Employee"}
                        </p>
                    </div>
                ))}

                {/* Upcoming Birthdays */}
                {birthdays.length > 0 && (
                    <div className="card bg-yellow-50 shadow p-4">
                        <h3 className="text-xl font-semibold mb-2">Upcoming Birthdays</h3>
                        <ul className="list-disc ml-5">
                            {birthdays.map((emp) => (
                                <li key={emp._id}>
                                    {emp?.name} - {new Date(emp?.dateOfBirth).toLocaleDateString(undefined, { day: "numeric", month: "short" })}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyTeam;
