import LearnMoreBtn from "./LearnMoreBtn";

const AboutCard = ({ title, image, description }) => {
    return (
        <>
            <div className="bg-white w-5/6 md:w-[26rem] xl:w-1/5 h-fit lg:h-[38rem] flex-wrap xl:flex-nowrap flex flex-col justify-between text-center border-b-4 rounded-2xl border-blue-600 hover:-translate-y-3 pb-6 duration-200">
                <div>
                    <img src={image} loading="lazy" width="8000px" height="300px" alt="" />
                    <h3 className="text-2xl my-3 font-bold">{title}</h3>
                    <div className="mb-3 px-2 text-sm md:text-base">
                        {description}
                    </div>
                </div>
                <LearnMoreBtn />
            </div>
        </>
    )
}

export default AboutCard;