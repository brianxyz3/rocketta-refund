import React from "react";
import { useAuth } from "../authContext";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Logout, Settings } from "@mui/icons-material";
// import { signOut } from "../controller/authController";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import NavTitlePopUp from "./NavTitlePopUp";



const LoggedInNavIcon = ({order}) => {
  const navigate = useNavigate();
    const { currentUser, setUserLoggedIn } = useAuth();

  return (
    <div className="md:flex mx-auto items-center gap-2">
      {
        currentUser.isAdmin &&
        <div className="text-nowrap inline-block group relative hover:text-blue-400 hover:scale-105 duration-200 text-center">
            <Link to="/updateAdmin" className="flex justify-center items-center text-nowrap md:text-sm lg:text-base hover:text-blue-400 duration-200">
            <Settings />
            Admin
            <NavTitlePopUp>
              Manage Admins
            </NavTitlePopUp>
          </Link>
          </div>
      }

      <div className={`flex justify-between gap-2 ${order} w-full`}>
        <div className={`flex items-center hover:scale-105 hover:cursor-default hover:text-blue-400 duration-200`}>
          <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
          {currentUser && <p className="text-sm text-wrap">{currentUser.email}</p>}
        </div>
        <button
          className="group relative hover:text-red-600 hover:scale-105 duration-200"
          onClick={async () => {
            // signOut();
            setCurrentUser((prevUser) => (
              { ...prevUser, email: "", id: "", token: "", isAdmin: false }
            ));
            setUserLoggedIn(false);
            toast.success("Goodbye!");
            // setTimeout(() => (navigate(0)), 1000)
          }
          }>
          <NavTitlePopUp>
            LogOut
          </NavTitlePopUp>
          <Logout sx={{ fontSize: 30 }} />
        </button>
      </div>
    </div>
  )
}

export default LoggedInNavIcon;