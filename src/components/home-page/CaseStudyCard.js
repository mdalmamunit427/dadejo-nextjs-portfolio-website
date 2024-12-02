"use client"

import Image from "next/image";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const CaseStudyCard = ({ imgSrc, title, description }) => {
    const [cursorPos, setCursorPos] = useState({ x: "50%", y: "50%" });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // Cursor X position within the card
        const y = e.clientY - rect.top; // Cursor Y position within the card
        setCursorPos({ x: `${x}px`, y: `${y}px` });
    };

    return (
        <div
            className="relative flex-1 group  framer-animation"
            onMouseMove={handleMouseMove}
            style={{ overflow: "hidden" }} // Prevent circle from moving outside
        >
            {/* Image */}
            <div>
                <Image
                    width={600}
                    height={600}
                    src={imgSrc}
                    alt={title}
                    className="w-full h-[300px] md:h-[500px] object-cover rounded-[30px] md:rounded-[100px] shadow-md"
                />

                {/* Card Content */}
                <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-6 px-5">
                    <div className="text-center md:text-left text-white">
                        <h2 className="text-md md:text-lg font-semibold">{title}</h2>
                        <p className="text-sm text-gray-400">{description}</p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                        <div className="border-2 hidden md:block border-gray-600 rounded-3xl px-6 py-4 text-white hover:text-black hover:bg-white transition duration-300 ease-in-out">
                            <FiArrowRight className="text-lg md:text-xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hover Effect */}
            <div
                className="absolute inset-0 bg-black bg-opacity-20 rounded-[30px] md:rounded-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
                {/* Moving Circle */}
                <div
                    className="absolute w-32 h-32 bg-white/90 text-black flex items-center justify-center rounded-full shadow-lg transition-transform duration-150 cursor-pointer"
                    style={{
                        left: cursorPos.x,
                        top: cursorPos.y,
                        transform: "translate(-50%, -50%)", // Center the circle
                    }}
                >
                    <p className="text-sm font-semibold">VIEW PROJECT</p>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyCard;
