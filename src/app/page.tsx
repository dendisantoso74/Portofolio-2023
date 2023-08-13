"use client";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Footer from "@/components/Sections/Footer";
import Header from "@/components/Sections/Header";
import Hero from "@/components/Sections/Hero";
import Skill from "@/components/Sections/Skill";
import Testimonial from "@/components/Sections/Testimonial";
import Work from "@/components/Sections/Work";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Work />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
