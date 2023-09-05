import React, { useState } from "react";
import LogoImage from "/assets/logo.png";
import { FaShoppingCart, FaSearch, FaBars} from "react-icons/fa";
import styles from "../Header/Hero.module.css";

const Links = [
  { name: "Living Room", link: "/" },
  { name: "Office", link: "/" },
  { name: "Bedroom", link: "/" },
  { name: "Sofas", link: "/" },
  { name: "Outdoors", link: "/" },
  { name: "Kitchen", link: "/" },
];
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-40">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <img src={LogoImage} alt="" className="w-7 h-7" />
          <span className="font-bold">Penito</span>
        </div>
        <div
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={navHandler}
        >
          {isOpen ? <FaBars className="text-[#02A39A]" /> : <FaBars />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white filter md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="font-semibold my-10 text-center md:my-0 md:ml-4">
              <a href={link.link} className={styles.navList}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex md:justify-between relative left-[45%] bottom-7 w-fit md:bottom-0 md:left-0">
          <button className="mx-2 p-1 border bg-slate-300 rounded-full">
            <FaShoppingCart />
          </button>
          <button className="mx-3 p-1 border bg-slate-300 rounded-full">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
