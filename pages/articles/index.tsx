import Head from "next/head";
import Link from "next/link";
import { getContentPages } from "../../utils/file.utils";

interface Article {
  content: string;
  slug: string;
  data: any;
}

interface Props {
  articles: Article[];
}

export default function Articles(props: Props) {
  return (
    <div>
      <Head>
        <title>Green Web Dev :: Articles</title>
      </Head>
      <h1>Articles</h1>
      <ul>
        {props.articles.map((a) => (
          <li key={a.slug}>
            <Link href={`/articles/${a.slug}`}>
              <a>{a.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getContentPages("articles");
  return { props: { articles } };
}
