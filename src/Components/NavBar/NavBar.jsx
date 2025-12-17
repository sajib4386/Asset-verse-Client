import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';
import Swal from 'sweetalert2';

const NavBar = () => {
    const { user, signOutUser } = useAuth();
    const { role } = useRole();

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
            <li className='hover:link'><NavLink to="/dashboard/profile">Profile</NavLink></li>
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
            <li className='hover:link'><NavLink to="/dashboard/profile">Profile</NavLink></li>
            <li><button onClick={handleSignOut} className='btn btn-primary text-black font-bold hover:bg-secondary hover:text-white'>Logout</button></li>
        </>
    );


    const roleLinks = user ? (role === 'employee' ? employeeLinks : hrLinks) : null;

    return (
        <div className="navbar bg-white shadow-sm px-4">

            <div className='navbar max-w-10/12 mx-auto'>

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

                        {user ? <li><NavLink to="/" className="nav-item">Home</NavLink></li> : publicLinks}

                    </ul>
                </div>


                <div className="navbar-end">
                    {user ?
                        <div className="dropdown dropdown-end">

                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt="Profile" />
                                </div>
                            </label>

                            <ul
                                tabIndex={0}
                                className="dropdown-content mt-8 bg-[#f3faff] border-2 border-amber-200 p-2 rounded-box w-52 font-bold text-black">

                                {roleLinks}

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
