import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HtmlHead from "../components/HtmlHead";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HtmlHead
        title="Green Web Dev"
        description="Prompts and tips for creating sustainable web applications"
      />

      <Header />
      <main className="px-5 mb-20 lg:px-20 xl:px-40 pt-6 md:pt-16">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
