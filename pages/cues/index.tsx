import Head from "next/head";
import Link from "next/link";
import { getContentPages } from "../../utils/file.utils";

interface Cue {
  content: string;
  slug: string;
  data: any;
}

interface Props {
  cues: Cue[];
}

export default function Articles(props: Props) {
  return (
    <div>
      <Head>
        <title>Green Web Dev :: Cues</title>
      </Head>
      <h1>Cues</h1>
      <ul>
        {props.cues.map((a) => (
          <li key={a.slug}>
            <Link href={`/cues/${a.slug}`}>
              <a>{a.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const cues = await getContentPages("cues");
  return { props: { cues } };
}
