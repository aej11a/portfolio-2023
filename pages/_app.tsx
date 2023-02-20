import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Secular_One } from "@next/font/google";
import ErrorBoundary from "../components/ErrorBoundary";

// If loading a variable font, you don't need to specify the font weight
const secular_one_font = Secular_One({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <style jsx global>{`
        h1,
        h2 {
          font-family: ${secular_one_font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
