import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Loading from "../Loading/Loading";
import { GiConfirmed } from "react-icons/gi";

const PackagesSection = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosInstance = useAxios()

    useEffect(() => {

        axiosInstance.get("/packages/public")
            .then(res => {
                setPackages(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section className="py-20 bg-[#f3faff]">
            <div className="max-w-6xl mx-auto px-4">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    AssetVerse Pricing Plans
                </h2>
                <p className="text-center text-gray-500 mb-14">
                    Simple, transparent pricing for growing companies
                </p>

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
                                className="w-full bg-linear-to-r from-green-400 to-green-600 text-white font-semibold py-3 rounded-lg shadow-md transform hover:scale-105 transition duration-300 disabled:opacity-50"
                            >
                                Upgrade
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PackagesSection;
