import { MdCancel } from "react-icons/md";
import { Link } from "react-router";

const PaymentCancelled = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">

            <div className="bg-green-100 rounded-full p-6 mb-6">
                <MdCancel className="text-green-600 w-16 h-16" />
            </div>

            <h2 className="text-3xl font-bold text-red-600 mb-4">Payment Cancelled</h2>
            <p className="text-gray-700 mb-6">
                Your payment was not completed. You can try again.
            </p>
            <Link to="/dashboard/upgradepackage" className="btn btn-primary text-black">
                Try Again
            </Link>
        </div>
    );
};

export default PaymentCancelled;