import React, { useState, useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const path = useRouter().route;
  const exactPath = path?.split("/")[1];
  const wrapperRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" bg-wayfastGreen sticky shadow-lg  top-0 z-50 ">
      {/* <div className="flex flex-row  justify-between items-center lg:items-end px-12 py-1  max-w-7xl mx-auto"> */}
      <div className="grid grid-cols-3  max-w-7xl mx-auto px-12 ">
        <div />
        <div className="">
          <a href="/" className="flex">
            <span className="sr-only">ATG Pharma Inc</span>
            <Image
              src="/white_logo.svg"
              alt="Picture of the author"
              width={250}
              height={100}
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 lg:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            type="button"
            className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav className="hidden lg:flex flex-row space-x-8  justify-end items-center">
          <a
            href="/about"
            className={`${
              exactPath === "about" ? "font-semibold" : "font-thin"
            }  text-base text-white hover:text-yellow`}
          >
            Products
          </a>
          <a
            href="/services"
            className={`${
              exactPath === "services" ? "font-semibold" : "font-thin"
            }  text-base text-white hover:text-yellow`}
          >
            Contact
          </a>
          <a
            href="/contact"
            className={`${
              exactPath === "contact" ? "font-semibold" : "font-thin"
            }  text-base text-white hover:text-yellow`}
          >
            Blog
          </a>
        </nav>
      </div>
      {/*
<!--
Mobile menu, show/hide based on mobile menu state.

Entering: "duration-200 ease-out"
  From: "opacity-0 scale-95"
  To: "opacity-100 scale-100"
Leaving: "duration-100 ease-in"
  From: "opacity-100 scale-100"
  To: "opacity-0 scale-95"
--> */}
      <div
        ref={wrapperRef}
        className={`${
          showMenu ? "visible" : "hidden"
        } absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden`}
      >
        <div className="rounded-lg shadow-lg md:w-1/2 md:transform md:translate-x-full ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div></div>
              <div className="-mr-2">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid grid-cols-1 gap-7">
                <a
                  href="/about"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white">
                    <img src="/mobile_header_about.svg" />
                  </div>
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    About
                  </div>
                </a>

                <a
                  href="/services"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white">
                    <img src="/mobile_header_services.svg" />
                  </div>
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    Our Services
                  </div>
                </a>

                <a
                  href="/contact"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md  text-white">
                    <img src="/mobile_header_contact_faq.svg" />
                  </div>
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    Contact
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
