
import FooterAccordionLinks from "./FooterAccordionLinks";

const Footer = () => {

    return (
        <footer className="mt-12 text-white text-center w-full">
            <div className="bg-[#030e31] py-7 w-full flex flex-col items-center">
                <div className="flex justify-center mb-3">
                    <div className="w-full md:w-1/2 text-lg flex flex-col items-center gap-3 px-2">
                        <p>
                            Rockettarefund Ltd., which trades as Rockettarefund, is a Canadian company No. XXXXXX, authorized and regulated in Canada, and operates globally.
                        </p>
                        <p>
                            In the UK, the company operates through a legal exclusion, which removes the need to be authorized and regulated by the FCA.
                        </p>
                        <p>
                            In Australia, the company is registered as Rockettarefund (Aust) Ltd., authorized and regulated under ARBN XXXXXX | ASIC XXXXXX | AFCA XXXXXX | Australian Credit Licence No. XXXXXX
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <FooterAccordionLinks title="Useful Links" items={["Home", "About Us", "FAQ"]} link={["/", "/about", "/faq"]} />
                    <FooterAccordionLinks title="Contact Us" items={["XXXXXXXXXX"]} />
                    <FooterAccordionLinks title="Location" items={["X Front St West, Toronto, ON XX XX, Canada"]} />
                    <FooterAccordionLinks title="Our office hours(GMT)" items={["Mon, Wed - 08:00-17:00", "Tue, Thu - 10:00-19:00", "Fri - 08:00-12:00", "Sat, Sun - closed"]} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;