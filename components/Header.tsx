import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-primary text-white md:flex md:flex-row">
        <h1 className="px-5 lg:px-20 xl:px-40 self-center md:tracking-widest md:min-w-max font-typewriter font-bold text-2xl md:text-4xl py-5 mb-0">
          <Link href="/">
            <a className="mr-5">Green web dev</a>
          </Link>

          <button
            aria-label="Open Menu"
            className="float-right md:hidden self-center mt-1"
            onClick={(e) => setOpen(!open)}
          >
            <FaBars className="" />
          </button>
        </h1>
        <nav
          className={`${
            open ? "block" : "hidden"
          } md:inline-block px-5 lg:px-20 xl:px-40 bg-black md:bg-primary text-center md:text-right self-center w-full`}
        >
          <ul className="py-2 mt-0 md:mt-5 md:py-0 text-xl text-white list-none">
            <li className="md:inline-block">
              <NavLink
                href="/about"
                padRight={true}
                text="About"
                setOpen={setOpen}
              />
            </li>
            <li className="md:inline-block">
              <NavLink
                href="/prompts"
                padRight={true}
                text="Prompts"
                setOpen={setOpen}
              />
            </li>
            <li className="md:inline-block">
              <NavLink
                href="/articles"
                padRight={true}
                text="Articles"
                setOpen={setOpen}
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

interface NavlinkProps {
  href: string;
  text: string;
  padRight: boolean;
  setOpen: (isOpen: boolean) => void;
}

function NavLink({ href, text, padRight, setOpen }: NavlinkProps) {
  const router = useRouter();
  const pathname: string = router.pathname;
  const active: boolean = pathname === href || pathname.startsWith(`${href}/`);

  const classes = `${active ? "active" : ""} ${padRight ? "mr-5" : ""}`;
  return (
    <Link href={href}>
      <a
        className={"my-4 md:my-0 border-white" + classes}
        onClick={() => setOpen(false)}
      >
        {text}
      </a>
    </Link>
  );
}
