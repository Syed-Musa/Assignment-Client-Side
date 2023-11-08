import { useContext, useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";

const JobsDtl = () => {
  const { user } = useContext(AuthContext);
  const [job, setJob] = useState(null);
  const { _id } = useParams();
  const data = useLoaderData();

  const handleBit = (e) => {
    e.prevenDefault();
    const form = new FormData(e.currentTarget);
    const newJobApplication = {
      employerEmail: form.get("employerEmail"),
      deadline: form.get("deadline"),
      buyerEmail: form.get("buyerEmail"),
      price: form.get("price"),
    };

    axios
      .post("localhost:5000/bids", newJobApplication)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Job added successfully!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to add the job. Please try again.",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);

        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred. Please try again later.",
        });
      });

    console.log("Job bit application data:", newJobApplication);
  };

  useEffect(() => {
    const jobDetails = data?.find((job) => job._id === _id);
    setJob(jobDetails);
  }, [_id, data]);

  return (
    <div >
      <div>
        {job ?
        <div className="card w-96 bg-base-100 shadow-xl">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Job-Title: {job.jobTitle}
            </h5>
            <div className="card-body">
                <p className="font-normal text-gray-700 dark:text-gray-400">
                 <span className="font-bold"> Deadline:</span> {job.deadline}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                 <span className="font-bold"> Buyer Email:</span> {job.employerEmail}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                 <span className="font-bold"> Budget:</span> {job.minPrice} - {job.maxPrice}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Your Email:</span> {user?.email}
                </p>
            </div>
        </div> : 
        <span className="loading loading-spinner loading-lg"></span>
        }
      </div>

      <div className="mt-6 border px-6 py-9 max-w-3xl">
        <form onSubmit={handleBit}>
          <div className="flex flex-wrap">
            <div className="w-1/2 pr-2 mb-4">
              <label className="text-gray-600" htmlFor="employerEmail">
                Email of the Employer:
              </label>
              <input
                type="email"
                id="employerEmail"
                name="buyerEmail"
                placeholder={user?.email}
                value={user?.email}
                readOnly
                className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100"
              />
            </div>

            <div className="w-1/2 pl-2 mb-4">
              <label className="text-gray-600" htmlFor="jobTitle">
              Email of the Buyer
              </label>
              <input
                type="text"
                id="jobTitle"
                name="employerEmail"
                placeholder={job?.employerEmail}
                value={job?.employerEmail}
                readOnly
                className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 pr-2 mb-4">
              <label className="text-gray-600" htmlFor="deadline">
                Deadline:
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100"
                required
              />
            </div>
            <div className="w-1/2 pr-2 mb-4">
              <label className="text-gray-600" htmlFor="minPrice">
                Price:
              </label>
              <input
                type="text"
                id="minPrice"
                name="price"
                className="w-full p-2 border rounded border-gray-300 focus:outline-none focus-border-blue-500 bg-gray-100"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover-bg-blue-700 focus:outline-none"
          >
            Bid Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobsDtl;
