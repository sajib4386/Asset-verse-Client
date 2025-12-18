import React from 'react'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxios from './useAxios'

const useRole = () => {
    const { user } = useAuth()
    const axiosInstance = useAxios()
    const { isLoading: roleLoading, data: role = 'user' } = useQuery({
        queryKey: ['user-role', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosInstance.get(`/users/${user?.email}/role`);
            return res.data?.role || 'user';
        }
    })
    return { role, roleLoading }
}

export default useRole