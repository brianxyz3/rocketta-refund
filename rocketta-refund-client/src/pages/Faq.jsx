import { Link } from "react-router";
import ContactUs from "../components/ContactUs";

const Faq = () => {
    return (
        <main className="text-gray-500 mt-20">
            <div>
                <div className="bgFaqImg bg-center bg-cover rounded-2xl mt-3 mb-8 mx-auto w-72 h-52 md:w-[40rem] md:h-[28rem] lg:w-[50rem] lg:h-[32rem] text-center">
                    <div className="bg-slate-200/25 size-full flex flex-col justify-center gap-2">
                        <h1 className="text-3xl lg:text-6xl text-black font-bold">F.A.Q.</h1>
                        <p className="text-base lg:text-2xl">Frequently Asked Questions</p>
                    </div>
                </div>

                <div className="w-5/6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-40/60 text-base md:text-lg">
                        <div className="flex flex-col gap-2 w-full md:w-3/4 lg:w-full mx-auto justify-center">
                            <h5 className="text-xl mb-2 text-black">Who are we?</h5>
                            <p>Rockettarefund Consulting specializes in investigating fraud and financial crimes. Our team of certified investigators gathers critical evidence, prepares concise reports, and provides comprehensive support for litigation, prosecution, settlement negotiations, and financial recovery.</p>
                            <p>We assist a wide range of clients, including law firms, corporations, government agencies, investors, and individuals. With a global reach, we work closely with clients both domestically and internationally.</p>
                        </div>
                        <div className="w-full md:w-3/4 lg:w-5/6 ml-auto lg:mr-0 mr-auto flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">Why us?</h5>
                                <p>Rockettarefund comprises a team of professionals specializing in the recovery of funds lost online. Our primary expertise lies in identifying and retrieving your money, returning it directly to you. We are dedicated to our core objective and consistently achieve outstanding results in pursuing this goal.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">How can I determine if I am eligible for funds recovery?</h5>
                                <p>Eligibility for funds recovery depends on various factors such as the nature of the scam, jurisdiction, and specific circumstances. It's best to consult with our team for a personalized assessment of your case to determine your eligibility.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">What types of scams can be eligible for funds recovery?</h5>
                                <p>Funds recovery can be pursued for various types of scams, including cryptocurrency scams, investment fraud, binary options scams, Ponzi schemes, hacks and more. Each case is unique, and our team will evaluate the specifics to determine the viability of recovery.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-y border-y-gray-300 my-10 py-20">
                    <div className="w-5/6 mx-auto text-base md:text-lg flex flex-wrap flex-lg-nowrap gap-2 justify-center lg:justify-between">
                        <div className="w-full md:w-3/4 lg:w-5/12">
                            <h5 className="text-xl mb-4 text-black">What information should I provide during the consultation?</h5>
                            <p>During the consultation, it is helpful to provide any relevant documentation, transaction records, communication with the scammer, and any other evidence related to the scam. This will assist us in better understanding your case and developing a suitable strategy.</p>
                        </div>
                        <div className="w-full md:w-3/4 lg:w-5/12">
                            <h5 className="text-xl mb-4 text-black">What are the costs associated with funds recovery?</h5>
                            <p>We offer various fee structures, including contingency-based arrangements, where our fees are determined as a percentage of the recovered funds. During the consultation, we will discuss the fee structure and ensure transparency about the costs involved.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        <ContactUs>
                            <Link to="/"><h2 className="text-4xl hover:scale-125 hover:-translate-y-2 duration-200">Get Started Now!</h2></Link>
                        </ContactUs>
                    </div>
                </div>

                <div className="w-5/6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-40/60 text-base md:text-lg">
                        <div className="w-full md:w-3/4 lg:w-full flex flex-col gap-4 mx-auto">
                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">What our company does?</h5>
                                <p>Our primary objective is to deliver results by directly engaging with relevant entities and financial institutions to ensure the return of your scammed funds. We handle the entire communication and refund process on your behalf, striving to streamline the recovery procedure for you.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">Will my case be kept confidential?</h5>
                                <p>Yes, we prioritize client confidentiality and handle all cases with utmost discretion. Your personal information and the details of your case will be treated with strict confidentiality.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">What if I have already engaged another company for funds recovery?</h5>
                                <p>If you have previously engaged another company, we advise exercising caution and thoroughly assessing their credibility. Unfortunately, we have encountered instances where companies have copied reports or misrepresented their expertise. It is crucial to verify the authenticity and reputation of the company you have engaged. Our team recommends conducting proper due diligence, checking for certifications and testimonials to ensure you are working with a trustworthy and reputable firm. If you have concerns or doubts, we are here to provide an independent evaluation and offer our professional guidance based on our genuine expertise and experience in the field.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">Can I handle the funds recovery process on my own?</h5>
                                <p>While it is technically possible to pursue funds recovery independently, it is important to consider the challenges involved. Dealing with scams and fraud companies requires specialized expertise, access to costly tools, and knowledge of the legal landscape. Engaging professional assistance significantly enhances your chances of success. Our team possesses the necessary resources, industry connections, and experience to navigate the complexities of funds recovery, advocate for your best interests, and increase the likelihood of a favorable outcome.</p>
                            </div>
                        </div>


                        <div className="w-full md:w-3/4 lg:w-5/6 ml-auto lg:mr-0 mr-auto flex flex-col justify-center gap-4">
                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">What if I have already reported the scam to the authorities?</h5>
                                <p>Reporting the scam to the authorities is an essential step. Our team can work in conjunction with law enforcement agencies to support the legal process and enhance your chances of fund recovery.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">Is there a guarantee of successful funds recovery?</h5>
                                <p>While we strive to maximize the chances of successful recovery, it is important to note that there are inherent risks and uncertainties involved in funds recovery cases. We cannot provide a guarantee of successful recovery, but we employ our expertise and resources to pursue the best possible outcome for your case.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">What happens if the funds cannot be fully recovered?</h5>
                                <p>While our goal is to recover as much of your funds as possible, the outcome may vary depending on the circumstances. We will keep you informed throughout the process and provide guidance on the available options in case full recovery is not achievable.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">What if I have additional questions or concerns?</h5>
                                <p>We welcome any additional questions or concerns you may have. Our team is here to provide the necessary information, address your queries, and guide you through the funds recovery process. Feel free to reach out to us for further assistance.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h5 className="text-xl mb-2 text-black">How long does the refund process take?</h5>
                                <p>Every case is unique and necessitates a meticulous review by our specialists. However, the central principle remains evident – the sooner you reach out to us, the quicker the process of recovering your money will be.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-5/6 mx-auto my-10 text-lg flex flex-col gap-4 justify-center border-y border-y-gray-300 py-10">
                    <div>
                        <h5 className="text-xl mb-4 text-black">Is this a scam</h5>
                        <p>We are a fully licensed and legitimate company registered in Canada. Our commitment to transparency means that we provide clients with comprehensive insights into our company’s strategies and policies.</p>
                    </div>
                    <div>
                        <h5 className="text-xl mb-4 text-black">What are the costs associated with funds recovery?</h5>
                        <p>We offer various fee structures, including contingency-based arrangements, where our fees are determined as a percentage of the recovered funds. During the consultation, we will discuss the fee structure and ensure transparency about the costs involved.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Faq;