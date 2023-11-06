/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";

const LatestJobs = ({job}) => {
    const { Job_title, category, image, deadline, price_Range, short_description} = job || {}
  return (
    <div>
      <div className="card w-96 bg-base-100 my-5 shadow-xl">
        <figure className="px-10 pt-10 h-40">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="my-5 ml-8 items-center text-start">
          <h2 className=" font-bold ">Name: <span >{Job_title}</span></h2>
          <h2 className=" text-gray-400 "><span >{category}</span></h2>
          <h2 className=" font-bold my-2">DeadLine: <span>{deadline}</span></h2>
          <p className="font-bold ">Price: <span>{price_Range}</span></p>
          <p className="font-bold ">Description: <span className="text-gray-500">{short_description}</span></p>
          <div className="card-actions">
            <button className="btn bg-white text-white hover:bg-green-800">Bid Now <BsArrowRight className="text-2xl"></BsArrowRight></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
