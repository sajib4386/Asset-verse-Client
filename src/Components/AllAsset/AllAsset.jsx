import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import useAxios from "../../Hooks/useAxios";


const AllAsset = () => {
    const axiosInstance = useAxios()

    const { data: assets = [], isLoading } = useQuery({
        queryKey: ["assets"],
        queryFn: async () => {
            const res = await axiosInstance.get("/all-assets");
            return res.data;
        }
    });

    return (
        <div className="p-6 bg-[#f3faff] min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center">All Assets: {assets.length}</h2>

            {/* Cards*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {/* Skeleton Loader */}
                {isLoading && Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="card h-full bg-white border shadow-md rounded-xl animate-pulse"
                    >
                        <div className="h-48 bg-gray-300 rounded-t-xl"></div>

                        <div className="card-body space-y-3">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-300 rounded w-full"></div>
                            <div className="h-3 bg-gray-300 rounded w-5/6"></div>

                            <div className="space-y-2 pt-2">
                                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                                <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                            </div>

                            <div className="h-8 bg-gray-300 rounded w-full mt-4"></div>
                        </div>
                    </div>
                ))}

                {/* Asset Cards */}
                {!isLoading && assets.map(asset => (
                    <div
                        key={asset._id}
                        className="card h-full bg-white border shadow-md rounded-xl"
                    >
                        {/* Image */}
                        <figure>
                            <img src={asset?.productImage} className="h-60 w-full" />
                        </figure>

                        <div className="card-body flex flex-col">
                            {/* Title */}
                            <h2 className="card-title text-lg font-semibold">
                                {asset.productName}
                            </h2>

                            {/* Short Description */}
                            <p className="text-sm text-gray-600 line-clamp-2">
                                {asset.shortDescription}
                            </p>

                            {/* Meta Info */}
                            <div className="text-sm text-gray-500 mt-2 space-y-1">
                                <p><span className="font-bold">Type:</span> {asset.productType}</p>
                                <p><span className="font-bold">Available:</span> {asset.availableQuantity}</p>
                                <p>
                                    <span className="font-bold">Date:{" "}</span>
                                    {new Date(asset.createdAt || Date.now()).toLocaleDateString()}
                                </p>
                            </div>

                            {/* View Details Button */}
                            <div className="mt-auto pt-4">
                                <Link
                                    to={`/assets/${asset._id}`}
                                    className="btn btn-secondary btn-sm w-full"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default AllAsset;
