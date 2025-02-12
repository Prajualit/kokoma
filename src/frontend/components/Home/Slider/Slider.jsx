"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import arrow from "@/frontend/assets/Home/Slider/arrow.png";
import coconut from "@/frontend/assets/Home/Slider/sliderImage.png";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 3;
    const slides = [coconut.src, coconut.src, coconut.src];

    return (
        <div className=" relative mt-8">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                autoplay={{
                    delay:1000,
                    disableOnInteraction:false,
                }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                className="w-full h-full"
            >
                {slides.map((bg, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-[675px] bg-cover bg-center"
                            style={{ backgroundImage: `url(${bg})` }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute font-extralight z-10 bottom-5 right-[50%] text-white text-lg bg-opacity-50 py-2">
                {currentSlide} / {totalSlides}
            </div>
            <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center space-y-8 ">
                <span className="font-[600] text-[48px] leading-[58.5px] ">Pure
                    Coconut Oil</span>
                <span className="font-[200] text-[18px] leading-[22px] ">Made with love and care</span>
            </div>
            <button className="custom-prev absolute left-5 top-1/2 transform -translate-y-1/2 z-20">
                <Image width={21} height={33} src={arrow} alt="" />
            </button>
            <button className="custom-next absolute right-5 top-1/2 transform rotate-180 -translate-y-1/2 z-20">
                <Image width={21} height={33} src={arrow} alt="" />
            </button>
        </div>
    );
};

export default Slider;
