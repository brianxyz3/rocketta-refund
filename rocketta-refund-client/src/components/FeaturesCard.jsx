import React from "react"
import LearnMoreBtn from "./LearnMoreBtn";

const FeaturesCard = ({children}) => {
  return (
      <div className="bg-white/50 group flex flex-col text-blue-700 hover:text-white hover:bg-blue-700 justify-between w-[29rem] px-4 py-10 rounded-xl duration-200">
          <div>
              {children}
          </div>
          <LearnMoreBtn/>
      </div>
  )
}

export default FeaturesCard;