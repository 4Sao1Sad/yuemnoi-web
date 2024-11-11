"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} size="lg" className="w-8" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" className="w-8" />
            )}
          </button>
          <Link
            href="/"
            className="text-primary text-2xl font-bold hover:text-primary-hover transition duration-300"
          >
            Yeum Noi
          </Link>
        </div>
        <div className="relative">
          <button
            onClick={toggleUserMenu}
            className="text-black hover:text-primary transition duration-300"
          >
            <FontAwesomeIcon icon={faUser} size="lg" />
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md z-10">
              <Link
                href="/user/1"
                onClick={() => setIsUserMenuOpen(false)}
                className="block text-black hover:text-primary hover:bg-gray-100 transition duration-300 rounded-md px-2 py-1 m-2"
              >
                User Page
              </Link>
              <Link
                href="/signout"
                onClick={() => setIsUserMenuOpen(false)}
                className="block text-black hover:text-primary hover:bg-gray-100 transition duration-300 rounded-md px-2 py-1 m-2"
              >
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="px-4 pt-4 pb-2 space-y-2 z-10 absolute bg-white w-full">
          <Link
            href="/home"
            onClick={toggleMenu}
            className="block text-black hover:text-primary hover:bg-gray-100 transition duration-300 rounded-md px-2 py-1"
          >
            Home
          </Link>
          <Link
            href="/reserve"
            onClick={toggleMenu}
            className="block text-black hover:text-primary hover:bg-gray-100 transition duration-300 rounded-md px-2 py-1"
          >
            Reservation
          </Link>
        </div>
      )}
    </nav>
  );
}
