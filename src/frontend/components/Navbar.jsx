"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/frontend/assets/logos/logo.png'
import logoName from '@/frontend/assets/logos/coloredLogoName.png'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("Home"); // Default active link

    const navComp = [
        { name: 'Home', link: '#Home' },
        { name: 'Our Products', link: '#Products' },
        { name: 'About us', link: '#About' },
        { name: 'Contact us', link: '#Contact' },
        { name: 'Help', link: '#Help' },
    ];

    return (
        <div className='flex flex-col'>
            {/* Logo Section */}
            <div className='flex justify-center space-x-2 py-2 items-center w-full'>
                <Image width={39} height={54} src={logo} alt="Logo" />
                <Image width={171} height={32} src={logoName} alt="Logo Name" />
            </div>

            {/* Navigation Menu */}
            <div className='flex justify-evenly items-center p-5 font-extralight w-full bg-[#112D4E] relative'>
                {navComp.map((nav) => (
                    <div key={nav.name} className='flex flex-col items-center'>
                        <Link
                            href={nav.link}
                            className={`text-white transition-all duration-300 ${activeNav === nav.name ? "font-semibold" : ""}`}
                            onClick={() => setActiveNav(nav.name)} // Update active state on click
                        >
                            {nav.name}
                        </Link>
                        {/* Yellow underline appears only on the active item */}
                        <div
                            className={`w-[5%] h-[5px] absolute bottom-0 rounded-t-full bg-[#FFEB00] transition-all duration-300 ${
                                activeNav === nav.name ? "opacity-100" : "opacity-0"
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
