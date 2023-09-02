import React, { Fragment } from "react";
import InstaOne from "../../../../assets/insta1.png";
import InstaTwo from "../../../../assets/insta2.png";
import InstaThree from "../../../../assets/insta3.png";
import InstaFour from "../../../../assets/insta4.png";
import InstaFive from "../../../../assets/insta5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
// import 'swiper/css/autoplay';
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
        loop= 'true'
        // autoplay={{ clickable: false }}
        mousewheel={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change start over")}
        className="px-5"
        
      >
        <SwiperSlide>
          <img src={InstaOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InstaTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InstaThree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InstaFour} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InstaFive} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InstaFour} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InstaThree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InstaTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={InstaOne} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default SectionFive;
