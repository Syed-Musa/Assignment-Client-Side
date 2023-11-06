import { Link } from "react-router-dom";
import error from "../assets/error.jpg";

const ErrorPage = () => {
    return (
        <div>
            <img className="w-[900px] ml-60" src={error} alt="" />
            <Link to='/' className="btn bg-red-600 text-white p-4 text-center ml-[600px]">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;