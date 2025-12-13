import React from 'react'
import useRole from '../../Hooks/useRole';
import { Link, NavLink, Outlet } from 'react-router';
import { BsBoxSeam } from 'react-icons/bs';
import { FaListAlt, FaUserCog, FaUsers } from 'react-icons/fa';
import { MdAddCircle, MdInventory } from 'react-icons/md';
import useAuth from '../../Hooks/useAuth';
import Loading from '../../Components/Loading/Loading';

const DashboardLayout = () => {
    const { role } = useRole();
    const { loading } = useAuth()

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4">AssetVerse Dashboard</div>
                </nav>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-16 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <Link to="/">
                                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                    <span className="text-white">A</span>
                                    <span className="text-yellow-300 -ml-1">V</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </Link>
                        </li>


                        {/* Employee Only */}
                        {role === 'employee' && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/request-asset" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Request Asset">
                                        <FaListAlt />
                                        <span className="is-drawer-close:hidden">Request Asset</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/my-assets" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Assets">
                                        <BsBoxSeam />
                                        <span className="is-drawer-close:hidden">My Assets</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/my-team" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Team">
                                        <FaUsers />
                                        <span className="is-drawer-close:hidden">My Team</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/profile" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile">
                                        <FaUserCog />
                                        <span className="is-drawer-close:hidden">Profile</span>
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {/* HR Only */}
                        {role === 'hr' && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/asset-list" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Asset List">
                                        <MdInventory />
                                        <span className="is-drawer-close:hidden">Asset List</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/add-asset" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Asset">
                                        <MdAddCircle />
                                        <span className="is-drawer-close:hidden">Add Asset</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/all-requests" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="All Requests">
                                        <FaListAlt />
                                        <span className="is-drawer-close:hidden">All Requests</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/employee-list" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Employee List">
                                        <FaUsers />
                                        <span className="is-drawer-close:hidden">Employee List</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/profile" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile">
                                        <FaUserCog />
                                        <span className="is-drawer-close:hidden">Profile</span>
                                    </NavLink>
                                </li>
                            </>
                        )}


                        {/* List item */}
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                {/* Settings icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                                <span className="is-drawer-close:hidden">Settings</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout