import React from "react";
import { MdClose } from "react-icons/md";
import { useRef, useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

const SchoolInfo = ({ school }) => {
    const schoolInfoRef = useRef(null);
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8001/driver/get/${school._id}`)
            .then((res) => res.json())
            .then((data) => {
                setDrivers(data);
            });
    }, []);

    return (
        <article
            className="h-screen w-1/4 bg-white absolute left-0 z-20 shadow-md font-manrope flex flex-col items-center"
            ref={schoolInfoRef}
        >
            <div
                className="absolute right-1 top-1"
                onClick={() => {
                    schoolInfoRef.current.style.display = "none";
                    ``;
                }}
            >
                <MdClose className="text-2xl text-gray-400" />
            </div>
            <div className="flex flex-col items-center mt-10">
                <img
                    src={school.school_display_picture}
                    alt="school logo"
                    className="h-32 w-32 rounded-full"
                />
                <h1 className="font-bold text-center text-3xl mt-8">
                    {school.school_name}
                </h1>
                <p className="text-sm text-gray-400 text-center px-6 mt-3">
                    {school.school_address.address}
                </p>
            </div>
            <div className="font-bold text-2xl mt-10 opacity-70 underline">
                Drivers
            </div>
            <div className="mt-5">
                {drivers.length > 0 ? (
                    drivers.map((driver) => (
                        <div className="flex items-center gap-4">
                            <img
                                src={driver.avatar}
                                alt="driver"
                                className="h-20 w-20 rounded-full"
                            />
                            <div>
                                <p className="text-xl font-bold mt-2">
                                    {driver.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                    <FaPhoneAlt className="inline-block mr-2 text-xs" />
                                    {driver.phone}
                                </p>
                                <p className="text-xs text-gray-400">
                                    <FaAddressCard className="inline-block mr-2" />
                                    {driver.licenseNumber}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-sm font-bold mt-2">No drivers found</p>
                )}
            </div>
        </article>
    );
};

export default SchoolInfo;
