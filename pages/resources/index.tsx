import Link from "next/link";
import { getContentPages } from "../../utils/file.utils";
import HtmlHead from "../../components/HtmlHead";
import externalLinks from "./externalLinks.json";

interface Resource {
  content: string;
  slug: string;
  data: any;
}

interface Props {
  resources: Resource[];
}

export default function Resources(props: Props) {
  return (
    <div>
      <HtmlHead
        title="Green Web Dev :: Resources"
        description="Deep dives and resources about sustainable web dev"
      />

      <h2>Resources</h2>
      <p>
        The following list are deeper-dive resources and articles produced by
        us.
      </p>
      <ul className="list-disc">
        {props.resources.map((r) => (
          <li key={r.slug}>
            <Link href={`/resources/${r.slug}`}>
              <a>{r.data.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <h2>External Links</h2>
      <p className="pb-4">
        Links to allies and fellow knowledge sharers within the field of
        sustainable web development. Please do take the time to read these - our
        site only covers ways to reduce data and CPU usage and does not go into
        the specifics of why doing so is important: if you are interested in a
        deeper dive then we reccomend these resources;
      </p>
      <dl>
        {externalLinks.map((el, idx) => (
          <div key={idx}>
            <dt>
              <a
                className="text-xl"
                target="_blank"
                rel="noreferrer"
                href={el.link}
              >
                {el.title}
              </a>
            </dt>
            <dd className="mb-6">{el.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export async function getStaticProps() {
  const resources = await getContentPages("resources");
  return { props: { resources } };
}
