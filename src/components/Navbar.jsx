const Navbar = () => {
    return (
        <nav className="flex justify-between px-16 h-20 items-center fixed w-screen bg-white">
            <div className="font-Manropen font-semibold text-2xl">
                Transi<span className="text-green-600">Link</span>
            </div>
            <div className="flex font-manrope gap-6">
                <div>Company</div>
                <div>Services</div>
                <div>Pricing</div>
                <div>About us</div>
            </div>
            {localStorage.getItem("token") === "" ? (
                <div className="flex gap-3">
                    <button
                        onClick={() => {
                            window.location.href = "/login";
                        }}
                    >
                        Login
                    </button>
                    <button
                        className="bg-green-500 rounded-full px-6 py-2.5"
                        onClick={() => {
                            window.location.href = "/register";
                        }}
                    >
                        Register
                    </button>
                </div>
            ) : (
                <div>
                    <button
                        className="bg-green-700 rounded-full px-6 py-2.5 mr-4 text-white font-bold"
                        onClick={() => {
                            window.location.href = "/dashboard";
                        }}
                    >
                        Dashboard
                    </button>
                    <button
                        className="bg-red-500 rounded-full px-6 py-2.5 text-white font-bold"
                        onClick={() => {
                            localStorage.setItem("token", "");
                            window.location.href = "/";
                        }}
                    >
                        Log Out
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
