import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";

const MyAssets = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");


  const { data: assets = [] } = useQuery({
    queryKey: ["assets", user?.email, search, filter],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/assigned-assets?email=${user?.email}&search=${search}&filter=${filter}`);
      return res.data;

    }
  });

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">My Assets</h2>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by asset name"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select select-bordered"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Returnable">Returnable</option>
          <option value="Non-returnable">Non-returnable</option>
        </select>
      </div>

      {/* Table */}
      <div>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Asset Name</th>
              <th>Type</th>
              <th>Company</th>
              <th>Assigned</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset._id}>
                <td>
                  <img src={asset?.assetImage} className="w-12 h-12 rounded" />
                </td>
                <td>{asset?.assetName}</td>
                <td>{asset?.assetType}</td>
                <td>{asset?.companyName}</td>
                <td>{new Date(asset.assignmentDate).toLocaleString()}</td>

                <td>
                  {asset?.status === "assigned" && (
                    <span className="btn btn-sm btn-success text-black">Assigned</span>
                  )}
                </td>
                <td>
                  {asset.status === "assigned" && asset.assetType === "Returnable" && (
                    <button
                      className="btn btn-sm btn-warning"
                    >
                      Return
                    </button>
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

export default MyAssets;
