const Navbar = () => {
    return (
        <nav className="flex justify-between px-16 h-20 items-center">
            <div className="font-Manropen font-semibold text-2xl">
                Transi<span className="text-green-600">Link</span>
            </div>
            <div className="flex font-manrope gap-6">
                <div>Company</div>
                <div>Services</div>
                <div>Pricing</div>
                <div>About us</div>
            </div>
            <div className="flex gap-3">
                <button>Login</button>
                <button className="bg-green-500 rounded-full px-6 py-2.5">
                    Register
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
