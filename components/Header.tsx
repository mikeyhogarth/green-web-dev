import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import HeaderNavigation from "./HeaderNavigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-primary text-white md:flex md:flex-row print:hidden">
        <h1 className="pl-5 lg:pl-20 xl:pl-40 self-center md:tracking-widest md:min-w-max font-typewriter font-bold text-2xl md:text-4xl py-5 mb-0">
          <Link href="/" className="mr-5">
            Green web dev
          </Link>

          <button
            aria-label="Open Menu"
            className="float-right md:hidden self-center mt-1 mr-5 "
            onClick={(e) => setOpen(!open)}
          >
            <FaBars />
          </button>
        </h1>
        <HeaderNavigation open={open} setOpen={setOpen} />
      </header>
    </>
  );
}
