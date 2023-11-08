import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = ()=>{
    logOut()
    .then()
    .catch()
  }

    const navItems = <>
    <li className="font-bold uppercase text-white text-[15px] italic"><Link to='/'>Home</Link></li>
    <li className="font-bold uppercase text-white text-[15px] italic"><Link to='/addjob'>Add Job</Link></li>
    <li className="font-bold uppercase text-white text-[15px] italic"><Link to='/postedjob'>My Posted Jobs</Link></li>
    <li className="font-bold uppercase text-white text-[15px] italic"><Link to='/bids'>My Bids</Link></li>
    <li className="font-bold uppercase text-white text-[15px] italic"><Link to='/bidReq'>Bids Request</Link></li>
    </>

  return (
    <div className="my-10" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">

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
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <div className=" text-xl">
          <Link className="flex items-center" to='/'>
          <img className="w-28 h-14" src={logo} alt="" />
          <p className="font-bold uppercase italic text-white">OnlineMarkets</p>
          </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
        {
          user ? <>
            <span className="font-bold">{user?.email}</span>
            <img className="w-4 lg:w-10 rounded-full" src={user?.photoURL} />
            <button onClick={handleSignOut} className="btn text-white bg-gradient-to-r from-blue-600 to-sky-400 italic">Sign Out</button>
            </>
            :
          <Link to="/login"><button className="btn text-white bg-gradient-to-r from-blue-600 to-sky-400 italic">Login</button></Link>
        }  
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
