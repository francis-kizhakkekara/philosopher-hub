"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MainNav() {
  const [showDropdown, setShowDropdown] = useState(false);
  // return (
  //   <>
  //     <nav className="flex justify-between items-center rounded-md bg-slate-900">
  //       <div className="w-60"></div>
  //       <div className="w-60 flex flex-row justify-center">
  //         <Link href={"/"} className="hover:bg-slate-700">
  //           <h1 className="text-3xl text-center">Philosopher&apos;s Hub</h1>
  //           {/* <Image src="/sun-logo.svg" alt="" width={100} height={100} /> */}
  //         </Link>
  //       </div>
  //       <div className="w-60 flex flex-row justify-end items-center">
  //         {/* <button className="bg-slate-700 hover:bg-slate-500 p-3 m-2 rounded">
  //           Switch Theme
  //         </button> */}
  //         <Link className="m-3 hover:bg-slate-800 p-3 rounded" href={"/about"}>
  //           About
  //         </Link>
  //       </div>
  //     </nav>
  //   </>
  // );

  function toggleDropdown() {
    setShowDropdown((state) => !state);
    console.log();
  }

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          <Image
            className=""
            src={"/logo-philosopher-hub.png"}
            alt=""
            height={50}
            width={50}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Philosopher&apos;s Hub
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Feedback
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${
            showDropdown ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                href={"/about"}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
