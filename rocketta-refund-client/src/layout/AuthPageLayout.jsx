import React from "react";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Copyright from "../components/Copyright";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


const AuthPageLayout = () => {
  return (<>
    <Navbar/>
    <Outlet/>
    <Copyright/>
    <ToastContainer/>
  </>
  )
}

export default AuthPageLayout;