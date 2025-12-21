import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://asset-verse-server-ashen.vercel.app'
});

const useAxiosSecure = () => {
    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Request Interceptor
        const requestInterceptor = axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        // Response Interceptor
        const responseInterceptor = axiosSecure.interceptors.response.use(
            res => res,
            async err => {
                const status = err.response?.status;
                if (status === 401 || status === 403) {
                    try {
                        await signOutUser();
                        navigate("/login");
                    } catch (error) {
                        console.error("Sign out failed:", error);
                    }
                }
                return Promise.reject(err);
            }
        );

        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [signOutUser, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;
