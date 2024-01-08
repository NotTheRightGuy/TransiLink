import { useRef, useState, useEffect } from "react";
import { TextField } from "@mui/material";
import AutoComplete from "@mui/material/Autocomplete";

const DriverRegister = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const fullNameRef = useRef();
    const phoneNumberRef = useRef();
    const LicenseNumberRef = useRef();
    const schoolRef = useRef();

    const [allSchools, setAllSchools] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8001/school/getAll")
            .then((res) => res.json())
            .then((data) => {
                let schools = [];
                data.forEach((school) => {
                    schools.push({
                        label: school.school_name,
                        id: school._id,
                    });
                });
                setAllSchools(schools);
            });
    }, []);

    const registerDriver = () => {
        const fullName = fullNameRef.current.value;
        const phoneNumber = phoneNumberRef.current.value;
        const LicenseNumber = LicenseNumberRef.current.value;
        const schoolName = schoolRef.current.value;
        const schoolId = allSchools.find(
            (school) => school.label === schoolName
        ).id;

        const data = {
            name: fullName,
            phone_number: parseInt(phoneNumber),
            license_number: parseInt(LicenseNumber),
            school_id: schoolId,
        };

        fetch("http://localhost:8001/driver/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                window.location.href = "/login";
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
                    "I've been driving for Transilink for some time now, and I
                    can't help but share how immensely fulfilling this
                    experience has been for both me and the passengers I've had
                    the pleasure of driving."
                    <p className="text-sm opacity-70 mt-2">Mohan Lal Singh</p>
                </div>
            </main>
            <article className="flex flex-col px-20 font-manrope pt-20">
                <h1 className="text-3xl font-bold">Driver Registeration</h1>
                <p className="text-sm opacity-50 mb-10 mt-2">
                    Register yourself as a driver
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
                        label="License Number"
                        color="success"
                        inputRef={LicenseNumberRef}
                        type="email"
                    />
                </div>
                <AutoComplete
                    disablePortal
                    id="combo-box-demo"
                    options={allSchools}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="School"
                            inputRef={schoolRef}
                        />
                    )}
                />

                <button
                    className="bg-green-600 py-4 text-white mt-4 rounded-md font-bold hover:bg-green-700 transition-colors"
                    onClick={registerDriver}
                >
                    Register As Driver
                </button>

                <p className="text-sm opacity-50 mt-4">
                    Register as a parent instead{" "}
                    <span
                        className="text-green-600 cursor-pointer"
                        onClick={() => {
                            window.location.href = "/register";
                        }}
                    >
                        here
                    </span>
                </p>
            </article>
        </section>
    );
};

export default DriverRegister;
