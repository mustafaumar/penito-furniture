import React from "react";
import FurnitureList from "./FurnitureList";

const SectionOne = () => {
  return (
    <div className="my-5">
      <div>
        <p className="text-center m-auto text-clr1 font-semibold text-7xl md:w-3/5">
          A Huge Collection of Furniture Products for your Interior
        </p>
        <p className="text-center w-4/5  text-clr2 font-normal text-2xl my-2 md:w-3/5 m-auto">
          If you have the experience of ten years in an industry, no apostrophe
          is needed. If you have ten years’ experience, an apostrophe is needed.
        </p>
      </div>
      <FurnitureList />
    </div>
  );
};

export default SectionOne;
