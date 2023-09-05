import React, { Fragment } from "react";
import Stars from "/assets/Stars.png";
import SectionThreeImg from "/assets/sectionthree.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css/keyboard";
import "swiper/css/navigation";

const SectionThree = () => {
	return (
		<div className="bg-clr6  p-9 mb-4">
			<p className="text-5xl text-center font-semibold text-clr1 my-4  ">
				Our Customer say
			</p>
			<Swiper
				modules={[Keyboard, Navigation]}
				spaceBetween={5}
				slidesPerView={1}
				keyboard={{ clickable: true }}
				navigation
			>
				<SwiperSlide className="flex flex-col items-center gap-y-2 text-center lg:flex-row lg:gap-x-2 lg:justify-center lg:text-left">
					<div className="lg:w-1/2">
						<p className="text-base font-medium text-clr2">
							I've been looking for a new sofa for a while, and I was really
							hesitant to buy online. But I'm glad I took a chance at Penito.
							The sofa is even better than I imagined! It's incredibly
							comfortable and stylish. I love the way it looks in my living
							room. The sofa is also vvery well-made. It's sturdy and durable,
							and I know it will last for years to come. I would definitely
							recommend Penito furniture to anyone looking for a high quality,
							stylish sofa.
						</p>
						<div className="text-center lg:text-left mt-10">
							<img className="flex m-auto  lg:m-0" src={Stars} alt="" />
							<p className="text-xl font-semibold text-clr1 my-1">
								Mr Ezesomaga
							</p>
							<p className="text-base font-semibold text-clr2">Philosopher</p>
						</div>
					</div>
					<div>
						<img
							src={SectionThreeImg}
							alt="Customer's Furniture"
							className="w-4/5 m-auto md:m-0 md:w-full"
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide className="flex flex-col items-center gap-y-2 text-center lg:flex-row lg:gap-x-2 lg:justify-center lg:text-left">
					<div className="lg:w-1/2">
						<p className="text-base font-medium text-clr2">
							I've been a fan of Penito furniture for years, and I've always
							been impressed with the quality and craftsmanship of their
							products.
							<br />
							What really impressed me was the customer service. I had a few
							questions about the bed, and I contacted Penito customer service.
							They were incredibly helpful and responsive. They answered all of
							my questions
						</p>
						<div className="text-center lg:text-left mt-10">
							<img className="flex m-auto  lg:m-0" src={Stars} alt="" />
							<p className="text-xl font-semibold text-clr1 my-1">
								Mustafa Umar
							</p>
							<p className="text-base font-semibold text-clr2">
								Software Developer
							</p>
						</div>
					</div>
					<div>
						<img
							src={SectionThreeImg}
							alt="Customer's Furniture"
							className="w-4/5 m-auto md:m-0 md:w-full"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="flex flex-col items-center gap-y-2 text-center lg:flex-row lg:gap-x-2 lg:justify-center lg:text-left">
					<div className=" lg:w-1/2">
						<p className="text-base font-medium text-clr2">
							I've been using my Penito office chair for a few months now, and
							I'm so glad I bought it. It's the most comfortable chair I've ever
							owned and it's helped me to improve my posture and productivity. I
							would definitely recommend Penito furniture to anyone looking for
							a high-quality,comfortable office chair. They have a widevariety
							of chairs to choose from and they are all backed by a satisfaction
							guarantee
						</p>
						<div className="text-center lg:text-left mt-10">
							<img className="flex m-auto  lg:m-0" src={Stars} alt="" />
							<p className="text-xl font-semibold text-clr1 my-1">Nike Lois</p>
							<p className="text-base font-semibold text-clr2">
								Crocheter
							</p>
						</div>
					</div>
					<div>
						<img
							src={SectionThreeImg}
							alt="Customer's Furniture"
							className="w-4/5 m-auto md:m-0 md:w-full"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default SectionThree;
