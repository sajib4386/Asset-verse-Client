import Lottie from "lottie-react";
import sandyLoading from "../../Animation/Sandy_Loading.json";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


const Loading = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-between">
            <NavBar></NavBar>
            <div className="flex flex-col items-center justify-center flex-1">
                {/* LOGO */}
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg p-5 mb-3">
                    <span className="text-white text-2xl font-bold">A</span>
                    <span className="text-yellow-300 -ml-1 text-2xl font-bold">V</span>
                </div>
                
                <div className="text-2xl font-bold text-secondary">
                    <span className="text-rose-600">A</span>sset<span className="text-rose-600">V</span>erse
                </div>

                {/* Lottie Spinner */}
                <div className="w-32">
                    <Lottie animationData={sandyLoading} loop={true} />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Loading;
