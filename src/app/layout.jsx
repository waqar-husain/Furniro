import "./globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
import "../config/firebase.js";

//COMPONENTS
import Navbar from "../components/navbar/navbar";
import FooterComp from "../components/footer/footer";
import StoreProvider from "../store/storeProvider";
import LoaderTop from "../components/loaderTop";
import { useDispatch } from "react-redux";
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
          rel="icon"
          href="./Meubel House_Logos-05.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={poppins.className}>
        <StoreProvider>
          <UserAuth />
          <LoaderTop />
          <div id="searchbar"></div>
          <Navbar />
          {children}
          <FooterComp />
        </StoreProvider>
      </body>
    </html>
  );
}
