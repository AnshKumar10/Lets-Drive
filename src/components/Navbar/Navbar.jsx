import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <header className={Styles.header}>
        <img src={Logo} alt="Logo" />
        <nav>
          <ul
            className={
              nav ? [Styles.menu, Styles.active].join(" ") : [Styles.menu]
            }
          >
            <li>
              <a href="/">Learn More</a>
            </li>
            <li>
              <a href="/">Log In</a>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
            <li>
              <AiOutlineSearch size={20} />
            </li>
            <li>
              <AiOutlineUser size={20} />
            </li>
          </ul>
        </nav>
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className={Styles.mobile_nav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </header>
    </>
  );
};

export default Navbar;
