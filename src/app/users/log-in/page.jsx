"use client";
import React from "react";
import coconut from "@/frontend/assets/log-in/coconut.png";
import logo from "@/frontend/assets/logos/logo.png";
import logoName from "@/frontend/assets/logos/logoName.png";
import Image from "next/image";
import Router from "next/router";

const Page = () => {
    const router = Router;

    const handleSubmit = async () => {
        const response = await fetch("")
    }

    return (
        <div className="h-screen flex">
            <div className="relative h-screen w-[65%]">
                <div
                    className="h-full w-full bg-cover bg-center flex flex-col items-center justify-center"
                    style={{ backgroundImage: `url(${coconut.src})` }}
                >
                    <Image className="z-50 w-[114px] h-[143px] " src={logo} alt="" />
                    <Image className="z-50 w-[326px] h-[88px] " src={logoName} alt="" />
                </div>
                <div className="absolute top-0 left-0 h-full w-full bg-[#112D4E] opacity-[34%]"></div>
            </div>
            <div className="bg-[#112D4E] h-screen w-[35%] flex flex-col items-center justify-center">
                <form
                    className="w-full flex flex-col justify-center space-y-20 "
                >
                    <div className="flex flex-col items-center justify-center space-y-3">
                        <span className="text-[48.01px] leading-[58.52px] ">Login</span>
                        <span className="text-[19.78px] leading-[24.11px] font-extralight ">Connect with use</span>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-10">
                        {[{ label: "Name", type: "text" }, { label: "Email or Phone Number", type: "text" }].map(({ label, type, index }) => (
                            <div
                                key={index}
                                className="flex flex-col w-full items-center justify-center"
                            >
                                <input
                                    type={type}
                                    placeholder={`${label}`}
                                    className="bg-transparent placeholder-white outline-none border-b border-white w-[80%] text-[19.78px] leading-[24.11px] font-extralight p-2"
                                />
                            </div>
                        ))}
                        <div
                        className="w-full flex items-center justify-end px-14"
                        >
                            <a href="/users/forgot-password">
                                <span className="text-[14px] leading-[17.07px] font-extralight text-white text-right ">Forgot Password?</span>
                            </a>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center pt-10">
                        <button
                            type="submit"
                            className="w-[60%] rounded-full text-[#112D4E] bg-white py-2 border hover:bg-[#112D4E] hover:text-white transition-colors focus:bg-white focus:text-[#112D4E]"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
