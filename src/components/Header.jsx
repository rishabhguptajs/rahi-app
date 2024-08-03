// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";
import bars from "../assets/bars.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-customgrey text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} width={80} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:bg-customOrange px-3 py-2 rounded">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:bg-customOrange px-3 py-2 rounded"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:bg-customOrange px-3 py-2 rounded"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:bg-customOrange px-3 py-2 rounded"
          >
            Contact
          </Link>
        </div>
        <div className="flex space-x-5">
          <button className="text-customOrange hover:scale-110 font-semibold">
            sign in
          </button>
          <button class="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2  text-white hover:border-gray-500"
          onClick={toggleMenu}
        >
          <Image src={bars} width={35} height={35} alt="Logo" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={` md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-customOrange text-white md:hidden `}
      >
        <Link href="/" className="block px-4 py-2 text-white hover:text-black">
          Home
        </Link>
        <Link
          href="/about"
          className="block px-4 py-2 text-white hover:text-black"
        >
          About
        </Link>
        <Link
          href="/services"
          className="block px-4 py-2 text-white hover:text-black"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="block px-4 py-2 text-white hover:text-black"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
