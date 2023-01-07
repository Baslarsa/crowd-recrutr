import "../styles/globals.css";
import type { AppProps } from "next/app";
import PageContainer from "../components/layout/PageContainer";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </AnimatePresence>
  );
}
