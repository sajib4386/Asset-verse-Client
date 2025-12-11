import { createBrowserRouter } from "react-router";
import RootLayOut from "../Layouts/RootLayOut/RootLayOut";
import Home from "../Pages/Home/Home";
import EmployeeRegister from "../Auth/EmployeeRegister";
import HRRegister from "../Auth/HRRegister";
import Login from "../Auth/Login";

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

]);