import { IoShieldOutline } from "react-icons/io5";
import HeroImage from "../assets/hero.svg";
const Hero = () => {
    return (
        <section className="font-manrope bg-[#effef1] h-[70vh] flex pt-20">
            <main className="w-1/2 px-16 pt-16">
                <div className="text-5xl font-semibold leading-[3.5rem]">
                    Modernizing Student Transportation to Make it Safe,
                    Sustainable, and Accessible for All
                </div>
                <div className="flex items-center gap-2 pt-6">
                    <IoShieldOutline />
                    Your kids Safety is our responsibility
                </div>
                <div className="flex gap-2.5 pt-6">
                    <button className="px-6 py-2 bg-green-500 rounded-full text-lg text-white">
                        Register Now
                    </button>
                    <button className="px-6 py-2 rounded-full text-lg bg-white">
                        Learn More
                    </button>
                </div>
            </main>
            <article>
                <img
                    src={HeroImage}
                    alt="Hero"
                    className="w-[700px] mt-10 pr-10"
                />
            </article>
        </section>
    );
};

export default Hero;
