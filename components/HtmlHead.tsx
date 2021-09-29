import Head from "next/head";

const HtmlHead = ({
  title = "Green Web Dev",
  description = "Prompts and tips for creating sustainable web applications",
}) => {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta property="og:title" content={title} key="og:title" />
      <meta name="description" content={description} key="desciption" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta name="author" content="Mikey" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HtmlHead;
