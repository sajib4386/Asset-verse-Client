import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';

const NavBar = () => {
    const { user, signOutUser, loading } = useAuth();
    const { role, roleLoading } = useRole();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Signed Out!',
                    text: 'You have successfully signed out.',
                    timer: 2000,
                    showConfirmButton: false,
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: error.message,
                });
            });
    };


    // Public links
    const publicLinks = (
        <>
            <li className='m-1'><NavLink to="/" className="nav-item">Home</NavLink></li>
            <li className='m-1'><NavLink to="/all-assets" className="nav-item">Assets</NavLink></li>
            <li className='m-1'><NavLink to="/employee-register" className="nav-item">Join as Employee</NavLink></li>
            <li className='m-1'><NavLink to="/hr-register" className="nav-item">Join as HR Manager</NavLink></li>
        </>
    );

    // Employee links
    const employeeLinks = (
        <>
            <li className='hover:link'><NavLink to="/dashboard/my-assets">My Assets</NavLink></li>
            <li className='hover:link'><NavLink to="/dashboard/my-team">My Team</NavLink></li>
            <li className='hover:link'><NavLink to="/dashboard/request-asset">Request Asset</NavLink></li>
            <li><button onClick={handleSignOut} className='btn btn-primary text-black font-bold hover:bg-secondary hover:text-white'>Logout</button></li>
        </>
    );

    // HR links
    const hrLinks = (
        <>
            <li className='hover:link'><NavLink to="/dashboard/asset-list">Asset List</NavLink></li>
            <li className='hover:link'><NavLink to="/dashboard/add-asset">Add Asset</NavLink></li>
            <li className='hover:link'><NavLink to="/dashboard/all-requests">All Requests</NavLink></li>
            <li className='hover:link'><NavLink to="/dashboard/employee-list">Employee List</NavLink></li>
            <li><button onClick={handleSignOut} className='btn btn-primary text-black font-bold hover:bg-secondary hover:text-white'>Logout</button></li>
        </>
    );


    if (loading || roleLoading) {
        return <Loading></Loading>
    }


    const roleLinks = user ? (role === 'employee' ? employeeLinks : hrLinks) : null;

    return (
        <div className="navbar bg-white shadow-sm px-4 sticky top-0 z-50">

            <div className='navbar w-full mx-auto'>

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-6 border-2 border-amber-200 p-2 shadow bg-base-100 rounded-box w-52">

                            <li className='m-1'><NavLink to="/" className="nav-item">Home</NavLink></li>
                            <li className='m-1'><NavLink to="/all-assets" className="nav-item">Assets</NavLink></li>

                            {!user &&
                                <>
                                    <li className='m-1'><NavLink to="/employee-register" className="nav-item">Join as Employee</NavLink></li>
                                    <li className='m-1'><NavLink to="/hr-register" className="nav-item">Join as HR Manager</NavLink></li>
                                </>
                            }

                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="flex items-center ml-2">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            <span className="text-white">A</span>
                            <span className="text-yellow-300 -ml-1">V</span>
                        </div>
                        <div className="ml-2 text-2xl font-bold text-secondary">
                            <span className="text-rose-600">A</span>sset<span className="text-rose-600">V</span>erse
                        </div>
                    </Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {user ?
                            <>
                                <li className='m-1'><NavLink to="/" className="nav-item">Home</NavLink></li>
                                <li className='m-1'><NavLink to="/all-assets" className="nav-item">Assets</NavLink></li>
                            </> : publicLinks}

                    </ul>
                </div>


                <div className="navbar-end">
                    {user ?
                        <div className="dropdown dropdown-end">

                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img referrerPolicy="no-referrer" src={user?.photoURL} alt="Profile" />
                                </div>
                            </label>

                            <ul
                                tabIndex={0}
                                className="dropdown-content mt-8 bg-[#f3faff] border-2 border-amber-200 p-3 rounded-box w-64 text-black">

                                {/* Profile Header */}
                                <li className="flex items-center gap-3 p-2 rounded-lg bg-amber-100">
                                    <img
                                        className="w-12 h-12 rounded-full border"
                                        src={user?.photoURL}
                                        alt=""
                                    />

                                    <div className="flex-1 text-left">
                                        <p className="font-bold">
                                            {user?.displayName}
                                        </p>
                                        <p className="text-sm text-gray-600 break-all">
                                            {user?.email}
                                        </p>
                                    </div>
                                </li>

                                {/* Profile Button */}
                                <li className="mt-2">
                                    <Link
                                        to="/dashboard/profile"
                                        className="btn btn-sm bg-secondary text-white w-full"
                                    >
                                        View Profile
                                    </Link>
                                </li>

                                <div className="my-2 border-t"></div>

                                <div className="space-y-2 font-bold">
                                    {roleLinks}
                                </div>

                            </ul>

                        </div>
                        :
                        <Link to="/login" className="btn btn-secondary">Login</Link>
                    }
                </div>

            </div>

        </div>
    );
};

export default NavBar;
