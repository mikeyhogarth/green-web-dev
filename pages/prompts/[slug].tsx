import { getContentPage, getContentPages } from "../../utils/file.utils";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import capitalize from "lodash/capitalize";
import HtmlHead from "../../components/HtmlHead";
import components from "../../components/mdxComponents";
import { FaArrowLeft } from "react-icons/fa";

export default function Cue({ source, data, slug }: any) {
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
        <h1 className="print:text-3xl">{data.title}</h1>
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
  const { content, data } = await getContentPage(
    "prompts",
    params?.slug?.toString() || ""
  );

  const source = await serialize(content, { scope: data });

  return {
    props: {
      source,
      data,
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const pages = await await getContentPages("prompts");
  const paths = pages.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
