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
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse"
          href={"/"}
        >
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
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleDropdown}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            showDropdown ? "" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                href={"/feedback"}
              >
                Feedback
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
