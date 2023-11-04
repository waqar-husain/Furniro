import "./globals.css";
import { Rubik } from "next/font/google";
import Head from "next/head";

//COMPONENTS
import Navbar from "./components/navbar";
import FooterComp from "./components/homepage/footer";
import StoreProvider from "./store/storeProvider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Furniro",
  description: "E-commerce Furniture website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="./Meubel House_Logos-05.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={rubik.className}>
        <StoreProvider>
          <Navbar />
          {children}
          <FooterComp />
        </StoreProvider>
      </body>
    </html>
  );
}
