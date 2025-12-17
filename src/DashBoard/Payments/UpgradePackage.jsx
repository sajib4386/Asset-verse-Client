import React from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import { GiConfirmed } from 'react-icons/gi';
import Loading from '../../Components/Loading/Loading';



const UpgradePackage = () => {
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()

    const { data: packages = [] } = useQuery({
        queryKey: ["packages", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/packages?hrEmail=${user?.email}`);
            return res.data;
        }
    });

    const handlePayment = async (pkg) => {
        const paymentInfo = {
            price: pkg.price,
            packageName: pkg.name,
            hrEmail: user.email
        }
        const res = await axiosSecure.post('/hr/create-checkout-session', paymentInfo)
        window.location.assign(res.data.url);
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="min-h-screen bg-linear-to-r from-blue-50 via-purple-50 to-pink-50 py-16 px-6">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Upgrade Your Package</h1>

            <div className="flex flex-wrap justify-center gap-8">
                {packages.map((pkg) => (
                    <div
                        key={pkg._id}
                        className="bg-white rounded-2xl shadow-xl p-8 w-72 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-4">{pkg?.name}</h2>
                        <p className="text-lg text-gray-600 text-center mb-2">Employee Limit: {pkg?.employeeLimit}</p>
                        <p className="text-lg text-gray-600 text-center mb-6">Price: ${pkg?.price}</p>

                        {/* Features List */}
                        <ul className="text-sm text-gray-500 mb-6 space-y-2">
                            {pkg.features?.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <GiConfirmed className='text-green-500 text-xl' />{feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => handlePayment(pkg)}
                            className="w-full bg-linear-to-r from-green-400 to-green-600 text-white font-semibold py-3 rounded-lg shadow-md transform hover:scale-105 transition duration-300 disabled:opacity-50"
                        >
                            Upgrade
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpgradePackage