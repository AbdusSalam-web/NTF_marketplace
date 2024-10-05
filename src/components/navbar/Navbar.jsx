import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SingUpBtn } from "../../common/buttons/Button";
import "./Navbar.css";
import { HiMiniBars3 } from "react-icons/hi2";
const Navbar = () => {
  return (
    <>
      <nav className="navbar w-full bg-brand">
        <div className="container sm:py-[15px] sm:px-[30px] sm:min-w-full md:m-0 md:py-[15px] md:px-[50px] px-[13px] flex items-center justify-between py-[20px] flex-wrap ">
          <div className="logo ">
            <Link
              to="/"
              className="flex text-[20px] items-center gap-3 font-spaceMono font-bold lg:text-[36px] text-[#FFFFFF]"
            >
              <img src="/images/logo.png" alt="NFT Marketplace" />
              NFT Marketplace
            </Link>
          </div>
          <div className="menu_icon md:w-[24px] md:h-[24px] text-[#FFFFFF] cursor-pointer lg:hidden flex items-center">
            <HiMiniBars3 />
          </div>
          <div className="menu sm:hidden lg:flex lg:items-center lg:gap-[10px] ">
            <ul className="flex items-center gap-[10px]">
              <li>
                <NavLink to="/marketplace">Marketplace</NavLink>
              </li>
              <li>
                <NavLink to="/rankings">Rankings</NavLink>
              </li>
              <li>
                <NavLink to="/connect-wallet">Connect a wallet</NavLink>
              </li>
            </ul>
            <SingUpBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
