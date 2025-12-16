import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";
import useRole from "../../Hooks/useRole";

const Profile = () => {
    const { user, updateUser } = useAuth();
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
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-6">My Profile</h2>

            <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">

                {/* Profile Photo */}
                <div>
                    <img
                        src={profile?.photoURL}
                        alt=""
                        className="w-28 h-28 rounded-full mb-2"
                    />
                    <input
                        className="file-input file-input-secondary"
                        type="file"
                        onChange={(e) => setPhotoFile(e.target.files[0])}
                    />
                </div>

                {/* Name */}
                <div>
                    <label className="font-medium">Name</label>
                    <input
                        className="input input-bordered w-full"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (<p className="text-red-500 text-sm"> {errors.name.message}</p>)}
                </div>

                {/* EMAIL */}
                <div>
                    <label className="font-medium">Email</label>
                    <input
                        className="input input-bordered w-full bg-gray-100"
                        value={profile?.email}
                        readOnly
                    />
                </div>

                {/* Date of Birth */}
                <div>
                    <label className="font-medium">Date of Birth</label>
                    <input
                        type="date"
                        className="input input-bordered w-full"
                        {...register("dateOfBirth", { required: "Date of birth is required" })}
                    />
                    {errors.dateOfBirth && (<p className="text-red-500 text-sm"> {errors.dateOfBirth.message} </p>)}
                </div>

                <button
                    className="btn btn-secondary"
                    disabled={updating}
                >
                    {updating ? "Updating..." : "Update Profile"}
                </button>
            </form>


            {
                role === 'employee' &&
                <>

                    {/* Company Affiliations */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-3">
                            Company Affiliations
                        </h3>

                        {affiliations.length === 0 && (
                            <p className="text-gray-500">
                                No active affiliation
                            </p>
                        )}
                        {affiliations.map((affiliate) => (
                            <div
                                key={affiliate._id}
                                className="border p-3 rounded mb-2 flex items-center gap-3"
                            >
                                <img
                                    src={affiliate?.companyLogo}
                                    alt="Company"
                                    className="w-10 h-10"
                                />
                                <div>
                                    <p className="font-medium">
                                        {affiliate?.companyName}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Joined: {new Date(affiliate?.affiliationDate).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </>
            }

        </div>
    );
};

export default Profile;
