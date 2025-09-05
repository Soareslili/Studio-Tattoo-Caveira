
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-quart",
      once: true,
      offset: 60,
    });
    // opcional: garante cálculo correto quando imagens carregam
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Process />
      <Gallery/>
      <FAQSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}

