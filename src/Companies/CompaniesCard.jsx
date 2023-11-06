/* eslint-disable react/prop-types */
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const CompaniesCard = ({ company }) => {
  const { id, title, image, address } = company || {};

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="pt-10">
          <img className="w-full h-60 rounded-xl" src={image} alt="Shoes" />
        </figure>
        <div className="text-start my-5">
          <h2 className="font-bold text-[18px]">Company Name: {title}</h2>
          <p className="font-bold text-[18px]">Address: {address}</p>
          <div className="card-actions text-3xl text-center ml-28 my-5">
            <BsFacebook className="bg-blue-800 rounded-xl text-white"></BsFacebook>
            <BsInstagram className="bg-pink-500 rounded-xl text-white"></BsInstagram>
            <BsTwitter className="bg-sky-400 rounded-xl text-white"></BsTwitter>
            <BsLinkedin className="bg-blue-600 rounded-xl text-white"></BsLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesCard;
