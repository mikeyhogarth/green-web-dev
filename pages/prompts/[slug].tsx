import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import capitalize from "lodash/capitalize";
import HtmlHead from "../../components/HtmlHead";
import components from "../../components/mdxComponents";
import { FaArrowLeft } from "react-icons/fa";

import {
  getStaticPropsForContent,
  getStaticPathsForContent,
} from "../../utils/next.utils";

export default function Prompt({ source, data, slug }: any) {
  const { status, category, difficulty } = data;

  return (
    <>
      <HtmlHead title={data.title} description={data.title} />

      <Link href="/prompts">
        <a className="print:hidden">
          <FaArrowLeft className="inline-block mr-1 relative -top" />
          Back to prompts
        </a>
      </Link>
      <article>
        <h1 className="border-none pb-0">{data.title}</h1>
        <dl className="prompt-overview">
          <dt>Status</dt>
          <dd>{capitalize(status)}</dd>
          <dt>Category</dt>
          <dd>{capitalize(category)}</dd>
          <dt>Difficulty</dt>
          <dd>{capitalize(difficulty)}</dd>
        </dl>
        <hr className="pb-8" />
        <MDXRemote components={components} {...source} />
        <aside className="contribute-callout p-4 px-8 mt-16 sprint:hidden">
          <h3 className="text-2xl mb-4 font-normal">
            Help us improve this content
          </h3>
          <p className="mb-0">
            Have you spotted a typo, mistake or enhancement? You can help to
            improve this content by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/mikeyhogarth/green-web-dev/blob/main/content/prompts/${slug}.mdx`}
            >
              editing it on github
            </a>
            . Please ensure that you read the{" "}
            <a href="https://github.com/mikeyhogarth/green-web-dev/blob/main/CONTRIBUTING.md">
              contribution guidelines
            </a>{" "}
            before submitting any major changes.
          </p>
        </aside>
      </article>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  return getStaticPropsForContent("prompts", params);
}

export async function getStaticPaths() {
  return getStaticPathsForContent("prompts");
}
