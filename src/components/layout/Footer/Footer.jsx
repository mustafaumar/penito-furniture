import React from "react";
import Logo from "../../../assets/logo.png";
import {
  FaInstagram,
  FaFacebook,
  FaDribbble,
  FaBehance,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  const listOne = [
    "Pagination",
    "Terms & Conditions",
    "Contact",
    "Homepage",
    "Terms of use",
  ];
  const listTwo = [
    "Help Centre",
    "Address Store",
    "Privacy Policy",
    "Receivers & Amplifiers",
    "Clothings",
  ];
  const listThree = [
    "Delivery",
    "Legal Notice",
    "Documentation",
    "Secure Payment",
    "Stores",
  ];
  const socials = [
    <FaInstagram />,
    <FaFacebook />,
    <FaLinkedinIn />,
    <FaBehance />,
    <FaDribbble />,
  ];
  return (
    <div className=" text-left md:flex md:justify-between p-5 m-8 ">
      <div className="flex flex-col items-left md:items-start">
        <div className="flex items-center">
          <img src={Logo} alt="" />
          <a
            href="index.html"
            className="text-3xl text-clr1 font-bold lg:text-5xl "
          >
            Penito
          </a>
        </div>
        <p className="my-4 text-left text-clr2 font-medium">
          Sophisticated simplicity for <br /> the independent mind
        </p>
        <div>
          <ul>
            <li className="flex mb-2">
              {socials.map((each) => (
                <a className="mx-2  hover:text-[#02A39A] text-clr2">{each}</a>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 md:mt-0">
        <p className="text-xl font-medium">Help & Information</p>
        <ul className="mt-5">
          <li className="flex flex-col">
            {listOne.map((each) => (
              <a className="my-4 hover:underline text-clr2">{each}</a>
            ))}
          </li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium">About Us</p>
        <ul className="mt-5">
          <li className="flex flex-col ">
            {listTwo.map((each) => (
              <a className="my-4 hover:underline text-clr2">{each}</a>
            ))}
          </li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium">Categories</p>
        <ul className="mt-5">
          <li className="flex flex-col">
            {listThree.map((each) => (
              <a className="my-4 hover:underline text-clr2">{each}</a>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
