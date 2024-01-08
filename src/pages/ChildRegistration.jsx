import { TextField, Button } from "@mui/material";
import { useState, useRef } from "react";

const ChildRegistration = () => {
    const nameRef = useRef();
    const gradeRef = useRef();
    const ageRef = useRef();
    const schoolRef = useRef();

    const addChild = () => {
        const name = nameRef.current.value;
        const grade = gradeRef.current.value;
        const age = ageRef.current.value;
        const school = schoolRef.current.value;

        const token = localStorage.getItem("token");

        fetch("https://transilink-backend.onrender.com/child", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name,
                grade,
                age,
                school,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    alert("Child added successfully");
                    window.location.href = "/dashboard";
                } else {
                    alert(data.message);
                }
            });
    };

    return (
        <section className="h-screen flex">
            <button
                className="absolute right-10 top-4 font-manrope font-bold text-sm"
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                }}
            >
                Sign out
            </button>
            <main className="bg-green-600 w-1/3">
                <p
                    className="absolute top-4 left-4 text-white font-bold text-2xl font-manrope cursor-pointer"
                    onClick={() => {
                        window.location.href = "/";
                    }}
                >
                    TransiLink
                </p>
                <p className="absolute bottom-4 left-4 text-white font-bold text-lg font-manrope w-1/4 opacity-80">
                    "As a parent, the safety of my child is my top priority, and
                    finding a transportation service that I can trust has been a
                    game-changer for our family. Transilink has not only met but
                    exceeded my expectations in providing a secure and reliable
                    service."
                    <p className="text-sm opacity-70 mt-2">Ramini Devi</p>
                </p>
            </main>
            <article className="px-8 py-2">
                <h1 className="text-2xl font-bold font-manrope">
                    Add your kids
                </h1>
                <p className="text-sm opacity-50 mb-10">
                    Add your kids to find a ride for them
                </p>
                <div className="child-registration-form">
                    {/* Use MUI to create a form which asks for child details */}
                    {/* Use the TextField component for each input */}
                    {/* Use the Button component for the submit button */}
                    {/* Add a button to add more children */}
                    {/* Add a button to submit the form */}
                    {/* Add a button to go back to the dashboard */}

                    <TextField
                        label="Name"
                        className="w-full "
                        color="success"
                        inputRef={nameRef}
                    />
                    <div className="flex gap-4 mt-4 mb-4">
                        <TextField
                            label="Grade"
                            className=" mb-4"
                            type="number"
                            color="success"
                            inputRef={gradeRef}
                        />
                        <TextField
                            label="Age"
                            className="mb-4"
                            type="number"
                            color="success"
                            inputRef={ageRef}
                        />
                    </div>

                    <TextField
                        label="School"
                        className="w-full mb-4"
                        color="success"
                        inputRef={schoolRef}
                    />
                    <div className="mt-4">
                        <Button
                            variant="contained"
                            className="w-full"
                            color="success"
                            onClick={addChild}
                        >
                            Add Child
                        </Button>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ChildRegistration;
