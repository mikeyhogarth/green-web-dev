import Link from "next/link";
import { getContentPages } from "../../utils/file.utils";
import HtmlHead from "../../components/HtmlHead";

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
      <HtmlHead
        title="Green Web Dev :: Articles"
        description="Deep dive articles about sustainable web dev"
      />

      <h1>Articles</h1>
      <ul className="list-none">
        {props.articles.map((a) => (
          <li className="pb-6 ml-0" key={a.slug}>
            <Link href={`/articles/${a.slug}`}>
              <a className="text-2xl">{a.data.title}</a>
            </Link>
            <p className="text-xs">
              {a.data.date} by {a.data.author}
            </p>
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
