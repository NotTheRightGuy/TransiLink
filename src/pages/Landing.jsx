import Navbar from "../components/Navbar";
import Hero from "../section/Hero";
import Trust from "../section/Trust";
import Working from "../section/Working";
import Features from "../section/Features";
import Testimonials from "../section/Testimonials";
import Footer from "../section/Footer";

const Landing = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Trust />
            <Working />
            <Features />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Landing;
