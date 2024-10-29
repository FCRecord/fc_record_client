import { AppProps } from "next/app";
import GlobalStyle from "@/styles/GlobalStyle";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["400", "800"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <main className={notoSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
