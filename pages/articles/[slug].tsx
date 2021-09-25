import { getContentPage, getContentPages } from "../../utils/file.utils";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { enrichData } from "../../utils/article.utils";

interface MetaData {
  title: string;
  date?: string;
  formattedDate?: string;
}

interface Props {
  source: MDXRemoteSerializeResult;
  data: MetaData;
}

export default function Article({ source, data }: Props) {
  const { title, date, formattedDate } = data;

  return (
    <>
      <Link href="/articles">
        <a>Back to articles</a>
      </Link>
      <article>
        <h1 className="font-bold">{title}</h1>
        <p className="text-gray-500">
          <span className="material-icons mr-2 relative top-1">
            calendar_today
          </span>
          Published <time dateTime={date}>{formattedDate}</time>
        </p>
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
    "articles",
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
  const pages = await await getContentPages("articles");
  const paths = pages.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
