import { useRef } from "react";
import { TextField } from "@mui/material";

const Register = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const fullNameRef = useRef();
    const phoneNumberRef = useRef();
    const emailRef = useRef();
    const streetAddressRef = useRef();
    const longitudeRef = useRef();
    const latitudeRef = useRef();

    const handleRegistration = (e) => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const full_name = fullNameRef.current.value;
        const contact_number = phoneNumberRef.current.value;
        const email = emailRef.current.value;
        const full_address = streetAddressRef.current.value;
        const longitude = longitudeRef.current.value;
        const latitude = latitudeRef.current.value;

        fetch("https://transilink-backend.onrender.com/user/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                full_name,
                contact_number,
                email,
                address: {
                    full_address,
                    longitude,
                    latitude,
                },
            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    localStorage.setItem("token", data.JWT);
                    window.location.href = "/register/child";
                });
            } else {
                alert("Username already exists");
            }
        });
    };
    return (
        <section className="h-screen flex">
            <button
                className="absolute right-10 top-4 font-manrope font-bold text-sm"
                onClick={() => {
                    window.location.href = "/login";
                }}
            >
                Login
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
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg font-manrope w-1/3 opacity-80">
                    "Entrusting the safety of my child to any service is a
                    decision I take very seriously. However, with Transilink, I
                    have the utmost confidence and peace of mind, knowing that
                    my child is in truly good hands."
                    <p className="text-sm opacity-70 mt-2">Rohan Singhani</p>
                </div>
            </main>
            <article className="flex flex-col px-20 font-manrope pt-20">
                <h1 className="text-3xl font-bold">Register</h1>
                <p className="text-sm opacity-50 mb-10 mt-2">
                    Create an account to continue
                </p>
                <div className="flex gap-4 mb-4">
                    <TextField
                        label="Username"
                        inputRef={usernameRef}
                        color="success"
                    />
                    <TextField
                        label="Password"
                        inputRef={passwordRef}
                        color="success"
                        type="password"
                    />
                </div>
                <TextField
                    label="Full Name"
                    color="success"
                    inputRef={fullNameRef}
                />
                <div className="flex gap-4 mb-4 mt-4">
                    <TextField
                        label="Phone Number"
                        color="success"
                        inputRef={phoneNumberRef}
                    />
                    <TextField
                        label="Email"
                        color="success"
                        inputRef={emailRef}
                        type="email"
                    />
                </div>
                <TextField
                    label="Street Address"
                    color="success"
                    inputRef={streetAddressRef}
                />
                <div className="flex gap-4 mt-4">
                    <TextField
                        label="Longitude"
                        color="success"
                        inputRef={longitudeRef}
                    />
                    <TextField
                        label="Latitude"
                        color="success"
                        inputRef={latitudeRef}
                    />
                </div>
                <button
                    className="bg-green-600 py-4 text-white mt-4 rounded-md font-bold hover:bg-green-700 transition-colors"
                    onClick={handleRegistration}
                >
                    Register Account
                </button>

                <p className="text-sm opacity-50 mt-4">
                    Register as a driver instead{" "}
                    <span
                        className="text-green-600 cursor-pointer"
                        onClick={() => {
                            window.location.href = "/register/driver";
                        }}
                    >
                        here
                    </span>
                </p>
            </article>
        </section>
    );
};

export default Register;
