import "./globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";

//COMPONENTS
import Navbar from "./components/navbar/navbar";
import FooterComp from "./components/footer/footer";
import StoreProvider from "./store/storeProvider";

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
          <Navbar />
          {children}
          <FooterComp />
        </StoreProvider>
      </body>
    </html>
  );
}
