const HtmlHead = ({ title, description }: any) => {
  return (
    <>
      <title key="title">{title}</title>
      <meta name="description" content={description} key="desciption" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default HtmlHead;
