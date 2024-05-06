"use client";
import React from "react";

export const CardItem = () => {
  return (
    <>
      <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group col-span-3">
        <div className="overflow-hidden relative">
          <img
            className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
            src="https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/product_img10-1.jpg"
            alt="image"
          />
          <div className="flex justify-center">
            <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
              >
                <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100" />
              </a>
              <a
                href="#"
                className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
              >
                <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100" />
              </a>
              <a
                href="#"
                className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
              >
                <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100" />
              </a>
              <a
                href="#"
                className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out"
              >
                <i className="fas fa-heart transition duration-300 ease-in-out flex justify-center items-center text-gray-100" />
              </a>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-white">
          <a href="#" className="">
            <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
              White Line Dress
            </h1>
          </a>
          <div className="flex py-2">
            <p className="mr-2 text-xs text-gray-600">$45.00</p>
            <p className="mr-2 text-xs text-red-600 line-through">$15.00</p>
          </div>
          <div className="flex">
            <div className="">
              <i className="fas fa-star text-yellow-400 text-xs" />
              <i className="fas fa-star text-yellow-400 text-xs" />
              <i className="fas fa-star text-yellow-400 text-xs" />
              <i className="fas fa-star text-yellow-400 text-xs" />
              <i className="far fa-star text-gray-400 text-xs" />
            </div>
            <div className="ml-2">
              <p className="text-gray-500 font-medium text-sm">(1)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
