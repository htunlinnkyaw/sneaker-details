import React from "react";

import Logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import userAvator from "../assets/images/image-avatar.png";

const Header = () => {
  return (
    <nav className="mt-2 mb-10 flex justify-between border-b  border-b-neutral-light-grayish-blue  pb-3">
      <div className="flex items-center gap-14">
        <img className="w-36" src={Logo} alt="logo" />
        <ul className="flex flex-wrap gap-7 text-sm text-neutral-grayish-blue ">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-10">
        <img src={cartIcon} alt="cart-icon" />
        <img src={userAvator} className="w-12 h-12" alt="user-avatar" />
      </div>
    </nav>
  );
};

export default Header;
