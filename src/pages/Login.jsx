import { useRef } from "react";

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        fetch("http://localhost:8001/user/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    localStorage.setItem("token", data.JWT);
                    window.location.href = "/";
                });
            } else {
                alert("Login Failed");
            }
        });
    };

    return (
        <section className="h-screen flex">
            <button
                className="absolute right-10 top-4 font-manrope font-bold text-sm"
                onClick={() => {
                    window.location.href = "/register";
                }}
            >
                Register
            </button>
            <main className="bg-green-600 w-1/2 ">
                <p
                    className="absolute top-4 left-4 text-white font-bold text-2xl font-manrope cursor-pointer"
                    onClick={() => {
                        window.location.href = "/";
                    }}
                >
                    TransiLink
                </p>
                <p className="absolute bottom-4 left-4 text-white font-bold text-lg font-manrope w-1/3 opacity-80">
                    "I can't express how impressed I am with Transilink! As a
                    frequent traveler, I've experienced various transportation
                    options, but none have matched the level of professionalism
                    and convenience provided by this exceptional service."
                    <p className="text-sm opacity-70 mt-2">
                        Janmejay Chatterjee
                    </p>
                </p>
            </main>
            <article className="flex flex-col py-64 px-20 font-manrope">
                <h1 className="font-bold text-5xl">Login</h1>
                <p className="mt-3 mb-8">
                    Login to your account with username and password
                </p>
                <input
                    type="text"
                    placeholder="Your Username"
                    className="border-2 border-gray-300 p-2 mb-3 rounded-full"
                    ref={usernameRef}
                />
                <input
                    type="password"
                    placeholder="Your Password"
                    className="border-2 border-gray-300 p-2 mb-3 rounded-full"
                    ref={passwordRef}
                />

                <button
                    className="bg-green-600 text-white font-bold my-6 py-3 text-xl rounded-full"
                    onClick={handleLogin}
                >
                    Lets Go!
                </button>
            </article>
        </section>
    );
};

export default Login;
