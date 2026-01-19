import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Analytics = () => {
    const axiosSecure = useAxiosSecure();

    const { data: returnableStats = [], isLoading: pieLoading } = useQuery({
        queryKey: ['returnable-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/assets/returnable-stats');
            return res.data;
        }
    });

    const { data: topAssets = [], isLoading: barLoading } = useQuery({
        queryKey: ['top-requested-assets'],
        queryFn: async () => {
            const res = await axiosSecure.get('/assets/top-requested');
            return res.data;
        }
    });

    const { data: overview = {}, isLoading: overviewLoading } = useQuery({
        queryKey: ['hr-overview-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/hr/overview-stats');
            return res.data;
        }
    });


    if (pieLoading || barLoading || overviewLoading) {
        return <Loading></Loading>;
    }


    return (
        <div className="p-6 bg-[#cae1f1] min-h-screen">

            <div className="mb-10 text-center">
                <h2 className="text-xl sm:text-4xl font-bold text-gray-800">
                    Dashboard Analytics
                </h2>
                <p className="mt-2">
                    Overview of asset distribution & request trends
                </p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                    <h4 className="text-gray-500 text-sm">Total Employees</h4>
                    <p className="text-3xl font-bold text-indigo-600 mt-2">
                        {overview?.totalEmployees}
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                    <h4 className="text-gray-500 text-sm">Total Assets</h4>
                    <p className="text-3xl font-bold text-green-600 mt-2">
                        {overview?.totalAssets}
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                    <h4 className="text-gray-500 text-sm">Total Requests</h4>
                    <p className="text-3xl font-bold text-rose-600 mt-2">
                        {overview?.totalRequests}
                    </p>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Pie Chart */}
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs sm:text-xl font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-600">
                            Returnable vs Non-Returnable
                        </h3>
                        <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-600">
                            Assets
                        </span>
                    </div>

                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={returnableStats}
                                    dataKey="count"
                                    nameKey="type"
                                    cx="50%"
                                    cy="100%"
                                    startAngle={180}
                                    endAngle={0}
                                    outerRadius={100}
                                    fill="#6366f1"
                                    label
                                    isAnimationActive={true}
                                >
                                    {returnableStats.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={
                                                entry.type === "Non-returnable"
                                                    ? "#6366f1"
                                                    : "#f97316"
                                            }
                                        />
                                    ))}
                                </Pie>

                                <Tooltip />
                                <Legend
                                    verticalAlign="bottom"
                                    align="center"
                                    layout="horizontal"
                                    height={36}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="sm:text-xl font-semibold px-3 py-1 rounded-full bg-green-100 text-green-600">
                            Top 5 Requested Assets
                        </h3>
                        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-600">
                            Requests
                        </span>
                    </div>

                    <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={topAssets}
                                margin={{ top: 20, right: 20, left: 0, bottom: 50 }}
                                barCategoryGap="25%"
                                maxBarSize={50}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="assetName"
                                    angle={-30}
                                    textAnchor="end"
                                    interval={0}
                                    height={60}
                                />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar
                                    dataKey="count"
                                    fill="#22c55e"
                                    radius={[6, 6, 0, 0]}
                                />
                            </BarChart>

                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Analytics;
