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
        <body className="bg-white text-black">
          <div className="p-6 bg-blue-900 text-yellow-300 min-h-10 text-center text-2xl">
            This site is being repurposed into an e-book called{" "}
            <a
              className="underline text-red-400 hover:text-red-700 "
              href="https://mikeyhogarth.github.io/the-green-web-dev-book/"
            >
              The Green Web Dev Book
            </a>{" "}
            and will therefore receive no further updates. We will be shutting
            down some time in 2023.
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
