import React from "react";
import { Login } from "@mui/icons-material";
import { Link } from "react-router";


const LoggedOutNavIcon = () => {
  return (
    <Link to="/login" className="group flex relative gap-2 w-full justify-end items-center hover:text-green-500 duration-200">
        <p>Login</p>
      <Login sx={{ fontSize: 30 }} />
    </Link>
  )
}

export default LoggedOutNavIcon;