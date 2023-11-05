import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero bg-gradient-to-r from-teal-400 to-lime-400">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white uppercase">Registration Now</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-teal-600 to-fuchsia-800-400">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-white uppercase">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="email"
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
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold uppercase">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
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
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
              <div className="text-center">
                <p className="font-bold">Its <Link className="text-sky-600 font-bold uppercase" to='/login'>Login</Link> Page</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
