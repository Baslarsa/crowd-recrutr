import "../styles/globals.css";
import type { AppProps } from "next/app";
import PageContainer from "../components/layout/PageContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageContainer>
      <Component {...pageProps} />
    </PageContainer>
  );
}
