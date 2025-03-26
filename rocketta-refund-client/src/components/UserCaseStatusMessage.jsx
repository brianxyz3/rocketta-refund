import React from "react";

const UserCaseStatusMessage = ({title, msg, style}) => {
  return (
    <div>
        <h3 className={`${style} font-bold tracking-wider text-xl text-center mb-3`}>{title}</h3>
        <p className="leading-6 lg:mx-3 text-pretty">{msg}</p>
    </div>
  )
}

export default UserCaseStatusMessage;