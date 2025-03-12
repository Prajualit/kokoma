"use client";
import { useState, useEffect } from "react";

const ScrollProgressButton = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    // 🔥 Handle Scroll Progress Calculation
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🔝 Scroll to Top on Click
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Circle configuration
    const size = 50;
    const strokeWidth = 2;
    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <button
            onClick={scrollToTop} // ⬅️ Click to scroll to top
            className="fixed bottom-20 right-5 z-50 -rotate-90 bg-[#112D4E] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        >
            {/* SVG Circular Progress */}
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Background Circle */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="#ccc"
                    strokeWidth={strokeWidth}
                    fill="none"
                    opacity="0.3"
                />
                {/* Progress Circle */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="white"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transition="stroke-dashoffset 0.3s ease-in-out"
                />
            </svg>

            {/* Scroll Icon Inside Button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 23 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22.9498 9.66162C22.9498 9.44305 22.7976 9.15309 22.6433 9.01214L13.9434 0.984899C13.5374 0.620257 12.8793 0.577782 12.4058 0.947922C11.9826 1.27888 11.972 1.92396 12.3633 2.28348L19.3469 8.71714H1.2C0.599231 8.71714 0.112305 9.14 0.112305 9.66169C0.112305 10.1834 0.599242 10.6062 1.2 10.6062H19.3469L12.3633 17.0399C11.972 17.399 11.9994 18.0284 12.4058 18.3755C12.8346 18.7416 13.5437 18.709 13.9434 18.3385L22.6433 10.3112C22.8988 10.0934 22.9456 9.88399 22.9498 9.66213V9.66162Z"
                        fill="white"
                    />
                </svg>
            </div>
        </button>
    );
};

export default ScrollProgressButton;
