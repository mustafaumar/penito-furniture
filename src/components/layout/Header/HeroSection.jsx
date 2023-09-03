import React from "react";
import { FaArrowCircleRight, FaPlayCircle } from "react-icons/fa";
import styles from "../Header/Hero.module.css";
import HeroSection1 from "../../../assets/herosection1.png";
import HeroSection2 from "../../../assets/herosection2.png";
import HeroSection3 from "../../../assets/herosection3.png";
const HeroSection = () => {
	return (
		<div className=" py-8 mt-16 md:mt-0 px-5 md:px-10 md:grid md:gap-x-3 md:grid-cols-2  md:items-center md:justify-between md:h-screen">
			<div className="pb-5">
				<p className="text-8xl text-center font-normal md:text-left">
					Discover <span className="text-clr3 font-bold">The Best </span>
					Furniture For <span className="font-bold">Your Interior</span>
				</p>
				<p className="text-clr2 my-10 text-center text-2xl md:text-left md:my-7 ">
					We design pieces of furniture and objects that perfectly gap between
					Beauty and functionality
				</p>
				<div className="flex justify-center gap-x-2 md:justify-start">
					<button className="flex items-center justify-center bg-clr4 px-2 py-7 h-10 rounded-lg text-white">
						Shop Here <FaArrowCircleRight className="text-clr3 ml-1" />
					</button>
					<button className="flex items-center justify-center px-2 py-7 h-10 rounded-lg text-black font-semibold shadow-sm shadow-black">
						<FaPlayCircle className="text-clr1 mr-1 text-2xl" /> Watch Here
					</button>
				</div>
			</div>

			<div className={styles.container}>
				<div className={styles.image1}>
					<img src={HeroSection1} alt="" />
				</div>
				<div className={styles.image2}>
					<img src={HeroSection2} alt="" />
				</div>
				<div className={styles.image3}>
					<img src={HeroSection3} alt="" />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
