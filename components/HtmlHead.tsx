import Head from "next/head";

const HtmlHead = ({
  title = "Green Web Dev",
  description = "Prompts and tips for creating sustainable web applications",
}) => {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} key="desciption" />
      <meta name="author" content="Mikey" />

      {/* OG tag */}
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Green Web Dev" />
      <meta property="og:image" content="/media/icons/android-chrome-192x192.png" />


      {/* Twitter tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@MetalMikey666" />
      <meta name="twitter:image" content="/media/icons/android-chrome-192x192.png" />

      {/* PWA settings and icons */}
      <meta name="theme-color" content="#2E7D32" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/media/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/media/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="media/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default HtmlHead;
