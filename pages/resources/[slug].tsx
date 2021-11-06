import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import HtmlHead from "../../components/HtmlHead";
import components from "../../components/mdxComponents";
import { FaArrowLeft } from "react-icons/fa";
import {
  getStaticPathsForContent,
  getStaticPropsForContent,
} from "../../utils/next.utils";

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
      <HtmlHead title={title} description={title} />
      <Link href="/resources">
        <a>
          <FaArrowLeft className="inline-block mr-1 relative -top" />
          Back to resources
        </a>
      </Link>
      <article>
        <h1>{title}</h1>
        <MDXRemote components={components} {...source} />
      </article>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  return getStaticPropsForContent("resources", params);
}

export async function getStaticPaths() {
  return getStaticPathsForContent("resources");
}
