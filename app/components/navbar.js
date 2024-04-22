import React from "react";
import { FiMenu } from "react-icons/fi"; // Import a suitable icon for the menu

export default function Navbar({ isOpen, toggleMenu, onLogoClick, homeRef }) {
  return (
    <div  className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 bg-teal-100 bg-opacity-50 backdrop-blur-md">
      <h1 className="text-4xl font-bold cursor-pointer" onClick={() => onLogoClick(homeRef)}>
        Parika Singh
      </h1>
      <FiMenu className={`text-4xl cursor-pointer transition-transform ${isOpen ? "transform rotate-90" : ""}`} onClick={toggleMenu} />
    </div>
  );
}
