import React from "react";
import InstaOne from "/assets/insta1.png";
import InstaTwo from "/assets/insta2.png";
import InstaThree from "/assets/insta3.png";
import InstaFour from "/assets/insta4.png";
import InstaFive from "/assets/insta5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import "swiper/css/mousewheel";
const SectionFive = () => {
  return (
		<div className="bg-clr6 py-5">
			<p className="text-5xl font-semibold text-clr1 text-center my-6">
				Visit Our Instagram Gallery
			</p>
			<Swiper
				modules={[Mousewheel]}
				spaceBetween={10}
				slidesPerView={3}
				loop="true"
				mousewheel={{ draggable: true }}
				className="px-5"
			>
				<SwiperSlide>
					<img src={InstaOne} alt="Instagram gallery" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={InstaTwo} alt="Instagram gallery" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={InstaThree} alt="Instagram gallery" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={InstaFour} alt="Instagram gallery" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={InstaFive} alt="Instagram gallery" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={InstaFour} alt="Instagram gallery" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={InstaThree} alt="Instagram gallery" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={InstaTwo} alt="Instagram gallery" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={InstaOne} alt="Instagram gallery" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default SectionFive;
