import { serialize } from "next-mdx-remote/serialize";
import { getContentPage, getContentPages } from "./file.utils";

/**
 * Utility functions specific to nextJS functionality
 */

export async function getStaticPropsForContent(
  contentRoot: string,
  params: any
) {
  const { content, data } = await getContentPage(
    contentRoot,
    params?.slug?.toString() || ""
  );

  const source = await serialize(content, { scope: data });

  return {
    props: {
      source,
      data,
      slug: params?.slug || "",
    },
  };
}

export async function getStaticPathsForContent(contentRoot: string) {
  const pages = await await getContentPages(contentRoot);
  const paths = pages.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
