import Image from "next/image";
import Link from "next/link";

export default function mainNav() {
  return (
    <>
      <nav className="flex justify-between items-center rounded-md bg-slate-900">
        <div className="w-60"></div>
        <div className="w-60 flex flex-row justify-center">
          <Link href={"/"} className="hover:bg-slate-700">
            <h1 className="text-3xl text-center">Philosopher&apos;s Hub</h1>
            {/* <Image src="/sun-logo.svg" alt="" width={100} height={100} /> */}
          </Link>
        </div>
        <div className="w-60 flex flex-row justify-end items-center">
          {/* <button className="bg-slate-700 hover:bg-slate-500 p-3 m-2 rounded">
            Switch Theme
          </button> */}
          <Link className="m-3 hover:bg-slate-800 p-3 rounded" href={"/about"}>
            About
          </Link>
        </div>
      </nav>
    </>
  );
}
