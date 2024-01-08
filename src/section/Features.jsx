import { MdEmergency } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { MdShield } from "react-icons/md";
const Features = () => {
    return (
        <section className="mt-20 font-manrope">
            <p className="text-center text-3xl opacity-50 font-bold">
                Features
            </p>
            <main className="">
                <div className="flex justify-evenly">
                    <div className="w-[325px] h-[235px] flex flex-col justify-center items-center text-center mt-16">
                        <MdEmergency className="text-5xl text-green-700" />
                        <h2 className="font-bold text-xl mb-2">
                            Emergency Contact
                        </h2>
                        <p>
                            Our dedicated emergency contact feature ensures that
                            you can reach us instantly in case of any unforeseen
                            circumstances
                        </p>
                    </div>
                    <div className="w-[325px] h-[235px] flex flex-col justify-center items-center text-center mt-16">
                        <FaLocationDot className="text-5xl text-green-700" />
                        <h2 className="font-bold text-xl mb-2">
                            Real time tracking
                        </h2>
                        <p>
                            Our real-time tracking feature empowers you to stay
                            informed about the whereabouts of your loved ones or
                            yourself.
                        </p>
                    </div>
                    <div className="w-[325px] h-[235px] flex flex-col justify-center items-center text-center mt-16">
                        <FaBookOpen className="text-5xl text-green-700" />
                        <h2 className="font-bold text-xl mb-2">
                            Monthly Subscription
                        </h2>
                        <p>
                            Our flexible monthly subscription plans offer
                            seamless budgeting and hassle-free commuting.
                        </p>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div className="w-[325px] h-[235px] flex flex-col justify-center items-center text-center mt-16">
                        <GrUserWorker className="text-5xl text-green-700" />
                        <h2 className="font-bold text-xl mb-2">
                            Driver Vetting
                        </h2>
                        <p>
                            Our rigorous driver vetting process ensures that
                            you're entrusting your safety to only the most
                            qualified and trustworthy individuals.
                        </p>
                    </div>
                    <div className="w-[325px] h-[235px] flex flex-col justify-center items-center text-center mt-16">
                        <MdShield className="text-5xl text-green-700" />
                        <h2 className="font-bold text-xl mb-2">
                            100% Safe Rides
                        </h2>
                        <p>
                            Our commitment to safety goes beyond our
                            comprehensive safety protocols. We're constantly
                            evolving our security measures to stay ahead of any
                            potential threats, ensuring that your child and you
                            are always protected.
                        </p>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Features;
