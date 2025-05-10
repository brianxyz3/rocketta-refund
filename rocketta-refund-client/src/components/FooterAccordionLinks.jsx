import { Link } from "react-router";

const FooterAccordionLinks = ({ title, items, link = [null] }) => {

    return (
        <details className="border-b border-white overflow-hidden py-3 text-sm lg:text-lg">
            <summary className="flex flex-nowrap items-center justify-between hover:cursor-pointer px-3">
                <h5 className="text-lg font-bold lg:text-2xl">{title}</h5>
            </summary>
            <ul className="text-start mx-3 mt-3 text-gray-400">
                {items.map((item, idx) => (
                    <Link className="hover:text-white block origin-left hover:scale-105 my-2"
                     key={item} to={link[idx]}>
                        {item}
                    </Link>
                )
                )}
            </ul>
        </details>
    )
}

export default FooterAccordionLinks;