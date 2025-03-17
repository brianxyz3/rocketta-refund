import { StarRounded } from "@mui/icons-material";
import ConsultationForm from "../components/ConsultationForm";
import ContactUs from "../components/ContactUs";
import AboutPageCard from "../components/AboutPageCard";


const AboutPage = () => {
    return (
        <section className="container mt-20 mb-5 mx-auto">
            <div className="bgAboutImg bg-cover bg-center w-11/12 h-fit mx-auto text-center mb-5">
                <div className="py-10 bg-black/50 h-full">
                <h1 className="text-3xl md:text-5xl text-white mb-2 md:mb-3">About</h1>
                <p className="text-sky-50 text_shadow text-base md:text-xl w-5/6 md:w-3/4 mx-auto">
                    About Rockettarefund Consulting Your Trusted Partner in Scam and Cryptocurrency Investigations. Rockettarefund is a leading firm specializing in scam and cryptocurrency investigations. Our team of certified specialists of experienced scam investigations and cyber professionals are dedicated to helping victims of fraud just like you. We possess the expertise, resources, and determination required to challenge scammers and assist you in recovery of your assets. The Rockettarefund is a 21st century agency that implements and enforces Federal consumer financial law and ensures that markets for consumer financial products are fair, transparent, and competitive.
                </p>
            </div>
            </div>
            <div className="w-11/12 md:w-3/5 text-center mx-auto">
                <h3 className="text-3xl text-center font-bold my-3">Our Investigation Services</h3>
                <p>With our specialized team of experts, we offer cutting-edge scam investigation services that go beyond recovery, focusing on holding fraudsters accountable for their actions.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-60/36 w-full my-3">
                <div className="text-gray-600">
                    <div className="bg-white text-center w-11/12 mx-auto py-2 mb-4">
                        <AboutPageCard number="01" title="Comprehensive Scam Investigation" description="Our investigative scope spans beyond cryptocurrencies to encompass all fraudulent activities, leveraging sophisticated tools and techniques to protect victimized parties." />
                        <AboutPageCard number="02" title="Support In Financial Investigations" description="We stand against financial crimes across various platforms -from digital currencies to conventional banking, reinforcing recovery initiatives and aiding law enforcement to ensure victim relief." />
                        <AboutPageCard number="03" title="Forensics and Fund Tracing" description="Our forensic investigations utilizes advanced techniques to uncover financial crimes, identify responsible parties, and trace misappropriated funds." />
                    </div>
                </div>
                <aside className="w-11/12 mx-auto md:w-auto md:flex items-center justify-center">
                    <ContactUs>
                        <div className="bg-white p-8 mb-4 text-center w-full md:mx-2 lg:w-11/12">
                            <h3 className="text-xl md:text-3xl mb-2 text-[#112152] font-bold">Start here</h3>
                            <ConsultationForm />
                        </div>
                    </ContactUs>
                </aside>
            </div>
            <div className="w-11/12 mx-auto mb-10">
                <div className="text-center w-5/6 mx-auto my-4">
                    <h3 className="text-3xl my-3">6 Reasons Why You Should Work With Rockettarefund</h3>
                    <p className="text-gray-600">We love our job and we constantly devilop our skills to deliver better services to our clients. We welcome you to study how good we are to be sure about our professionalism.</p>
                </div>
                <div className="py-3">
                    <div className="flex flex-wrap flex-md-nowrap justify-evenly gap-5 mb-5">
                        <div className="w-[28rem] flex flex-col gap-3">
                            <StarRounded sx={{ fontSize: 50 }} className="text-blue-500" />
                            <h4 className="text-xl">1. Certified Investigators</h4>
                            <p className="text-sm text-gray-600">Our team of certified investigators excels in scam recovery across various sectors, using their extensive experience to ensure your stolen funds are effectively reclaimed.</p>
                        </div>
                        <div className="w-[28rem] flex flex-col gap-3">
                            <StarRounded sx={{ fontSize: 50 }} className="text-blue-500" />
                            <h4 className="text-xl">2. 360 Degree Investigation</h4>
                            <p className="text-sm text-gray-600">We employ a 360-degree approach to cases, combining thorough investigations, Open Source Intelligence insights, and advanced tools. This method amplifies our chances of successfully recovering funds.</p>
                        </div>
                        <div className="w-[28rem] flex flex-col gap-3">
                            <StarRounded sx={{ fontSize: 50 }} className="text-blue-500" />
                            <h4 className="text-xl">3. Cutting-Edge Technology & Software</h4>
                            <p className="text-sm text-gray-600">Our use of advanced technology and specialized software empowers us to trace illicit activities, uncover vital evidence, and bolster your fund recovery efforts, irrespective of the fraud medium involved.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-md-nowrap justify-evenly gap-5">
                        <div className="w-[28rem] flex flex-col gap-3">
                            <StarRounded sx={{ fontSize: 50 }} className="text-blue-500" />
                            <h4 className="text-xl">4. Global Market Experience</h4>
                            <p className="text-sm text-gray-600">We have 4+ years of experience working in worldwide cybersecurity market and understand the unique regulatory intricacies across different regions.</p>
                        </div>
                        <div className="w-[28rem] flex flex-col gap-3">
                            <StarRounded sx={{ fontSize: 50 }} className="text-blue-500" />
                            <h4 className="text-xl">5. Partnerships & Collaborations</h4>
                            <p className="text-sm text-gray-600">We maximize our investigations’ impact through collaboration with law enforcement agencies and timely joint operations. Our established connections with financial institutions, law firms, and cryptocurrency exchanges facilitate effective teamwork and swift recovery processes.</p>
                        </div>
                        <div className="w-[28rem] flex flex-col gap-3">
                            <StarRounded sx={{ fontSize: 50 }} className="text-blue-500" />
                            <h4 className="text-xl">6. Compassionate Support</h4>
                            <p className="text-sm text-gray-600">We understand the emotional impact of falling victim to a scam. Our team provides empathetic and personalized support, guiding you through the recovery process with care and professionalism.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-10">
                <div className="w-11/12 md:w-3/5 text-center mx-auto mb-8">
                <h3 className="text-3xl text-center my-3">3 Steps Towards a Better Outcome</h3>
                <p>With our specialized team of experts, we offer cutting-edge scam investigation services that go beyond recovery, focusing on holding fraudsters accountable for their actions.</p>
            </div>
                <div className="mb-3">
                <div className="text-gray-600">
                    <div className="bg-white flex flex-wrap flex-lg-nowrap justify-evenly gap-1 text-center w-11/12 mx-auto p-2 mb-4">
                        <AboutPageCard number="01" title="Case Evaluation & Strategy Formation" description="In our initial consultation, we assess your situation thoroughly, understanding the specifics and devising a tailored recovery plan." />
                        <AboutPageCard number="02" title="Investigation & Evidence Gathering" description="Our certified team conducts comprehensive investigations, tracing blockchain transactions, identifying scam participants, and assembling crucial evidence to fortify your case." />
                        <AboutPageCard number="03" title="Get Results" description="Post-evidence collection, we engage in prompt negotiations, leveraging our expertise, legal acumen, and industry ties to assist you, minimizing any potential losses by taking immediate and decisive action." />
                    </div>
                </div>
            </div>
            </div>
            <div className="w-11/12 mx-auto mb-10">
                <div className="text-center w-5/6 mx-auto my-4">
                    <h3 className="text-3xl my-3">Our Advantages</h3>
                    <p className="text-gray-600">We do our business in fast-changing environment and we are always on the edge as we strive to deliver the best products and services to our audience. We fight for the perfect performance and value every client and their requests.</p>
                </div>
                <div className="flex flex-wrap flex-lg-nowrap gap-2 border-b border-b-gray-300 py-3 justify-evenly">
                    <div className="w-[24rem] flex flex-col gap-2">
                        <h2 className="text-5xl text-blue-500">15</h2>
                        <h4 className="text-lg">Business partners</h4>
                        <p className="text-sm text-gray-600">We understand the emotional impact of falling victim to a scam. Our team provides empathetic and personalized support, guiding you through the recovery process with care and professionalism.</p>
                    </div>
                    <div className="w-[24rem] flex flex-col gap-2">
                        <h2 className="text-5xl text-blue-500">250+</h2>
                        <h4 className="text-lg">Closed cases</h4>
                        <p className="text-sm text-gray-600">During our work we completed a great amount of projects and that's not the limit!</p>
                    </div>
                    <div className="w-[24rem] flex flex-col gap-2">
                        <h2 className="text-5xl text-blue-500">200+</h2>
                        <h4 className="text-lg">Happy clients</h4>
                        <p className="text-sm text-gray-600">We provide our clients with exquisite round-the-clock support and meet all their needs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;