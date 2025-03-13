import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router";

const FooterAccordionLinks = ({ title, items, link = [null] }) => {
    const [isOpen, setIsOpen] = useState(false);
    let idx = -1;

    return (
        <div className="border-b border-white overflow-hidden pt-3 text-sm lg:text-lg">
            <div className="flex flex-nowrap items-center justify-between hover:cursor-pointer px-3" onClick={() => { setIsOpen(!isOpen) }}>
                <h5 className="text-lg font-bold lg:text-2xl">{title}</h5>
                {isOpen ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
            </div>
            <div className={`${!isOpen && "h-0 scale-y-0"} origin-top flex flex-col items-start px-3 mt-3 duration-300 gap-y-2 text-gray-400`}>
                {items.map(item => {
                    idx += 1;
                    return <Link className="hover:text-white hover:scale-105" key={item} to={link[idx]}>{item}</Link>
                }
                )}
            </div>
        </div>
    )
}

export default FooterAccordionLinks;