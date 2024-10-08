"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useHandleOutsideClick } from "@/utils/hooks/handleOutsideClick";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";
import { useShoppingCart } from "use-shopping-cart";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useHandleOutsideClick(isOpen, setIsOpen, "mobile-menu");
  const { cartDetails } = useShoppingCart();

  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => entry);

  // Define an array of route objects
  const routes = [
    { path: "/", name: "Home" },
    { path: "/music", name: "Music" },
    { path: "/shop", name: "Shop" },
    { path: "#", name: "Contact" },
  ];

  return (
    <header className="fixed w-full z-30 font-owners font-semibold uppercase">
      <nav className="bg-black border-zinc-800 border-b px-4 lg:px-6 py-2.5 relative ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image
              src="/twin-logo-white.webp"
              className=""
              alt="Twinny Twin Logo"
              height={50}
              width={50}
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex mobile-menu items-center p-2 ml-1 text-sm text-zinc-500 rounded-lg lg:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0">
              {/* Map over routes and generate navigation links */}
              {routes.map((route, index) => (
                <li key={index}>
                  <Link
                    href={route.path}
                    className="block py-2 pr-4 pl-3 text-white rounded hover:bg-zinc-900 lg:bg-transparent lg:text-primary-700 lg:p-0"
                    aria-current="page"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {isOpen && (
            <div
              className="mobile-menu justify-between items-center w-full lg:hidden lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0">
                {/* Map over routes and generate navigation links */}
                {routes.map((route, index) => (
                  <li key={index}>
                    <Link
                      href={route.path}
                      className="block py-2 pr-4 pl-3 text-white rounded border-b border-zinc-800 hover:bg-zinc-900 lg:bg-transparent lg:text-primary-700 lg:p-0"
                      aria-current="page"
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/shop/cart"
                    className="flex space-x-2 items-center py-2 pr-4 pl-3 text-white rounded hover:bg-zinc-900 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  >
                    Cart: <FaCartPlus />
                    <p className="text-sm bg-red-600 rounded-full p-1 px-2">
                      {" "}
                      {cartEntries.length}
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        {!isOpen && (
          <div className="absolute right-24 top-1/2 text-2xl -mt-3 md:flex items-center space-x-2 hidden">
            {" "}
            <Link href="/shop/cart">
              {" "}
              <FaCartPlus />
            </Link>
            <p className="text-sm bg-red-600 rounded-full p-1 px-2">
              {" "}
              {cartEntries.length}
            </p>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
