import React from "react";
import { Link } from "react-router";


const LearnMoreBtn = ({ link = "/about" }) => {
  return (
    <div>
      <Link to={link} className="text-blue-200 bg-blue-600 py-2 px-5 border border-blue-800 rounded-3xl text-base md:text-base group-hover:shadow-md group-hover:text-blue-700 duration-200 group-hover:bg-white group-hover:translate-y-6">Learn More</Link>
    </div>
  )
}

export default LearnMoreBtn;