"use client"
import React, { useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="bg-[#060608] text-white fixed top-0 left-0 right-0 z-[9999] px-5">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center md:py-8 py-5 framer-animation">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <Link href="/"  className="text-lg font-semibold">BADEJO</Link>
                </div>

                {/* Desktop Navigation */}
                <div>
                    <p className="text-[#86868D] hidden md:block">
                        Brand & Product Designer <br />
                        based in Lagos Nigeria
                    </p>
                </div>
                <div className="hidden md:flex items-center space-x-6 font-semibold">

                    <a href="#case-studies"  className="hover:underline hover:text-gray-400">
                        Case Studies
                    </a>
                    <a href="#work-experience" className="hover:underline hover:text-gray-400">
                        Experience
                    </a>
                    <a href="#" className="hover:underline hover:text-gray-400">
                        Hire me
                    </a>
                </div>
                {/* Contact */}
                <div className="hidden md:flex relative items-center justify-end">
                    <button className="bg-gray-700 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in">Book Appointment</button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleDrawer} className="text-2xl">
                        {isDrawerOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isDrawerOpen && (
                <div className="mt-4 bg-gray-800 text-white p-4 rounded-lg md:hidden">
                    <p className="mb-4">
                        Brand & Product Designer <br />
                        based in Lagos Nigeria
                    </p>
                    {/* Switch */}
                    <div className="hidden md:flex relative w-10 h-5 bg-gray-700 rounded-full items-center justify-end p-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <Link
                        href=""
                        className="block mb-2 hover:underline hover:text-gray-400"
                        onClick={toggleDrawer}
                    >
                        Case Studies
                    </Link>
                    <Link
                        href=""
                        className="block mb-2 hover:underline hover:text-gray-400"
                        onClick={toggleDrawer}
                    >
                        Experience
                    </Link>
                    <Link
                        href=""
                        className="block hover:underline hover:text-gray-400"
                        onClick={toggleDrawer}
                    >
                        Hire me
                    </Link>

                </div>
            )}


        </div>
    );
};

export default Navbar;
