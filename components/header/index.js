/* eslint-disable @next/next/no-html-link-for-pages */
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
      <div className="grid grid-cols-3  max-w-7xl mx-auto py-4 lg:py-0 px-12 ">
        <div className="lg:hidden" />
        <div className="hidden lg:flex space-x-6 items-center">
          <a
            href="https://www.linkedin.com/company/gowayfast/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-white"
          >
            <span className="sr-only">Linkedin</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/gowayfast/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-white"
          >
            <span className="sr-only">Instagram</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/GoWayFast"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-white"
          >
            <span className="sr-only">Facebook</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>{" "}
        <div className=" flex justify-center">
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
        <div className="-mr-2 -my-2 lg:hidden flex items-end justify-end">
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
            href="/#products"
            scroll={true}
            className={`${
              exactPath === "about" ? "font-semibold" : "font-thin"
            }  text-base text-white hover:text-yellow`}
          >
            Products
          </a>
          <a
            href="/#contact"
            className={`${
              exactPath === "services" ? "font-semibold" : "font-thin"
            }  text-base text-white hover:text-yellow`}
          >
            Contact
          </a>
          <a
            href="/blog"
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
                  href="/#products"
                  className="-m-3 p-3 text-wayfastGreen flex items-center rounded-lg hover:bg-gray-50"
                  s
                >
                  {/* <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white">
                    <img src="/mobile_header_about.svg" />
                  </div> */}
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    Products
                  </div>
                </a>

                <a
                  href="/#contact"
                  className="-m-3 p-3 text-wayfastGreen flex items-center rounded-lg hover:bg-gray-50"
                >
                  {/* <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white">
                    <img src="/mobile_header_services.svg" />
                  </div> */}
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    Contact
                  </div>
                </a>

                <a
                  href="/blog"
                  className="-m-3 p-3 text-wayfastGreen flex items-center rounded-lg hover:bg-gray-50"
                >
                  {/* <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md  text-white">
                    <img src="/mobile_header_contact_faq.svg" />
                  </div> */}
                  <div className="ml-4 text-base font-medium text-atgBlue">
                    Blog
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
