import FeaturesCard from "./FeaturesCard";

const Features = () => {

    return (
        <section id="features">
            <div className="my-5 px-6 flex gap-3 justify-evenly flex-wrap flex-lg-nowrap">
                <FeaturesCard>
                    <div className="text-xl md:text-2xl font-bold">
                        <h5>5 Years</h5>
                        <h5>of Experience</h5>
                    </div>
                    <p className="py-8 text-sm md:text-base">
                        Rocketta Refund has been around for 5 years now. The experience we have accumulated during the years is well worth mentioning. Being highly familiar with most financial authorities worldwide for years gives us an edge and specific relationships that can be used to speed up processes that otherwise would have taken a mucgh longer time, with much higher success rate.
                    </p>
                </FeaturesCard>

                <FeaturesCard>
                    <div className="text-xl md:text-2xl font-bold">
                        <h5>Best</h5>
                        <h5>Industry Experts</h5>
                    </div>
                    <p className="py-8 text-sm md:text-base">
                        Rocketta Refund will never compromise the quality of the staff. Our lawyers, accountants, consultants and service team are all consisted of top-quality experts,with proven real-life-experience and recognition from known Universities.
                    </p>
                </FeaturesCard>

                <FeaturesCard>
                    <div className="text-xl md:text-2xl font-bold">
                        <h5>Fast &</h5>
                        <h5>Effective Solutions</h5>
                    </div>
                    <p className="py-8 text-sm md:text-base">
                        In Rocketta Refund we believe in working Smart AND Hard. We have experts who have both psychology and economy background, which allow them to combine efficiency and smart work and incorporate it into their day-to-day work. This method has been proven to produce faster results compared to methods of other companies, significantly.
                    </p>
                </FeaturesCard>
            </div>
        </section>
    )
}

export default Features;