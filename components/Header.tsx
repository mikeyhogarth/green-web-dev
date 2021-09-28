import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-primary text-white md:flex md:flex-row">
        <h1 className="pl-5 lg:pl-20 xl:pl-40 self-center md:tracking-widest md:min-w-max font-typewriter font-bold text-2xl md:text-4xl py-5 mb-0">
          <Link href="/">
            <a className="mr-5">Green web dev</a>
          </Link>

          <button
            aria-label="Open Menu"
            className="float-right md:hidden self-center mt-1 mr-5 "
            onClick={(e) => setOpen(!open)}
          >
            <FaBars className="" />
          </button>
        </h1>
        <nav
          className={`${
            open ? "block" : "hidden"
          } md:inline-block pr-5 lg:pr-20 xl:pr-40 bg-black md:bg-primary text-center md:text-right self-center w-full`}
        >
          <ul className="py-2 mt-0 md:mt-5 md:py-0 text-xl text-white list-none">
            <NavLink href="/about" text="About" setOpen={setOpen} />
            <NavLink href="/prompts" text="Prompts" setOpen={setOpen} />
            <NavLink
              href="/articles"
              text="Articles"
              setOpen={setOpen}
              supressBorder={true}
            />
          </ul>
        </nav>
      </header>
    </>
  );
}

interface NavlinkProps {
  href: string;
  text: string;
  setOpen: (isOpen: boolean) => void;
  supressBorder?: boolean;
}

function NavLink({ href, text, supressBorder, setOpen }: NavlinkProps) {
  const router = useRouter();
  const pathname: string = router.pathname;
  const active: boolean = pathname === href || pathname.startsWith(`${href}/`);

  const classes = `${active ? "active" : ""}`;
  return (
    <li
      className={`md:inline-block ${
        supressBorder ? "" : "border-b-2"
      } border-gray-800 md:border-none`}
    >
      <Link href={href}>
        <a
          className={
            "block md:inline my-2 md:my-0  md:border-white md:ml-4 " + classes
          }
          onClick={() => setOpen(false)}
        >
          {text}
        </a>
      </Link>
    </li>
  );
}
