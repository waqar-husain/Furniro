import "./globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
import "../config/firebase.js";

//COMPONENTS
import Navbar from "../components/navbar/Navbar";
import FooterComp from "../components/footer/footer";
import StoreProvider from "../store/storeProvider";
import LoaderTop from "../components/partials/loaderTop/loaderTop";
import UserAuth from "../components/userAuth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Furniro",
  description: "E-commerce Furniture website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#f9f1e7" />
        <meta name="theme-color" content="#f9f1e7" />
      </Head>
      <body className={poppins.className}>
        <StoreProvider>
          <UserAuth />
          <LoaderTop />
          <div id="searchbar"></div>
          <div id="sidenav"></div>
          <Navbar />
          {children}
          <FooterComp />
        </StoreProvider>
      </body>
    </html>
  );
}
