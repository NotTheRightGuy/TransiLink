const TestimonialCard = () => {
    return (
        <main
            className="w-[450px] font-manrope p-10 rounded-3xl"
            style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
        >
            <div className="flex items-center">
                <div>
                    <img
                        src="https://placehold.co/60x60"
                        alt="Profile Image"
                        className="rounded-full mr-4"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Albert Flores</h2>
                    <p className="opacity-50">IT Specialist</p>
                </div>
            </div>
            <div className="mt-6 font-medium opacity-70">
                I really like the service TransiLink provides. The driver I had
                for this past school year was friendly, polite, and most
                important on time. The company will let me know if the driver
                was late or there will be a different driver coming. Also there
                is a GPS tracker along with a text saying my child arrived
                safely to school.
            </div>
        </main>
    );
};

export default TestimonialCard;
