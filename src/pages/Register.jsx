import RegisterImage from "../assets/register.jpg";
import { useState, useRef } from "react";

const Register = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistration = (e) => {
        e.preventDefault();

        setUsername(usernameRef.current.value);
        setPassword(passwordRef.current.value);

        fetch("http://localhost:8001/auth/register", {
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
                alert("Username already exists");
            }
        });
    };
    return (
        <section className="h-screen flex">
            <main className="bg-white w-1/2 ">
                <img
                    src={RegisterImage}
                    alt="Login Image"
                    className="object-cover w-full h-full "
                />
            </main>
            <article className="flex flex-col py-64 px-20 font-manrope">
                <h1 className="font-bold text-5xl">Register</h1>
                <p className="mt-3 mb-8">
                    Register your account with username and password
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
                    onClick={handleRegistration}
                >
                    Lets Go!
                </button>
            </article>
        </section>
    );
};

export default Register;
