import Link from "next/link";

import { FaLightbulb, FaBookReader, FaTree } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="pb-10">
        <h2 className="mt-0 md:mt-10 leading-tight text-3xl md:text-6xl font-bold">
          Practical advice for creating{" "}
          <span className="text-primary">sustainable</span> web applications.
          <aside className="text-2xl py-5 text-gray-500 font-light">
            Tips and tricks for minimizing the carbon footprint of your website.
            Written and curated by web developers, for web developers.
          </aside>
        </h2>
        <nav className="text-center md:text-left my-6 print:hidden">
          <Link href="/about">
            <a className="btn btn-primary inline-block md:mr-4">Start Here</a>
          </Link>
          <Link href="/prompts">
            <a className="hidden md:inline-block btn btn-secondary">
              Browse Prompts
            </a>
          </Link>
        </nav>
      </div>
      <hr className="mb-8 print:hidden" />
      <div className="md:flex w-full text-center">
        <div className="flex-grow p-4 md:w-1/3">
          <FaLightbulb className="inline-block text-6xl text-primary" />
          <h3 className="text-xl mt-4 text-primary font-bold">Prompts</h3>
          <p>
            Browse through numerous prompts, ideas and techniques to help you
            keep your website&apos;s carbon footprint low.
          </p>
          <Link href="/prompts">
            <a>Browse Prompts</a>
          </Link>
        </div>
        <div className="flex-grow md:mx-2 p-4 md:w-1/3">
          <FaBookReader className="inline-block text-6xl text-primary" />
          <h3 className="text-xl mt-4 text-primary font-bold">Resources</h3>
          <p>
            Resources, deep-dives and external links covering a myriad of
            subjects around the topic of sustainable web development.
          </p>
          <Link href="/resources">
            <a>Browse Resources</a>
          </Link>
        </div>
        <div className="flex-grow p-4 md:w-1/3">
          <FaTree className="inline-block text-6xl text-primary" />
          <h3 className="text-xl mt-4 text-primary font-bold">Impact</h3>
          <p>
            As members of the digital industry, we are in a unique position to
            create global impact on climate change.
          </p>
          <Link href="/prompts/adopt-a-data-budget">
            <a>If you read one thing, read this</a>
          </Link>
        </div>
      </div>
    </>
  );
}
