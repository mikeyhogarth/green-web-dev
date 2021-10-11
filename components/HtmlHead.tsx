import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

const HtmlHead = ({ title, description }: Props) => {
  const siteNameTitle = `Green Web Dev :: ${title}`;

  return (
    <Head>
      <title key="title">{siteNameTitle}</title>
      <meta name="description" content={description} key="desciption" />

      {/* OG tag */}
      <meta property="og:title" content={siteNameTitle} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />

      {/* Twitter tags */}
      <meta name="twitter:title" content={siteNameTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default HtmlHead;
