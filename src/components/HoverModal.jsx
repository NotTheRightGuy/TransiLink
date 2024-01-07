import React from "react";

const HoverModal = ({ message }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-1/2 h-1/2 rounded-lg flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-center">{message}</h1>
            </div>
        </div>
    );
};

export default HoverModal;
