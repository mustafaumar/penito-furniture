import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Virtual, Autoplay } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/pagination'
import "swiper/css/virtual";
import "swiper/css/autoplay";
import Google from "../../../../assets/Google.svg";
import Coursera from "../../../../assets/Coursera.svg";
import Airbnb from "../../../../assets/Airbnb.svg";
import Microsoft from "../../../../assets/Microsoft.svg";
import Duolingo from "../../../../assets/Duolingo.svg";
import Udemy from "../../../../assets/Udemy.svg";
import Pluralsight from "../../../../assets/Pluralsight.svg";
import Airtable from "../../../../assets/Airtable.svg";
const SectionFour = () => {
  return (
    <div className="my-10">
      <p className="text-7xl font-semibold text-clr1 text-center">
        Our Partners & Sponsors
      </p>
      <div className="flex flex-row flex-1 align-middle my-16">
        <Swiper
          modules={[Virtual, Pagination, Autoplay]}
          centeredSlides="true"
          spaceBetween={0}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          slidesPerView={3}
          loop="true"
          pagination={{ clickable: true, dynamicBullets: true, marginBottom: 50, }}
          virtual={{ enabled: true }}
          style={{
            // "--swiper-pagination-color": "#FFBA08",
            // "--swiper-pagination-bullet-inactive-color": "#999999",
            // "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-virtual-bullet-size": "12px",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "10px",
            "--swiper-pagination-bullet-vertical-gap": "10px",
            "--swiper-pagination-padding-top": "50px",
          }}
          breakpoints={{
            1000: {
              spaceBetween: 0,
              slidesPerView: 3,
            },
            800: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
            500: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
            300: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide className="flex justify-center">
            <img src={Google} alt="" />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <img src={Coursera} alt="" />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <img src={Airbnb} alt="" />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <img src={Microsoft} alt="" />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <img src={Duolingo} alt="" />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <img src={Udemy} alt="" />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center">
            <img src={Pluralsight} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SectionFour;
