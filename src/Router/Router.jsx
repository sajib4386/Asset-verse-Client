import { createBrowserRouter } from "react-router";
import RootLayOut from "../Layouts/RootLayOut/RootLayOut";
import Home from "../Pages/Home/Home";
import EmployeeRegister from "../Auth/EmployeeRegister";
import HRRegister from "../Auth/HRRegister";
import Login from "../Auth/Login";
import NotFound from "../Components/NotFound/NotFound";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import AddAsset from "../DashBoard/HR/AddAsset";
import DashBoardHome from "../DashBoard/DashBoardHome/DashBoardHome";
import MyAssets from "../DashBoard/Employee/MyAssets";

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

            // Employe Route
            {
                path: "/dashboard/my-assets",
                Component: MyAssets
            },

            // HR Route
            {
                path: "/dashboard/add-asset",
                element: <AddAsset></AddAsset>
            }
        ]
    }

]);