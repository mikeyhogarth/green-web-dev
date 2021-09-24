import { getContentPage, getContentPages } from "../../utils/file.utils";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";

export default function Cue({ source, data }: any) {
  return (
    <>
      <Link href="/cues">
        <a>Cues</a>
      </Link>
      &rarr;
      <span>{data.title}</span>
      <h1>{data.title}</h1>
      <MDXRemote {...source} />
    </>
  );
}

export async function getStaticProps({ params }: any) {
  const { content, data } = await getContentPage(
    "cues",
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
  const pages = await await getContentPages("cues");
  const paths = pages.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
