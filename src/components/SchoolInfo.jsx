import React from "react";

const SchoolInfo = ({ school }) => {
    console.log(school);
    return (
        <article className="h-screen w-1/4 bg-white absolute left-0 z-20 shadow-md font-manrope flex flex-col items-center">
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
                    {school.school_address[0].address}
                </p>
            </div>
            <div className="font-bold text-2xl mt-10 opacity-70 underline">
                Drivers
            </div>
        </article>
    );
};

export default SchoolInfo;
