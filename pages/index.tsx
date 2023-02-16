import React from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import AfterHeader from "../components/AfterHeader";
import Text1 from "../components/Text1";
import Text2 from "../components/Text2";
import Profil from "../components/Profil";
import Location from "../components/Location";
import Cutdown from "../components/Cutdown";
import Gift from "../components/Gift";
import SectionHastag from "../components/SectionHastag";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Maps from "../components/maps";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <title>Nita & Aldi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/13.png" />
      </Head>
      <section>
        <audio controls loop autoPlay>
          <source src="music.mp3" type="audio/mpeg" />
          <source src="music.wav" type="audio/wav" />
        </audio>
        <Header />
        <AfterHeader />
        <Text1 />
        <Profil />
        <Location />
        <Cutdown />
        <Text2 />
        <Gift />
        <SectionHastag />
        <Gallery />
        <Maps />
        <Footer />
      </section>
    </>
  );
}
