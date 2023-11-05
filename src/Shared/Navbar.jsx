import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {

    const navItems = <>
    <li className="font-bold uppercase text-white text-[15px]"><Link to='/'>Home</Link></li>
    <li className="font-bold uppercase text-white text-[15px]"><Link to='/addjob'>Add Job</Link></li>
    <li className="font-bold uppercase text-white text-[15px]"><Link to='/postedjob'>My Posted Jobs</Link></li>
    <li className="font-bold uppercase text-white text-[15px]"><Link to='/bids'>My Bids</Link></li>
    <li className="font-bold uppercase text-white text-[15px]"><Link to='/bidReq'>Bids Request</Link></li>
    </>

  return (
    <div className="my-10">
      <div className="navbar bg-gradient-to-r from-blue-400 to-indigo-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <div className="flex items-center text-xl">
          <img className="w-28 h-14" src={logo} alt="" />
          <p className="font-bold uppercase italic text-white">OnlineMarkets</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
         <Link to='/login'><button className="btn bg-indigo-600 uppercase text-white">Login</button></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
