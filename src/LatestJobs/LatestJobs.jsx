/* eslint-disable react/prop-types */

const LatestJobs = ({job}) => {
    const {id, Job_title, image, deadline, price_Range} = job || {}
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-40">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="my-5 ml-8 items-center text-start">
          <h2 className=" font-bold ">Name: <span className="">{Job_title}</span></h2>
          <h2 className=" font-bold my-2">DeadLine: <span>{deadline}</span></h2>
          <p className="font-bold ">Price: <span>{price_Range}</span></p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
