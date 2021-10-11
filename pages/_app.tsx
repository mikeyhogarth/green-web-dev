import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HtmlHead from "../components/HtmlHead";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <HtmlHead
        title="Green Web Dev"
        description="Tips and tricks for minimizing the carbon footprint of your website or application. Written and curated by web developers, for web developers."
      />

      <Header />
      <main className="px-5 mb-20 lg:px-20 xl:px-40 pt-6 md:pt-16">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
