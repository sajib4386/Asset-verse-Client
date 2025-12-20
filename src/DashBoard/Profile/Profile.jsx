import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";
import useRole from "../../Hooks/useRole";

const Profile = () => {
    const { user, updateUser, setUser } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { role } = useRole()

    const [profile, setProfile] = useState(null);
    const [affiliations, setAffiliations] = useState([]);
    const [photoFile, setPhotoFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        if (!user?.email) return;

        setLoading(true);

        axiosSecure.get(`/profile/${user?.email}`)
            .then(res => {
                setProfile(res.data.user);
                setAffiliations(res.data.affiliations || []);

                reset({
                    name: res.data.user.name,
                    dateOfBirth: res.data.user.dateOfBirth
                });
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Profile Load Failed",
                    text: "Failed to load profile information. Please try again later."
                });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [user?.email, axiosSecure, reset]);

    const handleUpdate = async (data) => {
        setUpdating(true);

        try {
            let photoURL = profile.photoURL;

            if (photoFile) {
                const formData = new FormData();
                formData.append("image", photoFile);

                const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`, formData);

                photoURL = res.data.data.url;
            }

            // update profile in DB
            await axiosSecure.patch("/profile/update", {
                email: user.email,
                name: data.name,
                dateOfBirth: data.dateOfBirth,
                photoURL
            });

            // update firebase
            await updateUser({
                displayName: data.name,
                photoURL
            });

            // Profile Update EveryWhere (Profile,Dashboard navbar,Navbar)
            setUser({
                ...user, displayName: data.name, photoURL
            })

            // UI Update
            setProfile({
                ...profile,
                name: data.name,
                dateOfBirth: data.dateOfBirth,
                photoURL
            });

            Swal.fire({
                icon: "success",
                title: "Profile Updated",
                text: "Your profile has been updated successfully"
            });

        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: "Profile update failed. Please try again."
            });
        }
        finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-3xl font-bold text-center mb-8">My Profile</h2>

                <form onSubmit={handleSubmit(handleUpdate)} className="space-y-6">

                    {/* Profile Photo */}
                    <div className="flex flex-col items-center">
                        <img
                            src={profile?.photoURL}
                            alt=""
                            className="w-32 h-32 rounded-full mb-3 border-2 border-gray-200"
                        />
                        <input
                            className="file-input file-input-secondary w-full max-w-xs"
                            type="file"
                            onChange={(e) => setPhotoFile(e.target.files[0])}
                        />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="font-medium mb-1 block">Name</label>
                        <input
                            className="input input-bordered w-full"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="font-medium mb-1 block">Email</label>
                        <input
                            className="input input-bordered w-full bg-gray-100"
                            value={profile?.email}
                            readOnly
                        />
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className="font-medium mb-1 block">Date of Birth</label>
                        <input
                            type="date"
                            className="input input-bordered w-full"
                            {...register("dateOfBirth", { required: "Date of birth is required" })}
                        />
                        {errors.dateOfBirth && (
                            <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
                        )}
                    </div>

                    <button
                        className="btn btn-secondary w-full"
                        disabled={updating}
                    >
                        {updating ? "Updating..." : "Update Profile"}
                    </button>
                </form>

                {/* Employee Affiliations */}
                {role === 'employee' && (
                    <div className="mt-10">
                        <h3 className="text-2xl font-semibold mb-4 text-center">Company Affiliations</h3>

                        {affiliations.length === 0 ? (
                            <p className="text-center text-gray-500">No active affiliation</p>
                        ) : (
                            <div className="space-y-3">
                                {affiliations.map((affiliate) => (
                                    <div
                                        key={affiliate._id}
                                        className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                                    >
                                        <img
                                            src={affiliate?.companyLogo}
                                            alt={affiliate?.companyName}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-medium">{affiliate?.companyName}</p>
                                            <p className="text-sm text-gray-500">
                                                Joined: {new Date(affiliate?.affiliationDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>

    );
};

export default Profile;
