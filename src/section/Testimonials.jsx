import TestimonialCard from "../components/TestimonialCard";
const Testimonials = () => {
    return (
        <section className="font-manrope mt-20 px-6">
            <p className="flex justify-center text-3xl opacity-50 font-bold">
                Testimonials
            </p>
            <main className="grid grid-cols-3 gap-4 mt-32">
                <div className="grid gap-8 mt-32">
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                <div className="grid gap-8">
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                <div className="grid gap-8 mt-32">
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
            </main>
        </section>
    );
};

export default Testimonials;
