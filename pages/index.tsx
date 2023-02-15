import Head from "next/head";
import Canvas from "../components/Canvas";
import Header from "../components/Header";
import AfterHeader from "../components/AfterHeader";
import Text1 from "../components/Text1";
import Profil from "../components/Profil";
import Location from "../components/Location";
import Cutdown from "../components/Cutdown";
import Gift from "../components/Gift";
import SectionHastag from "../components/SectionHastag";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nita & Aldi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/13.png" />
      </Head>
      <section>
        <Canvas />
        <Header />
        <AfterHeader />
        <Text1 />
        <Profil />
        <Location />
        <Cutdown />
        <Gift />
        <SectionHastag />
        <Gallery />
        <Footer />
      </section>
    </>
  );
}
