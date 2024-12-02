import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Collaborate = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-12 framer-animation">
            <div className="flex flex-col lg:flex-row gap-8">
                <div>
                    <h1 className="md:text-7xl text-3xl font-bold text-white mb-4">
                        Let’s <br /> Collaborate
                    </h1>
                    <p className="text-gray-400 text-2xl font-bold mb-6">
                        Book a call with me –
                    </p>
                </div>
                <div className="relative w-52 h-52 group">
                    {/* Circle Container */}
                    <div className="w-full h-full rounded-full bg-gradient-to-t from-gray-800 to-gray-600 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <FiArrowUpRight className="text-white text-2xl transform group-hover:scale-125 transition-transform duration-300 ease-in-out" />
                    </div>
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-gray-500 transition-all duration-300 ease-in-out" />
                </div>
            </div>
        </div>
    );
};

export default Collaborate;
