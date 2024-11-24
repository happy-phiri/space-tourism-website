import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/assets/shared/logo.svg";
import hamburgerIcon from "/assets/shared/icon-hamburger.svg";
import closeIcon from "/assets/shared/icon-close.svg";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className=" relative max-lg:px-6 max-xl:px-6 lg:mt-10 z-20">
      <div className="max-w-screen-desktop flex flex-row flex-nowrap justify-between md:items-center md:h-[96px] mx-auto">
        {/* HOMEPAGE */}
        <Link
          to="/"
          className="h-full flex items-center max-sm:mt-3 xl:pl-6 desktop:pl-0">
          <img
            src={logo}
            alt="space tourism website logo"
            className="object-contain"
          />
        </Link>

        {/* FAINT LINE */}
        <div className="max-lg:hidden border-t border-[rgba(255,255,255,0.2)] w-[32%] absolute right-[52%] z-40"></div>

        {/* NAV LINKS */}
        <div
          className={`bg-[rgba(11,13,23,0.5)] md:bg-[rgba(255,255,255,0.05)] backdrop-blur-lg text-white font-barlow-condensed-regular text-desktop-preset-8 tracking-small flex flex-col md:flex-row md:items-center md:justify-end lg:justify-start lg:pl-32 md:px-20 md:py-0 max-md:gap-8 md:gap-8 md:h-full md:pl-20 max-md:pt-36 max-md:min-h-[100vh] md:min-w-[45%] lg:min-w-[55%] absolute max-lg:top-0 right-0 max-md:duration-500 ${
            showNav
              ? "max-md:w-[70%] max-md:pl-6"
              : "max-md:w-0 max-md:overflow-hidden max-md:pl-0"
          }`}>
          <NavLink
            to="."
            end
            onClick={() => setShowNav(false)}
            className={({ isActive }) => {
              const baseStyles =
                "min-h-full flex flex-row flex-nowrap md:justify-center items-center";
              const activeStyles =
                "max-md:border-r-4 md:border-b-4 border-white";
              const nonActiveStyles =
                "md:border-b-4 border-transparent hover:border-b-[rgba(255,255,255,0.2)]";

              return `${baseStyles} ${
                isActive ? activeStyles : nonActiveStyles
              }`;
            }}>
            <span className="font-semibold tracking-medium mr-2">00</span> Home
          </NavLink>
          <NavLink
            to="destination"
            onClick={() => setShowNav(false)}
            className={({ isActive }) => {
              const baseStyles =
                "min-h-full flex flex-row flex-nowrap md:justify-center items-center";
              const activeStyles =
                "max-md:border-r-4 md:border-b-4 border-white";
              const nonActiveStyles =
                "md:border-b-4 border-transparent hover:border-b-[rgba(255,255,255,0.2)]";

              return `${baseStyles} ${
                isActive ? activeStyles : nonActiveStyles
              }`;
            }}>
            <span className="font-semibold tracking-medium mr-2">01</span>{" "}
            Destination
          </NavLink>
          <NavLink
            to="crew"
            onClick={() => setShowNav(false)}
            className={({ isActive }) => {
              const baseStyles =
                "min-h-full flex flex-row flex-nowrap md:justify-center items-center";
              const activeStyles =
                "max-md:border-r-4 md:border-b-4 border-white";
              const nonActiveStyles =
                "md:border-b-4 border-transparent hover:border-b-[rgba(255,255,255,0.2)]";

              return `${baseStyles} ${
                isActive ? activeStyles : nonActiveStyles
              }`;
            }}>
            <span className="font-semibold tracking-medium mr-2">02</span> Crew
          </NavLink>
          <NavLink
            to="technology"
            onClick={() => setShowNav(false)}
            className={({ isActive }) => {
              const baseStyles =
                "min-h-full flex flex-row flex-nowrap md:justify-center items-center";
              const activeStyles =
                "max-md:border-r-4 md:border-b-4 border-white";
              const nonActiveStyles =
                "md:border-b-4 border-transparent hover:border-b-[rgba(255,255,255,0.2)]";

              return `${baseStyles} ${
                isActive ? activeStyles : nonActiveStyles
              }`;
            }}>
            <span className="font-semibold tracking-medium mr-2">03</span>{" "}
            Technology
          </NavLink>
        </div>

        {/* HAMBURGER FOR TOGGLING NAV ON MOBILE */}
        <button className="fixed top-6 right-6 z-30 md:hidden">
          {showNav ? (
            <img
              src={closeIcon}
              alt="close nav icon"
              onClick={() => setShowNav(false)}
            />
          ) : (
            <img
              src={hamburgerIcon}
              alt="hamburger icon"
              onClick={() => setShowNav(true)}
            />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
