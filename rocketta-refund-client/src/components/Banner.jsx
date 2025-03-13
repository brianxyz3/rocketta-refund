import Blogs from "./Blogs";
import "../stylesheets/banner.css";
import { Check } from "@mui/icons-material";

const Banner = () => {
    const scamCategories = [
        "Online Scams",
        "Crypto Scams",
        "Marketplace Scams",
        "Trading Scams",
        "Work Scams",
        "Dating Scams",
        "Investment Scams"
    ]


    return (
        <section>
            <Blogs />
            <div className="bg-blue-700 my-20">
            <div className="bg-white slider -rotate-1" data-animated="true">
                <ul className="slider_inner text-blue-700 font-bold text-3xl">
                    {
                        scamCategories.map(scam => (
                            <li key={scam}><Check fontSize="large" /> {scam}</li>
                        ))
                    }
                    {
                        scamCategories.map(scam => (
                            <li key={`${scam}-hidden`} aria-hidden="true"><Check fontSize="large" /> {scam}</li>
                        ))
                    }

                </ul>
            </div>
            </div>
        </section>
    )
}

export default Banner