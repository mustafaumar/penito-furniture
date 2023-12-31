import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Autoplay } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import Google from "/assets/Google.svg";
import Coursera from "/assets/Coursera.svg";
import Airbnb from "/assets/Airbnb.svg";
import Microsoft from "/assets/Microsoft.svg";
import Duolingo from "/assets/Duolingo.svg";
import Udemy from "/assets/Udemy.svg";
import Pluralsight from "/assets/Pluralsight.svg";
const SectionFour = () => {
	return (
		<div className="my-10">
			<p className="text-7xl font-semibold text-clr1 text-center">
				Our Partners & Sponsors
			</p>
			<div className="flex flex-row flex-1 align-middle my-20 ">
				<Swiper
					className="ml-7"
					modules={[Virtual, Autoplay]}
					centeredSlides="true"
					spaceBetween={0}
					autoplay={{ delay: 1500, disableOnInteraction: false }}
					slidesPerView={3}
					loop="true"
					virtual={{ enabled: true }}
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
						<img src={Google} alt="Google" />
					</SwiperSlide>
					<SwiperSlide className=" flex justify-center">
						<img src={Coursera} alt="Coursera" className="w-3/5" />
					</SwiperSlide>
					<SwiperSlide className=" flex justify-center">
						<img src={Airbnb} alt="Airbnb" />
					</SwiperSlide>
					<SwiperSlide className=" flex justify-center">
						<img src={Microsoft} alt="Microsoft" />
					</SwiperSlide>
					<SwiperSlide className=" flex justify-center">
						<img src={Duolingo} alt="Duolingo" />
					</SwiperSlide>
					<SwiperSlide className=" flex justify-center">
						<img src={Udemy} alt="Udemy" />
					</SwiperSlide>
					<SwiperSlide className=" flex justify-center">
						<img src={Pluralsight} alt="Pluralsight" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default SectionFour;
