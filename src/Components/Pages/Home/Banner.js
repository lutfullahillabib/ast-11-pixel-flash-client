import React from 'react';

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div
                            className="lg:h-[600px] flex items-center bg-cover bg-center bg-no-repeat text-white "
                            style={{
                                backgroundImage: `url(${ "https://images.pexels.com/photos/35981/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"})`,
                            }}
                        >
                            <div className="bg-gradient-to-r from-black to-transparent h-full lg:pt-32 p-5 lg:pl-20">
                                <h1 className="lg:text-7xl text-xl">
                                    Make Your Wedding
                                    <br />A Wonderful Story
                                </h1>
                                <p className="py-3 text-sm">
                                    Quam etiam nunc fusce consectetuer libero tellus facilisis
                                    iaculis tempor senectus arcu
                                </p>
                                <button className="bg-gray-400 p-4 rounded-lg">
                                    Discover More
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;