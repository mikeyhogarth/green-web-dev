import Head from "next/head";
import Link from "next/link";
import { getContentPages } from "../../utils/file.utils";
import capitalize from "lodash/capitalize";

interface Prompt {
  content: string;
  slug: string;
  data: any;
}

interface Props {
  prompts: Prompt[];
  categories: string[];
}

export default function Articles({ categories, prompts }: Props) {
  return (
    <div>
      <Head>
        <title>Green Web Dev :: Prompts</title>
      </Head>
      <h1>Prompts</h1>
      {categories.map((category) => (
        <section key={category}>
          <h3>{capitalize(category)}</h3>
          <ul>
            {prompts
              .filter(
                (p) => p.data.category.toLowerCase() === category.toLowerCase()
              )
              .map((prompt) => (
                <li key={prompt.slug}>
                  <Link href={`/prompts/${prompt.slug}`}>
                    <a>{prompt.data.title}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const prompts = await getContentPages("prompts");
  const categories = Array.from(new Set(prompts.map((p) => p.data.category)));
  return { props: { prompts, categories } };
}
