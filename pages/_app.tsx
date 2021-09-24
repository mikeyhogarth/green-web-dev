import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="px-5 lg:px-20 xl:px-40 pt-6 md:pt-16">
        <Component {...pageProps} />
      </main>
      <footer className="text-center p-10 mt-10 bg-gray-100 text-gray-500 border-t">
        Green Web Dev &copy;{new Date().getFullYear()}
      </footer>
    </>
  );
}
