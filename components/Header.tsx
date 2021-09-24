import Link from "next/link";

export default function Header() {
  return (
    <header className="px-5 lg:px-20 xl:px-40 bg-primary text-white md:flex md:flex-row">
      <h1 className="text-center md:text-left tracking-widest min-w-max font-typewriter font-bold text-4xl py-5 mb-0">
        <Link href="/">
          <a className="mr-5">Green web dev</a>
        </Link>
      </h1>

      <nav className="text-center md:text-right self-center sm:block w-full">
        <ul className="text-xl">
          <Link href="/about">
            <a className="mr-5">About</a>
          </Link>
          <Link href="/cues">
            <a className="mr-5">Cues</a>
          </Link>
          <Link href="/articles">
            <a className="mr-5">Articles</a>
          </Link>
          <Link href="/tldr">
            <a href="">TLDR</a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
