import React from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = () => {

    const publicLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/employee-register">Join as Employee</NavLink></li>
        <li><NavLink to="/hr-register">Join as HR Manager</NavLink></li>
    </>;

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {publicLinks}
                    </ul>
                </div>
                {/* Logo */}
                <Link to="/">
                    <div className="navbar-start">

                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative p-5">
                            <span className="text-white">A</span>
                            <span className="text-yellow-300 -ml-1">V</span>
                        </div>

                        <div className="text-2xl font-bold text-secondary">
                            <span className="text-rose-600">A</span>sset<span className="text-rose-600">V</span>erse
                        </div>
                    </div>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {publicLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
}

export default NavBar;
