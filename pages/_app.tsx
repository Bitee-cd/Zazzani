import "@/styles/global.css";
import type { AppProps } from "next/app";
import "highlight.js/styles/default.css";
import hljs from "highlight.js";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
