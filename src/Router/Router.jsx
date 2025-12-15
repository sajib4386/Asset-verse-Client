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
        element: <DashboardLayout></DashboardLayout>,
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
                Component: PaymentHistory
            },

            // Employe Route
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
                element: <AddAsset></AddAsset>
            },
            {
                path: "/dashboard/asset-list",
                element: <AssetList></AssetList>
            },
            {
                path: "/dashboard/all-requests",
                element: <AllRequests></AllRequests>
            },
            {
                path: "/dashboard/employee-list",
                element: <MyEmployeeList></MyEmployeeList>
            },
            {
                path: "/dashboard/upgradepackage",
                element: <UpgradePackage></UpgradePackage>
            }
        ]
    }

]);