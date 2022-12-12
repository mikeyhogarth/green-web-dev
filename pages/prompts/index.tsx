import Link from "next/link";
import { getContentPages } from "../../utils/file.utils";
import capitalize from "lodash/capitalize";
import HtmlHead from "../../components/HtmlHead";

interface Prompt {
  content: string;
  slug: string;
  data: any;
}

interface Props {
  prompts: Prompt[];
  categories: string[];
}

export default function Prompts({ categories, prompts }: Props) {
  return (
    <div>
      <HtmlHead
        title="Prompts"
        description="Quick tips and advice to help reduce the carbon footprint of your website or application"
      />

      <h1>Prompts</h1>
      {categories.map((category) => (
        <section key={category}>
          <h2>{capitalize(category)}</h2>
          <ul>
            {prompts
              .filter(
                (p) => p.data.category.toLowerCase() === category.toLowerCase()
              )
              .map((prompt) => (
                <li key={prompt.slug}>
                  <Link href={`/prompts/${prompt.slug}`}>
                    {prompt.data.title}
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
  const categories = Array.from(
    new Set(prompts.map((p) => p.data.category.toLowerCase()))
  );
  return { props: { prompts, categories } };
}
