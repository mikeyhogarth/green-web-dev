import path from "path";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";

interface Item {
  slug: string;
  content: string;
  data: any;
}

export async function getContentPage(
  contentType: string,
  slug: string
): Promise<Item> {
  const file = path.join(process.cwd(), `content/${contentType}/${slug}.mdx`);
  const source = await readFile(file);
  const { content, data } = matter(source);
  return { content, data, slug };
}

export async function getContentPages(contentType: string): Promise<Item[]> {
  const docsDirectory = path.join(process.cwd(), `content/${contentType}`);
  const files = await readdir(docsDirectory);
  const filePaths = files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => `${docsDirectory}/${f}`);

  return await Promise.all(filePaths.map(parseDocument));
}

async function parseDocument(filepath: string): Promise<Item> {
  const slug = filepath.slice(
    filepath.lastIndexOf("/") + 1,
    filepath.lastIndexOf(".")
  );
  const file = await readFile(filepath, "utf8");
  const { content, data } = matter(file);
  return { slug, data, content };
}
