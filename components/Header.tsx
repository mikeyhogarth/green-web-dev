import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  return (
    <header className=" bg-primary text-white md:flex md:flex-row">
      <h1 className="px-5 lg:px-20 xl:px-40 text-center md:text-left tracking-widest min-w-max font-typewriter font-bold text-4xl py-5 pb-0 md:pb-5 mb-0">
        <Link href="/">
          <a className="mr-5">Green web dev</a>
        </Link>
      </h1>

      <nav className="bg-secondary md:bg-primary text-center md:text-right self-center sm:block w-full pr-5 lg:pr-20 xl:pr-40">
        <ul className="py-2 md:py-0 text-xl text-primary md:text-white list-none">
          <li className="inline-block">
            <NavLink href="/about" padRight={true} text="About" />
          </li>
          <li className="inline-block">
            <NavLink href="/cues" padRight={true} text="Cues" />
          </li>
          <li className="inline-block">
            <NavLink href="/articles" padRight={true} text="Articles" />
          </li>
          <li className="inline-block">
            <NavLink href="/tldr" padRight={false} text="TLDR" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

interface NavlinkProps {
  href: string;
  text: string;
  padRight: boolean;
}

function NavLink({ href, text, padRight }: NavlinkProps) {
  const router = useRouter();
  const pathname: string = router.pathname;
  const active: boolean = pathname === href || pathname.startsWith(`${href}/`);

  const classes = `${active ? "active" : ""} ${padRight ? "mr-5" : ""}`;
  return (
    <Link href={href}>
      <a className={"border-primary md:border-white " + classes}>{text}</a>
    </Link>
  );
}
