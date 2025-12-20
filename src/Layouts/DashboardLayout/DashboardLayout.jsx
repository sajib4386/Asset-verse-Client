import React from 'react'
import useRole from '../../Hooks/useRole';
import { Link, NavLink, Outlet } from 'react-router';
import { BsBoxSeam } from 'react-icons/bs';
import { FaHistory, FaListAlt, FaSignOutAlt, FaUserCog, FaUsers } from 'react-icons/fa';
import { MdAddCircle, MdInventory, MdOutlinePayment } from 'react-icons/md';
import useAuth from '../../Hooks/useAuth';
import Loading from '../../Components/Loading/Loading';
import Swal from 'sweetalert2';

const DashboardLayout = () => {
    const { role, roleLoading } = useRole();
    const { user, loading, signOutUser } = useAuth()


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


    if (loading || roleLoading) {
        return <Loading></Loading>
    }


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                {/* Navbar */}
                <nav className="navbar w-full bg-white shadow-lg shadow-gray-300 flex justify-between items-center">

                    <div className='flex items-center'>
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-5"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <div className="lg:text-xl font-mono font-semibold lg:font-bold text-fuchsia-600">Hello, {user?.displayName}</div>
                    </div>


                    {/* Profile */}
                    {user &&
                        <div className="dropdown dropdown-end mr-10">

                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img referrerPolicy="no-referrer" src={user?.photoURL} alt="Profile" />
                                </div>
                            </label>

                            <ul
                                tabIndex={0}
                                className="dropdown-content mt-8 bg-[#f3faff] border-2 border-amber-200 p-2 rounded-box w-52 font-bold text-black">
                                {/* Dropdown */}
                                <li>
                                    <button onClick={handleSignOut}
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-2" data-tip="LogOut">
                                        <FaSignOutAlt />
                                        <span className="is-drawer-close:hidden">LogOut</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    }
                </nav>


                {/* Page content here */}
                <Outlet></Outlet>
            </div>


            <div className="drawer-side is-drawer-close:overflow-visible bg-white shadow-lg shadow-gray-300">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-white shadow-lg shadow-gray-300 is-drawer-close:w-16 is-drawer-open:w-64">
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


                        {/* Employee Only */}
                        {role === 'employee' && (
                            <>

                                <li>
                                    <NavLink to="/dashboard/my-assets" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Assets">
                                        <BsBoxSeam />
                                        <span className="is-drawer-close:hidden">My Assets</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/request-asset" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Request Asset">
                                        <FaListAlt />
                                        <span className="is-drawer-close:hidden">Request Asset</span>
                                    </NavLink>
                                </li>



                                <li>
                                    <NavLink to="/dashboard/my-team" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Team">
                                        <FaUsers />
                                        <span className="is-drawer-close:hidden">My Team</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/profile" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile">
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
                                    <NavLink to="/dashboard/all-requests" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="All Requests">
                                        <FaListAlt />
                                        <span className="is-drawer-close:hidden">All Requests</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/employee-list" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Employee List">
                                        <FaUsers />
                                        <span className="is-drawer-close:hidden">MY Employee List</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/upgradepackage" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Upgrade Package">
                                        <MdOutlinePayment />
                                        <span className="is-drawer-close:hidden">Upgrade Package</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/profile" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile">
                                        <FaUserCog />
                                        <span className="is-drawer-close:hidden">Profile</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/payment-history" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Payment History">
                                        <FaHistory />
                                        <span className="is-drawer-close:hidden">Payment History</span>
                                    </NavLink>
                                </li>
                            </>
                        )}


                        {/* List item */}
                        <li>
                            <button onClick={handleSignOut}
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="LogOut">
                                <FaSignOutAlt />
                                <span className="is-drawer-close:hidden">LogOut</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout