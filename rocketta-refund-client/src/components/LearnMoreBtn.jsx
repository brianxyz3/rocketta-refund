import React from "react";
import { Link } from "react-router";


const LearnMoreBtn = ({ link = "/about" }) => {
  return (
    <div>
        <Link to={link} className="text-blue-200 bg-blue-600 p-2 border border-blue-800 rounded-3xl text-sm md:text-base hover:shadow-md hover:text-blue-700 duration-200 hover:bg-white hover:translate-y-6">Learn More</Link>
    </div>
  )
}

export default LearnMoreBtn;