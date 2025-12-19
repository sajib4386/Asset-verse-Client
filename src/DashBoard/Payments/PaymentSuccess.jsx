import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaCheckCircle } from 'react-icons/fa';


const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();

    // prevent multiple API calls
    const apiCalled = useRef(false);

    useEffect(() => {
        if (!sessionId) return;

        // যদি আগে API কল করা হয়ে থাকে, তাহলে আর কল করবে না
        if (apiCalled.current) return;

        apiCalled.current = true;

        axiosSecure
            .patch(`/hr/payment-success?session_id=${sessionId}`)
            .then((res) => {
                setPaymentInfo({
                    transactionId: res.data.transactionId,
                });
            });
    }, [sessionId]);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
            
            <div className="bg-green-100 rounded-full p-6 mb-6">
                <FaCheckCircle className="text-green-600 w-16 h-16" />
            </div>

            <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-md w-full">
                <h2 className="text-4xl font-bold text-green-600 mb-4">
                    Payment Successful!
                </h2>
                <p className="text-gray-700 mb-6 w-full">
                    Your transaction has been completed successfully.
                </p>
                <p className="bg-gray-100 px-4 py-2 rounded text-gray-800">
                    Transaction ID: <span className="font-bold">{paymentInfo.transactionId}</span>
                </p>
            </div>
        </div>
    );
};

export default PaymentSuccess;