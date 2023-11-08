import { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import ExtraLogin from "./ExtraLogin";
import axios from "axios";

const Login = () => {
  const {signInUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassWord] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

      setErrorMessage(null);
      setSuccess(null);
      if(password.length > 6){
        setErrorMessage('Password should have at least 6 character');
        return;
      }else if(!/[A-Z]/.test(password)){
        setErrorMessage('Password should have at least one uppercase');
        return;
      }

      signInUser(email, password)
      .then(result =>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = {email};
        setSuccess('Created message Successfully');
  
        axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
        .then(res => {
          console.log(res.data)
          if(res.data.success){
            navigate(location?.state ? location.state : '/');
          }
        })
      })
      .catch(error =>{
        console.error(error)
        setErrorMessage(error.message);
      });
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="hero bg-gradient-to-r from-blue-800 to-sky-500">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold uppercase text-white">Login now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-sky-600 to-blue-800">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold uppercase text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold uppercase text-white">Password</span>
                </label>
                <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                </div>
                <span className="absolute text-2xl top-[170px] right-10" onClick={()=>setShowPassWord(!showPassword)}>
                  {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover font-bold text-red-600">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-gradient-to-r from-blue-600 to-sky-400">Login</button>
              </div>
              <div>
                <p className="font-bold">Go to <Link className="text-white font-bold uppercase" to='/register'>Registration</Link> Page</p>
              </div>
            </form>
            {
              errorMessage && <p className="text-red-600 italic font-bold mb-10 text-center">{errorMessage}</p>
            }
            {
              success && <p className="text-green-600 italic font-bold mb-10 text-center">{success}</p>
            }
            <ExtraLogin></ExtraLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
