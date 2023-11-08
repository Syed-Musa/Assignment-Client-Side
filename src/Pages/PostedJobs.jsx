/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PostedJobs = ({post}) => {

  const { Job_title, category, image, deadline, price_Range, short_description} = post || {}
  console.log(post)

  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { _id } = useParams();
  const [postedData, setPostedData] = useState();


  useEffect(()=>{
    fetch('http://localhost:5000/postedjob')
    .then(res => res.json())
    .then(data => setPostedData(data));
  }, [])

  useEffect(() => {
    const postedJobs = data?.find((postedData) => postedData._id === _id);
    setPostedData(postedJobs);
  }, [_id, data]);

  return (
    <div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Your Email:</span> {user?.email}
      </p>
      <div className="card w-96 bg-base-100 my-5 shadow-xl">
        <figure className="px-10 pt-10 h-40">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="my-5 ml-8 items-center text-start">
          <h2 className=" font-bold ">
            Name: <span>{Job_title}</span>
          </h2>
          <h2 className=" text-gray-400 ">
            <span>{category}</span>
          </h2>
          <h2 className=" font-bold my-2">
            DeadLine: <span>{deadline}</span>
          </h2>
          <p className="font-bold ">
            Price: <span>{price_Range}</span>
          </p>
          <p className="font-bold ">
            Description:{" "}
            <span className="text-gray-500">{short_description}</span>
          </p>
          <button onClick={()=> handleDelete(_id)} className="btn bg-red-600 font-bold text-white">X</button>
          
        </div>
      </div>
    </div>
  );
};

export default PostedJobs;
