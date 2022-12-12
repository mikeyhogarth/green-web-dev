import Link from "next/link";
import { useRouter } from "next/router";

interface HeaderProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const HeaderNavigation = ({ open, setOpen }: HeaderProps) => {
  return (
    <nav
      className={`${
        open ? "block" : "hidden"
      } md:inline-block pr-5 lg:pr-20 xl:pr-40 bg-black md:bg-primary text-center md:text-right self-center w-full`}
    >
      <ul className="py-2 mt-0 md:mt-5 md:py-0 text-xl text-white list-none">
        <NavLink href="/about" text="About" setOpen={setOpen} />
        <NavLink href="/prompts" text="Prompts" setOpen={setOpen} />
        <NavLink href="/resources" text="Resources" setOpen={setOpen} />
      </ul>
    </nav>
  );
};
export default HeaderNavigation;

interface NavlinkProps {
  href: string;
  text: string;
  setOpen: (isOpen: boolean) => void;
}

function NavLink({ href, text, setOpen }: NavlinkProps) {
  const router = useRouter();
  const pathname: string = router.pathname;
  const active: boolean = pathname === href || pathname.startsWith(`${href}/`);

  const classes = `${active ? "active" : ""}`;
  return (
    <li className="md:inline-block">
      <Link
        href={href}
        className={
          "block md:inline my-2 md:my-0  md:border-white md:ml-4 " + classes
        }
        onClick={() => setOpen(false)}
      >
        {text}
      </Link>
    </li>
  );
}
