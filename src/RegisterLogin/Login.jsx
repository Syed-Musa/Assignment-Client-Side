import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero bg-gradient-to-r from-yellow-400 to-amber-400">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold uppercase text-white">Login now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-orange-300 to-amber-500">
            <form className="card-body ">
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
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover font-bold text-red-600">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p className="font-bold">Go to <Link className="text-sky-700 font-bold uppercase" to='/register'>Registration</Link> Page</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
