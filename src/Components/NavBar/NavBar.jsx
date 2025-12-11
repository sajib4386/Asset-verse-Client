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
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/employee-register">Join as Employee</NavLink></li>
            <li><NavLink to="/hr-register">Join as HR Manager</NavLink></li>
        </>
    );

    // Employee links
    const employeeLinks = (
        <>
            <li><NavLink to="/my-assets">My Assets</NavLink></li>
            <li><NavLink to="/my-team">My Team</NavLink></li>
            <li><NavLink to="/request-asset">Request Asset</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><button onClick={handleSignOut}>Logout</button></li>
        </>
    );

    // HR links
    const hrLinks = (
        <>
            <li><NavLink to="/asset-list">Asset List</NavLink></li>
            <li><NavLink to="/add-asset">Add Asset</NavLink></li>
            <li><NavLink to="/all-requests">All Requests</NavLink></li>
            <li><NavLink to="/employee-list">Employee List</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><button onClick={handleSignOut}>Logout</button></li>
        </>
    );


    const roleLinks = user ? (role === 'employee' ? employeeLinks : hrLinks) : null;

    return (
        <div className="navbar bg-base-100 shadow-sm px-4">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li><NavLink to="/">Home</NavLink></li>

                        {!user &&
                            <>
                                <li><NavLink to="/employee-register">Join as Employee</NavLink></li>
                                <li><NavLink to="/hr-register">Join as HR Manager</NavLink></li>
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

                    {user ? <li><NavLink to="/">Home</NavLink></li> : publicLinks}

                </ul>
            </div>


            <div className="navbar-end">
                {user ?
                    <div className="dropdown dropdown-end">

                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt="Profile" />
                            </div>
                        </label>
                        
                        <ul
                            tabIndex={0}
                            className="dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {roleLinks}

                        </ul>

                    </div>
                    :
                    <Link to="/login" className="btn btn-secondary">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;
