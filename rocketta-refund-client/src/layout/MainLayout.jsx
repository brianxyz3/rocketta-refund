import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Disclaimer from "../components/Disclaimer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <Disclaimer />
            <Copyright />
            <ToastContainer />
        </>
    )
}

export default MainLayout;