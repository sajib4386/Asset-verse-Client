import { createBrowserRouter } from "react-router";
import RootLayOut from "../Layouts/RootLayOut/RootLayOut";
import EmployeeRegister from "../Auth/EmployeeRegister";
import HRRegister from "../Auth/HRRegister";
import Login from "../Auth/Login";
import NotFound from "../Components/NotFound/NotFound";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import AddAsset from "../DashBoard/HR/AddAsset";
import DashBoardHome from "../DashBoard/DashBoardHome/DashBoardHome";
import MyAssets from "../DashBoard/Employee/MyAssets";
import AssetList from "../DashBoard/HR/AssetList";
import RequestAnAsset from "../DashBoard/Employee/RequestAnAsset";
import AllRequests from "../DashBoard/HR/AllRequests";
import MyEmployeeList from "../DashBoard/HR/MyEmployeeList";
import UpgradePackage from "../DashBoard/Payments/UpgradePackage";
import Home from "../Components/Home/Home";
import PaymentSuccess from "../DashBoard/Payments/PaymentSuccess";
import PaymentHistory from "../DashBoard/Payments/PaymentHistory";
import MyTeam from "../DashBoard/Employee/MyTeam";
import MyProfile from "../DashBoard/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import PaymentCancelled from "../DashBoard/Payments/PaymentCancelled";
import Analytics from "../DashBoard/HR/Analytics";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayOut,
        children: [
            {
                index: true,
                Component: Home

            },
            {
                path: "/employee-register",
                Component: EmployeeRegister
            },
            {
                path: "/hr-register",
                Component: HRRegister
            },
            {
                path: "/login",
                Component: Login
            }
        ]
    },
    {
        path: "*",
        Component: NotFound
    },


    // DashBoard Route
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [

            {
                index: true,
                Component: DashBoardHome
            },
            {
                path: "/dashboard/hr/payment-success",
                Component: PaymentSuccess
            },
            {
                path: "/dashboard/payment-history",
                element: <AdminRoute><PaymentHistory></PaymentHistory></AdminRoute>
            },
            {
                path: "/dashboard/hr/payment-cancelled",
                Component: PaymentCancelled
            },
            {
                path: "/dashboard/profile",
                element: <MyProfile></MyProfile>
            },

            // Employee Route
            {
                path: "/dashboard/request-asset",
                Component: RequestAnAsset
            },
            {
                path: "/dashboard/my-assets",
                Component: MyAssets
            },
            {
                path: "/dashboard/my-team",
                Component: MyTeam
            },


            // HR Route
            {
                path: "/dashboard/add-asset",
                element: <AdminRoute><AddAsset></AddAsset></AdminRoute>
            },
            {
                path: "/dashboard/asset-list",
                element: <AdminRoute><AssetList></AssetList></AdminRoute>
            },
            {
                path: "/dashboard/all-requests",
                element: <AdminRoute><AllRequests></AllRequests></AdminRoute>
            },
            {
                path: "/dashboard/employee-list",
                element: <AdminRoute><MyEmployeeList></MyEmployeeList></AdminRoute>
            },
            {
                path: "/dashboard/upgradepackage",
                element: <AdminRoute><UpgradePackage></UpgradePackage></AdminRoute>
            },
            {
                path: "/dashboard/analytics",
                element: <AdminRoute><Analytics></Analytics></AdminRoute>
            }
        ]
    }

]);