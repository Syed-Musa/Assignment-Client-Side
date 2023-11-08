import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Register = () => {
  const {CreateUser} = useContext(AuthContext);
  const [showPassword, setShowPassWord] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleRegistration = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);


      setErrorMessage(null);
      setSuccess(null);
      if(password.length > 6){
        setErrorMessage('Password should have at least 6 character');
        return;
      }else if(!/[A-Z]/.test(password)){
        setErrorMessage('Password should have at least one uppercase');
        return;
      }

      CreateUser( email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('Created message Successfully');
      })
      .catch(error =>{
        console.error(error);
        setErrorMessage(error.message)
      })

  }

  return (
    <div className="max-w-7xl mx-auto " data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
      <div className="hero bg-gradient-to-r from-yellow-500 to-blue-500">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white uppercase">Registration Now</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-white uppercase">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-white uppercase">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email address"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold uppercase">Password</span>
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
                <span className="absolute text-2xl top-[260px] right-10" onClick={()=>setShowPassWord(!showPassword)}>
                  {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-red-600 font-bold">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-white">PhotoURL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-gradient-to-r from-yellow-500 to-blue-500">Registration</button>
              </div>
              <div className="text-center">
                <p className="font-bold">Its <Link className="text-sky-600 font-bold uppercase" to='/login'>Login</Link> Page</p>
              </div>
            </form>
            {
              errorMessage && <p className="text-red-600 italic font-bold mb-10 text-center">{errorMessage}</p>
            }
            {
              success && <p className="text-green-600 italic font-bold mb-10 text-center">{success}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
