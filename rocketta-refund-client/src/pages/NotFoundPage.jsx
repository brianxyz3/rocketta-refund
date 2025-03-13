import { Link } from "react-router";
import WarningIcon from '@mui/icons-material/Warning';
import { HomeRounded } from "@mui/icons-material";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Navbar from "../components/Navbar";

const NotFoundPage = () => {
    return (
        <>
            <Navbar />
            <main className="text-center flex flex-col justify-center items-center h-96">
            <WarningIcon fontSize="large" className="text-yellow-400 text-6xl mb-4" />
            <h1 className="text-6xl font-bold mb-4">Oops!</h1>
            <p className="text-xl mb-5">This page does not exist</p>
            <Link
                to="/"
                    className="text-[#112152] flex items-center gap-2 bg-[#112152] hover:bg-blue-900 hover:text-blue-900 hover:text-lg hover:font-bold hover:transition-all rounded-md px-3 py-2 mt-4"
                ><span className="text-white">Go Home Page</span> <HomeRounded sx={{ fontSize: 32 }} className="bg-white p-1 rounded-full" />
            </Link>
            </main>
            <Footer />
            <Copyright />
        </>
    )
}

export default NotFoundPage;