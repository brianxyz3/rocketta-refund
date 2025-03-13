import React from "react";

const StatsAnalysisCard = ({style, children}) => {
  return (
      <div className={`${style} text-white rounded-lg border-black flex items-center justify-evenly lg:justify-center border mx-1 sm:mx-3`}>
        {children}
    </div>
  )
}

export default StatsAnalysisCard;