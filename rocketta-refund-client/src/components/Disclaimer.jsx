import Partners from "./Partners";

const Disclaimer = () => {
    return (
        <section>
            <div className="bg-[#112152] px-2 text-white text-center pt-5 pb-3 border-t border-white flex flex-col items-center w-full">
                <p className="text-sm">
                    Official Partners:
                </p>
                <div className="flex justify-center lg:justify-evenly gap-4 w-full md:w-1/2 py-3 border-b border-white">
                    <Partners />
                </div>
                <div className="text-base w-full md:w-1/2 flex flex-col gap-3 lg:text-xl">
                    <p>
                        Disclaimer: Rockettarefund offers each new client a free consultation. Funds Recovery or other services that will be subsequently commissioned will incur fees and/or commissions, based on the service and the complexity of each individual case. Rockettarefund doesn't offer any investments, financial services, or advice.
                    </p>
                    <p>
                        For your information: Although the process of recovering your losses from an online scam can be very tedious and long, sometimes longer than a year, it is a process you can undertake yourself, and it does not require any official representation.
                    </p>
                    <p>
                        The Company cannot accept prohibited payment methods.
                    </p>
                    <p>
                        Every payment received by the company is secure under the PCI-DSS protocol.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Disclaimer;