import { getContentPage, getContentPages } from "../../utils/file.utils";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import capitalize from "lodash/capitalize";
import Head from "next/head";
import HtmlHead from "../../components/HtmlHead";

export default function Cue({ source, data }: any) {
  const { status, category, difficulty } = data;

  return (
    <>
      <Head>
        <HtmlHead title="Green Web Dev :: Prompt" description={data.title} />
      </Head>
      <Link href="/prompts">
        <a>Back to prompts</a>
      </Link>
      <article>
        <h1>{data.title}</h1>
        <dl className="prompt-overview">
          <dt>Status</dt>
          <dd>{capitalize(status)}</dd>
          <dt>Category</dt>
          <dd>{capitalize(category)}</dd>
          <dt>Difficulty</dt>
          <dd>{capitalize(difficulty)}</dd>
        </dl>
        <hr className="pb-8" />
        <MDXRemote {...source} />
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
