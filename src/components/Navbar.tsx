"use client"
import searchIcon from '../public/Component 2.png';
import wishlist from '../public/Wishlist.png';
import user from '../public/user.png';
import Image from 'next/image';
import { useState } from "react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Section */}
        <div className="navbar-left">
          <a href="/" className="text-lg font-bold">
            Exclusive
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden block"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Middle Section (Navigation Links) */}
        <div
          className={`navbar-middle absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex items-center md:space-x-6 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a href="/" className="block md:inline-block px-4 py-2 hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="block md:inline-block px-4 py-2 hover:text-gray-400">
            About
          </a>
          <a href="/services" className="block md:inline-block px-4 py-2 hover:text-gray-400">
            Services
          </a>
          <a href="/contact" className="block md:inline-block px-4 py-2 hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Right Section */}
    <div className="navbar-right hidden md:flex">
    <div className="flex items-center border border-gray-300 rounded-md p-2">
    <span className="material-icons text-gray-400">
        <Image src={searchIcon} alt='c'/>
    </span>
    <input 
        type="text" 
        placeholder="Search..." 
        className="flex-grow outline-none px-2 text-gray-700"
    />
    </div>
    <div>
    <Image src={wishlist} alt='vv'/>
    </div>
    <div>
    <Image src={user} alt='c'/>
    </div>
    </div>
        </div>
      </div>
  );
}
