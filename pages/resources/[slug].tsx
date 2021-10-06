import { getContentPage, getContentPages } from "../../utils/file.utils";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { FaCalendarDay } from "react-icons/fa";
import { enrichData } from "../../utils/article.utils";
import HtmlHead from "../../components/HtmlHead";

interface MetaData {
  title: string;
  date?: string;
  author?: string;
  formattedDate?: string;
}

interface Props {
  source: MDXRemoteSerializeResult;
  data: MetaData;
}

export default function Resource({ source, data }: Props) {
  const { title } = data;

  return (
    <>
      <HtmlHead title={`Green Web Dev :: ${title}`} description={title} />

      <Link href="/resources">
        <a>Back to resources</a>
      </Link>
      <article>
        <h1 className="font-bold">{title}</h1>
        <hr className="pb-8" />
        <MDXRemote {...source} />
      </article>
    </>
  );
}

/**
 * GetStaticProps
 * @param param0
 * @returns
 */
export async function getStaticProps({ params }: any) {
  const { content, data } = await getContentPage(
    "resources",
    params?.slug?.toString() || ""
  );

  const source = await serialize(content, { scope: data });

  return {
    props: {
      source,
      data: enrichData(data),
    },
  };
}

/**
 * getStaticPaths
 * @returns
 */
export async function getStaticPaths() {
  const pages = await await getContentPages("resources");
  const paths = pages.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
