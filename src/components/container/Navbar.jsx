import React from "react";
import PROFILE from "@/constants/profile.json";
import { BiMenu, BiX } from "react-icons/bi";
import SocialLinks from "@/components/ui/SocialLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-all duration-300 hover:opacity-100"
      >
        {PROFILE.logo}
      </a>

      {/* Large Screen Menu section */}

      <ul className="hidden gap-10 md:flex">
        <SocialLinks />
      </ul>

      {/* Mobile Menu toggle section */}

      {isOpen ? (
        <BiX className="block text-4xl md:hidden" onClick={menuToggle} />
      ) : (
        <BiMenu className="block text-4xl md:hidden" onClick={menuToggle} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-wrap gap-8">
            <SocialLinks />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
