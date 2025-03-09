"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import coconut from "@/frontend/assets/Home/Products/coconut.png";
import arrow from "@/frontend/assets/Home/Products/arrow.png";

const Products = () => {
    const swiperRef = useRef(null);
    const scrollBarRef = useRef(null);
    const scrollTrackRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const slides = [coconut, coconut, coconut, coconut, coconut, coconut, coconut, coconut, coconut, coconut];

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging || !scrollTrackRef.current || !swiperRef.current) return;

            const track = scrollTrackRef.current;
            const bar = scrollBarRef.current;
            const trackRect = track.getBoundingClientRect();
            const barWidth = bar.offsetWidth;
            let newX = e.clientX - trackRect.left - barWidth / 2;

            let progress = newX / (trackRect.width - barWidth);
            progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1

            if (swiperRef.current) {
                swiperRef.current.slideTo(Math.round(progress * (slides.length - 1)));
                bar.style.transform = `translateX(${progress * (trackRect.width - barWidth)}px)`;
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className=" flex flex-col items-center justify-center px-10 py-24">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="font-[600] text-[40px] text-[#112D4E] flex items-center space-x-5 ml-10 ">
                <span>Product 01</span>
                <Image width={40} height={33} src={arrow} alt="" />
            </div>
            <div className="relative w-full">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2.5}
                    loop={false} // No loop to avoid conflicts
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="w-full"
                >
                    {slides.map((bg, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                width={490}
                                height={302}
                                src={bg}
                                alt=""
                                className="rounded-lg w-full h-auto"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            </div>

            <div className="relative w-[20%] mt-8">
                <div
                    ref={scrollTrackRef}
                    className="relative w-full h-[27px] bg-[#3282B8] rounded-full flex items-center cursor-pointer"
                    onMouseDown={(e) => {
                        setIsDragging(true);
                    }}
                >
                    <div
                        ref={scrollBarRef}
                        className="h-[40px] w-[40px] bg-[#112D4E] rounded-full cursor-grab flex items-center justify-center active:cursor-grabbing absolute left-0 transition-transform duration-100"
                        onMouseDown={() => setIsDragging(true)}
                    >
                        <div className="h-[30px] w-[30px] bg-[#BBE1FA] rounded-full "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
