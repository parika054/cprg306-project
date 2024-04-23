import React, { useState } from 'react';

function Menu({ isOpen }) {
  const [activePage, setActivePage] = useState('home');

  const handleActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <div className={`fixed inset-0 transition-opacity duration-300 ${isOpen ? "opacity-100 z-30" : "opacity-0 z-0"}`}>
      <div className={`absolute inset-0 transition-transform duration-300 bg-gray-900 bg-opacity-80 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <nav className="flex flex-col items-center justify-center h-full pt-20 space-y-8">
         
          <MenuItem label="RESUME" href="/Technical_Resume_Parika.pdf" />
          <MenuItem label="CONTACT" active={activePage === "contact"} onClick={() => handleActivePage("contact")} href="mailto:parika054@gmail.com" />
          <MenuItem label="SKILLS & LATEST TECH NEWS" active={activePage === "skills"} onClick={() => handleActivePage("skills")} href="./components" />
        </nav>
      </div>
    </div>
  );
}

function MenuItem({ label, active, onClick, href = "#" }) {
  const activeStyle = active ? "font-bold underline" : "font-normal";
  return (
    <div className="group w-fit">
      <a href={href} onClick={onClick} className={`text-white block bold text-3xl py-2 px-4 hover:bg-teal-700 rounded-md transition-all duration-300 ${activeStyle}`}>
        {label}
      </a>
    </div>
  );
}

export default Menu;