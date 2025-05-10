import { useState } from "react";
import { Link } from "react-router";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useAuth } from "../authContext";
import LoggedInNavIcon from "./LoggedInNavIcon";
import LoggedOutNavIcon from "./LoggedOutNavIcon";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { userLoggedIn, currentUser } = useAuth();
    const { isAdmin } = currentUser;


    const navItems = [
        {
            title: "HOME",
            link: "/",
        },
        {
            title: "ABOUT",
            link: "/about",
        },
        {
            title: "FAQ",
            link: "/faq",
        },
    ]

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="w-full overflow-y-hidden md:overflow-visible fixed top-0 z-50 bg-[#112152] px-3 text-blue-600 md:text-[#f4f4f4] py-4">
                <div className="flex justify-between md:items-end">
                    <Link to="/"><div className="text-xl font-bold font-sans text-blue-800 md:text-2xl"><span className="text-blue-300">r</span>ockettarefund.org</div></Link>
                    <div className={`${isOpen ? userLoggedIn ? "h-[19rem]" : "h-52" : "h-0"} md:opacity-100 md:scale-100 md:h-fit md:flex md:justify-evenly md:w-11/12 duration-300`}>
                        <div className={"w-full flex"}>
                            <div className="w-7/12 flex justify-center border-1 md:border-none pt-0 text-center gap-y-4 absolute md:static top-20 left-0 right-0 mx-auto flex-col md:flex-row md:w-full md:gap-x-6 lg:gap-x-8 xl:gap-x-10">
                                {navItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        onClick={() => (setIsOpen(false))}
                                        to={item.link}
                                        className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-translate-y-1 hover:text-blue-300 hover:scale-105">{item.title}</Link>
                                ))}

                                {userLoggedIn && !isAdmin && <Link
                                    to="/userHistory"
                                    onClick={() => (setIsOpen(false))}
                                    className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-translate-y-1 hover:text-blue-300 hover:scale-105"
                                >
                                    HISTORY
                                </Link>}

                                {isAdmin && <Link
                                    to="/cases"
                                    onClick={() => (setIsOpen(false))}
                                    className="border-b-2 border-gray-200 md:border-[#112152] hover:border-b-blue-300 md:hover:-translate-y-1 hover:text-blue-300 hover:scale-105"
                                >
                                    CASES
                                </Link>}
                                {/* sign in and sign out for mobile view */}
                                <div className="md:hidden">
                                    {
                                        userLoggedIn ? <LoggedInNavIcon /> : <LoggedOutNavIcon />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="hidden md:flex gap-4  items-center">{
                            // sign in and sign out for large screen size
                            userLoggedIn ?
                                <LoggedInNavIcon /> : <LoggedOutNavIcon /> 
                        }
                        </div>

                    {/* old mobile navbar collapse button */}
                    {/* <button className="flex p-1 md:hidden text-white bg-blue-500 rounded-md" onClick={toggleNavbar}>
                        {isOpen ?
                            <ClearRoundedIcon fontSize="medium" />
                            : <MenuRoundedIcon fontSize="medium" />
                        }
                    </button> */}

                    <button className={`flex p-1 size-8 justify-center items-center md:hidden text-white bg-blue-600 rounded-md hover:hover:bg-blue-500 hover:border`} onClick={toggleNavbar}>
                        <div className={`w-full flex flex-col gap-1`}>
                            <div className={`h-[4px] bg-white duration-500 ms-auto ${isOpen ? "w-3" : "w-6"}`}></div>
                            <div className={`h-[4px] bg-white duration-500 ms-auto ${isOpen ? "w-4" : "w-6"}`}></div>
                            <div className={`h-[4px] bg-white duration-500 ms-auto ${isOpen ? "w-5" : "w-6"}`}></div>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
            <div className="my-16"></div>
        </>
    )
}

export default Navbar;



