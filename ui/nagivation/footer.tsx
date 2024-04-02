import Image from "next/image";
import Link from "next/link";
import React from "react";

const routes = [
  { path: "/", name: "Home" },
  { path: "/music", name: "Music" },
  { path: "/shop", name: "Shop" },
  { path: "#", name: "Contact" },
];

function Footer() {
  return (
    <footer className="bg-black rounded-lg shadow  m-4 w-full relative z-20 bottom-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/twin-logo-white.webp"
              className=""
              alt="Twinny Twin Logo"
              height={50}
              width={50}
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {routes.map((route: any) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className="hover:underline me-4 md:me-6"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            TwinnyTwin™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
