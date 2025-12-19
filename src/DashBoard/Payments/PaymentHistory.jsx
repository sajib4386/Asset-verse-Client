import React from 'react'
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/hr/payments?hrEmail=${user?.email}`)
            return res.data;
        }
    })
    return (
        <div className='p-6   bg-[#cae1f1] min-h-screen'>
            <h3 className='text-3xl font-bold text-center m-5'>Payment History: {payments?.length}</h3>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-[#f3faff] shadow-md shadow-gray-400">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL NO</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Paid Time</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => (
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment?.packageName}</td>
                                    <td>${payment?.amount}</td>
                                    <td>{new Date(payment?.paymentDate).toLocaleString()}</td>
                                    <td>{payment?.transactionId}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentHistory