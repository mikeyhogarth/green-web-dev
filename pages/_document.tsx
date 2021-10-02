import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Mikey" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Green Web Dev" />
          <meta
            property="og:image"
            content="/media/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@MetalMikey666" />
          <meta
            name="twitter:image"
            content="/media/icons/android-chrome-192x192.png"
          />

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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
