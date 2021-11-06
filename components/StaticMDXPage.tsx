import HtmlHead from "./HtmlHead";
import components from "./mdxComponents";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  source: MDXRemoteSerializeResult;
  data: {
    title: string;
    description: string;
  };
}

export default function StaticMDXPage({ source, data }: Props) {
  return (
    <>
      <HtmlHead title={data.title} description={data.description} />
      <MDXRemote components={components} {...source} />
    </>
  );
}
