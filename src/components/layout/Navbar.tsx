"use client";
import { useState } from "react";
import LinkItemdesktop from "../ui/LinkItemdesktop";
import LinkItemMobile from "../ui/LinkItemMobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Projects", url: "/proyectos" },
    { text: "Contact", url: "/contacto" },
  ];
  return (
    <>
      <header className="bg-[var(--background)] shadow-md shadow-shadow-dorado w-full sticky top-0 z-50 p-2">
        <nav>
          {/* Menu desktop */}
          <div className="flex justify-center">
            <ul className="md:flex hidden gap-12 py-4 font-quicksand">
              {navLinks.map(({ url, text }) => (
                <LinkItemdesktop key={url} url={url} text={text} />
              ))}
            </ul>
          </div>

          {/* Menu mobile button */}
          <button
            className="md:hidden focus:outline-none py-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>
          {/* Mobile menu */}
          {isOpen && (
            <ul className="md:hidden flex flex-col gap-4 p-4 font-quicksand">
              {navLinks.map(({ text, url }) => (
                <LinkItemMobile key={url} url={url} text={text} />
              ))}
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
