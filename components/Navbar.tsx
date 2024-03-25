'use client'

import { ShoppingCartIcon, StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </Link>
          </div>
          <div className="flex items-center justify-center flex-1">
            <Link
              href="/"
              className="text-gray-800 hover:bg-[#533745] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/shop"
              className="text-gray-800 hover:bg-[#533745] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Tienda
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:bg-[#533745] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Servicios
            </Link>

            <Link
              href="/about"
              className="text-gray-800 hover:bg-[#533745] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Sobre
            </Link>
          </div>
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-[#533745] text-white border-0 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#533745]"
            />
            <StarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <div className="flex items-center ml-4">
            <div className="flex items-center justify-center h-8 w-8 bg-gray-700 rounded-full">
              <button className="text-[#F1CBC0] focus:outline-none">
                <ShoppingCartIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
