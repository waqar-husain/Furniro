import Section1 from "./components/homepage/section1";
import Section2 from "./components/homepage/section2";
import HeaderComp from "./components/homepage/header";
import Section3 from "./components/homepage/section3";
import Section4 from "./components/homepage/section4";

export default function Home() {
  return (
    <>
      <HeaderComp />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </>
  );
}
