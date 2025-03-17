import React from "react";
import AboutCard from "./AboutCard"
import Carousel from "./Carousel"

const About = () => {
    return (
        <section className="text-blue-700">
            <h3 className="md:text-2xl text-lg text-gray-500 font-bold text-center">Some of the frauds we investigated</h3>
            <Carousel />
            <div className="mt-12 flex flex-wrap gap-4 px-3 justify-evenly">
                <AboutCard title="Professionalism" image="https://res.cloudinary.com/dfrojjvhq/image/upload/v1742201684/professionalism-img_snyacb.jpg" description="Everything we do, we make sure we don't compromise being highly professional. In our work environment, we keep holding our staff to a pro standard. Professionalism is one of the most important core values Money Back sets to itself as a company. We put a strong emphasis on the people we hire and the way they work to get our clients as satisfied as possible." />

                <AboutCard title="Integrity" image="https://res.cloudinary.com/dfrojjvhq/image/upload/v1742201680/integrity-img_ozgj2c.jpg" description="The more we work with integrity, the more we attract clients with the same values. These are the ones we want. They are appreciative, communicate effectively and with honest, do what they say they will do, and come back for more. We have no toleration for people who are not serious and time-wasters." />

                <AboutCard title="Transparency" image="https://res.cloudinary.com/dfrojjvhq/image/upload/v1742201684/transparency-img_gisvt2.jpg" description="Rockettarefund is highly transparent to the customer. From well-detailed price breakdown to hiring practices and internal process, our customer will get the knowledge he needs in order to legitimately doing business with us. We expect from ourselves what we expect from others, and by being transparent we express ourselves fully and in an honest way." />

                <AboutCard title="Diversity" image="https://res.cloudinary.com/dfrojjvhq/image/upload/v1742201682/diversity-img_ymkhea.jpg" description="Rockettarefund as a company encourages huge diversity in the workplace. Different thinkers, different approaches, unconventional methods to addressing conventional issues and so on. This diversity contributes to a creative environment which is definitely helping us producing our world-record results. Without diversity, there would be no advancements or new ways to solve problems." />
            </div>
        </section>
    )
}

export default About