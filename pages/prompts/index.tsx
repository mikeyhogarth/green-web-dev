import Head from "next/head";
import Link from "next/link";
import { getContentPages } from "../../utils/file.utils";

interface Prompt {
  content: string;
  slug: string;
  data: any;
}

interface Props {
  prompts: Prompt[];
}

export default function Articles(props: Props) {
  return (
    <div>
      <Head>
        <title>Green Web Dev :: Prompts</title>
      </Head>
      <h1>Prompts</h1>
      <ul>
        {props.prompts.map((a) => (
          <li key={a.slug}>
            <Link href={`/prompts/${a.slug}`}>
              <a>{a.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const prompts = await getContentPages("prompts");
  return { props: { prompts } };
}
