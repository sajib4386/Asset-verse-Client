import { useRef, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import { useReactToPrint } from "react-to-print";

const MyAssets = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const contentRef = useRef();


  const { data: assets = [] } = useQuery({
    queryKey: ["assets", user?.email, search, filter],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/assigned-assets?email=${user?.email}&search=${search}&filter=${filter}`);
      return res.data;

    }
  });


  const reactToPrintFn = useReactToPrint({ contentRef });



  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className="p-6 bg-[#cae1f1] min-h-screen">
      <h2 className="text-2xl font-bold mb-2">My Assets: {assets?.length}</h2>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by asset name"
          className="input input-bordered w-full max-w-xs rounded-2xl shadow-md shadow-primary"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select select-bordered rounded-2xl shadow-md shadow-primary"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Returnable">Returnable</option>
          <option value="Non-returnable">Non-returnable</option>
        </select>


        {/* Print Button */}
        <button className="btn btn-info shadow-md shadow-gray-500" onClick={reactToPrintFn}>
          Print
        </button>
      </div>

      {/* Table */}
      <div ref={contentRef} className="bg-white overflow-x-auto shadow-lg shadow-gray-500 rounded-xl">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>SL NO</th>
              <th>Image</th>
              <th>Asset Name</th>
              <th>Type</th>
              <th>Company</th>
              <th>Request Date</th>
              <th>Approval Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, index) => (
              <tr key={asset._id}>
                <td>{index + 1}</td>
                <td>
                  <img src={asset?.assetImage} className="w-12 h-12 rounded" />
                </td>
                <td>{asset?.assetName}</td>
                <td>{asset?.assetType}</td>
                <td>{asset?.companyName}</td>
                <td>{new Date(asset?.requestDate).toLocaleString()}</td>
                <td>{new Date(asset?.approvalDate).toLocaleString()}</td>

                <td>
                  {asset?.status === "approved" && (
                    <span className="btn btn-sm btn-success text-black">Approved</span>
                  )}
                </td>
                <td>
                  {asset?.status === "approved" && asset?.assetType === "Returnable" && (
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
        {assets?.length === 0 && (
          <p className="text-center py-4 text-gray-500">
            No assets found
          </p>
        )}
      </div>
    </div>
  );
};

export default MyAssets;
