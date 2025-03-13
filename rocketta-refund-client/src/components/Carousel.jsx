import { logoImg1, logoImg10, logoImg11, logoImg2, logoImg3, logoImg4, logoImg5, logoImg6, logoImg7, logoImg8, logoImg9 } from "../assets/images";
import "../stylesheets/carousel.css";

const Carousel = () => {
    return (
        <div className="carousel md:w-2/3 w-full mx-auto my-3 py-1 rounded-md">
            <div className="carousel_inner flex">
                <div className="carousel_item" id="1">
                    <div className="flex">
                        <img src={logoImg1} alt="..." />
                        <img src={logoImg2} alt="..." />
                        <img src={logoImg3} alt="..." />
                    </div>
                </div>
                <div className="carousel_item" id="2">
                    <div className="flex">
                        <img src={logoImg4} alt="..." />
                        <img src={logoImg5} alt="..." />
                        <img src={logoImg6} alt="..." />
                    </div>
                </div>
                <div className="carousel_item" id="3">
                    <div className="flex">
                        <img src={logoImg7} alt="..." />
                        <img src={logoImg8} alt="..." />
                        <img src={logoImg9} alt="..." />
                    </div>
                </div>
                <div className="carousel_item" id="4">
                    <div className="flex justify-evenly">
                        <img src={logoImg10} alt="..." />
                        <img src={logoImg11} alt="..." />
                    </div>
                </div>
                <div className="carousel_nav">
                    <a href="#1"></a>
                    <a href="#2"></a>
                    <a href="#3"></a>
                    <a href="#4"></a>
                </div>
            </div>
        </div>
    )
}

export default Carousel;