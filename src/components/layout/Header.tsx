"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "achievement", label: "Achievements" },
    { id: "skills", label: "Skills" },
    { id: "gallery", label: "Gallery" },
  ];

  return (


    <header className="sticky top-0 z-50  bg-black/70 backdrop-blur-md border-b border-amber-500/20 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      
        {/* Logo */}
        <ScrollLink
          to="about"
          smooth={true}
          duration={600}
          className="text-2xl font-bold text-amber-500 hover:text-amber-400 transition-colors cursor-pointer"
        >
          KH
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={600}
              offset={-70}
              className="relative text-gray-300 hover:text-amber-400 transition-colors cursor-pointer group"
              activeClass="text-amber-400"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all group-hover:w-full"></span>
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-500 hover:text-amber-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-amber-500/20">
          <nav className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>
        </div>
      )}
    </header>
   
  );
}
