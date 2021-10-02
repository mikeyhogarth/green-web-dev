import Head from "next/head";

const HtmlHead = ({
  title = "Green Web Dev",
  description = "Prompts and tips for creating sustainable web applications",
}) => {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} key="desciption" />

      {/* OG tag */}
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />

      {/* Twitter tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default HtmlHead;
