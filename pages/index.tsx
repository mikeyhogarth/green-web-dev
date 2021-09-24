import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Green Web Dev</title>
        <meta name="description" content="Green Web Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pb-10">
        <h2 className="mt-0 md:mt-10 leading-tight text-3xl md:text-6xl font-bold">
          Practical advice for creating{" "}
          <span className="text-primary">sustainable</span> web applications.
          <aside className="text-2xl py-5 text-gray-400 font-light">
            Vestibulum non mauris porttitor, facilisis ante vel, vehicula eros.
            Vestibulum consequat felis lacus, eu mollis augue suscipit pulvinar.
          </aside>
        </h2>
        <nav className="text-center md:text-left my-6">
          <Link href="/about">
            <a className="btn btn-primary inline-block md:mr-4">Learn More</a>
          </Link>
          <Link href="/cues">
            <a className="hidden md:inline-block btn btn-secondary">
              Browse Cues
            </a>
          </Link>
        </nav>
      </div>
      <hr className="mb-8" />
      <div className="md:flex w-full text-center">
        <div className="flex-grow p-4  ">
          <span className="material-icons text-6xl text-primary">
            lightbulb
          </span>
          <h3 className="text-xl mt-4 text-primary font-bold">Cues</h3>
          <p>
            Vestibulum non mauris porttitor, facilisis ante vel, vehicula eros.
            Vestibulum consequat felis lacus, eu mollis augue suscipit pulvinar.
          </p>
          <Link href="/cues">
            <a>Get Ideas</a>
          </Link>
        </div>
        <div className="flex-grow md:mx-2 p-4 ">
          <span className="material-icons text-6xl text-primary">
            menu_book
          </span>
          <h3 className="text-xl mt-4 text-primary font-bold">Articles</h3>
          <p>
            Vestibulum non mauris porttitor, facilisis ante vel, vehicula eros.
            Vestibulum consequat felis lacus, eu mollis augue suscipit pulvinar.
          </p>
          <Link href="/articles">
            <a>Read Articles</a>
          </Link>
        </div>
        <div className="md:flex-grow p-4 ">
          <span className="material-icons text-6xl text-primary">park</span>
          <h3 className="text-xl mt-4 text-primary font-bold">Impact</h3>
          <p>
            Vestibulum non mauris porttitor, facilisis ante vel, vehicula eros.
            Vestibulum consequat felis lacus, eu mollis augue suscipit pulvinar.
          </p>
          <Link href="/tldr">
            <a>If you do one thing...</a>
          </Link>
        </div>
      </div>
    </>
  );
}
