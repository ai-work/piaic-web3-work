import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className=" flex items-center py-1  border-b border-slate-300">
        <div className="flex items-center">
          <div className="mr-12">
            <h1 className="text-xl mb-0 ">Project to demonstrate Web 3 Tasks</h1>
          </div>
          <div className="flex text-sm font-medium">
            <div className="mx-3 ">
              <Link href="/">Home</Link>
            </div>
          </div>
        </div>
        <div className="bg-slate-950 rounded-md text-white text-sm font-medium py-2 px-6 hover:bg-slate-700 ml-auto">
          <Link href="/login">
            <button className="">Connect</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
