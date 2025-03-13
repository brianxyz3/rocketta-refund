import React from "react";
import "../stylesheets/navTitlePopUp.css";

const NavTitlePopUp = ({children}) => {
  return (
    <div className="nav_popup w-0 text-[0.7rem] group-hover:px-0.5 group-hover:text-black hidden group-hover:flex group-hover:bg-gray-400 absolute right-0 -bottom-[1.5rem] rounded-sm group-hover:w-fit">
      {children}
    </div>
  )
}

export default NavTitlePopUp;