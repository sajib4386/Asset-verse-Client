import { createBrowserRouter } from "react-router";
import RootLayOut from "../Layouts/RootLayOut/RootLayOut";
import Home from "../Pages/Home/Home";
import EmployeeRegister from "../Auth/EmployeeRegister";
import HRRegister from "../Auth/HRRegister";
import Login from "../Auth/Login";
import NotFound from "../Components/NotFound/NotFound";
import AddAsset from "../DashBoard/HR/AddAsset";

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
            },

            // HR DashBoard
            {
                path: "/add-asset",
                Component: AddAsset
            }
        ]
    },
    {
        path: "*",
        Component: NotFound
    },

]);