import Link from "next/link";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <nav className="flex justify-center mt-20 ">
        <div className="mx-10 border-2 border-slate-500 rounded-lg py-2 px-4">
          <Link href={"/home"}>Home</Link>
        </div>
        <div className="mx-10 border-2 border-slate-500 rounded-lg py-2 px-4">
          <Link href={"/static-route"}>Static Route</Link>
        </div>
        <div className="mx-10 border-2 border-slate-500 rounded-lg py-2 px-4">
          <Link href={"/interactive-route"}>Interactive Route</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
