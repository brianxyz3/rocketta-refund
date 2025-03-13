import Hero from "../components/Hero"
import ConsultationForm from "../components/ConsultationForm"
import Features from "../components/Features"
import Banner from "../components/Banner"
import About from "../components/About"
import ContactUs from "../components/ContactUs"


const HomePage = () => {

    return (
        <>
            <Hero />
            <main className="-mt-12">
                <ContactUs>
                    <div className="bg-white lg:w-1/2 w-11/12 mx-auto py-8 px-4 mb-4 shadow-lg shadow-black md:p-8">
                        <div className="text-center mb-6">
                            <h3 className="text-3xl text-[#112152] font-bold">Start here</h3>
                            <p className="text-2xl text-gray-600">Secure a free consultation</p>
                        </div>
                        <ConsultationForm />
                    </div>
                </ContactUs>
                <Banner />
                <Features />
                <About />
            </main>
        </>
    )
}

export default HomePage