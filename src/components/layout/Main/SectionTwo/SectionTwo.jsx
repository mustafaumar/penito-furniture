import React from "react";
import Benefits from "./Benefits";
import CarDelivery from "../../../../assets/delivery.svg";
import RepeatArrow from "../../../../assets/arrow-repeat.svg";
import Hours from "../../../../assets/24-hours.svg";
import PriceRibbon from "../../../../assets/price-ribbon.svg";
import BenefitPic from "../../../../assets/benefitImg.png";
const SectionTwo = () => {
  return (
    <div className="p-10">
      <p className="text-7xl text-center font-semibold text-clr1">
        Our Services & Benefits
      </p>
      <div className="lg:grid grid-cols-2 items-center">
        <div className="grid md:grid-cols-2 items-center ">
          <Benefits
            image={CarDelivery}
            head="Fast & Free Shipping"
            main="Sign up to premier delivery in Nigeria for unlimited free shipping from USA."
          />
          <Benefits
            image={Hours}
            head="24/7 Support"
            main="24/7 support is a kind of support that is available throughout."
          />
          <Benefits
            image={RepeatArrow}
            head="Hassle Free Returns"
            main="Free return within 15 days for official store items and 7 days for other eligible items."
          />
          <Benefits
            image={PriceRibbon}
            head="Your Best Price Matching"
            main="Ask to speak to a manger, show him the competitor’s lower price."
          />
        </div>
        <div>
          <img src={BenefitPic} alt="" className=" w-4/4 m-auto items-center" />
        </div>
      </div>
      <div className="flex justify-center items-center py-5">
        <button className=" bg-clr4 px-9 py-4 rounded-full text-white ">
          Know More
        </button>
      </div>
    </div>
  );
};

export default SectionTwo;
