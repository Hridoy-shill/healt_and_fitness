"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Import images from the public folder
import Image from "next/image";
import banner1 from "../../../public/New Project.png";
import banner2 from "../../../public/New Project (1).png";

const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper h-full"
      >
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image
              src={banner2}
              alt="Banner 2"
              layout="fill" // Fill the entire parent container
              objectFit="cover" // Maintain aspect ratio and cover the container
              placeholder="blur"
            />

            <div className="absolute flex justify-center items-center inset-0 z-30">
              <div className="absolute right-44">
                <div>
                  <p className="text-end text-white text-[65px] font-bold">
                    EMPOWER YOUR <br /> FITNESS
                    <span className="text-[#D2000D]">QUEST</span>
                  </p>
                  <p className="text-white text-[16px] font-bold text-end">
                    INSPIRE CHANGE, EMBRACE GROWTH, AND CONQUER OBSTACLES
                  </p>
                </div>
                <div className="mt-5 flex justify-end">
                  <button className="px-4 py-3 bg-[#D2000D] hover:bg-[#fff] text-white hover:text-[#D2000D] rounded-[8px] font-semibold btn border-none text-[16px] duration-300">
                    GET START
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full w-full">
            <Image
              src={banner1}
              alt="Banner 2"
              layout="fill" // Fill the entire parent container
              objectFit="cover" // Maintain aspect ratio and cover the container
              placeholder="blur"
            />

            <div className="absolute flex justify-center items-center inset-0 z-30">
              <div className="absolute left-44">
                <div>
                  <p className="text-left text-white text-[65px] font-bold">
                    ELEVATE YOUR <br /> FITNESS <span className="text-[#D2000D]">JOURNEY</span>
                    
                  </p>
                  <p className="text-white text-[16px] font-bold text-left">
                    COMMIT, TRAIN, AND ACHIEVE YOUR ULTIMATE HEALTH GOALS
                  </p>
                </div>
                <div className="mt-5 flex justify-lefttext-left">
                  <button className="px-4 py-3 bg-[#D2000D] hover:bg-[#fff] text-white hover:text-[#D2000D] rounded-[8px] font-semibold btn border-none text-[16px] duration-300">
                    GET START
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <style>
          {`
            .swiper-pagination-bullet-active {
              background-color: #D2000D;
            }
            .swiper-pagination {
              padding-bottom: 20px;
            }
          `}
        </style>
      </Swiper>
    </div>
  );
};

export default HomePage;
