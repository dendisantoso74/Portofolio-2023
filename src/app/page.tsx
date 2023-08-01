import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Footer from "@/components/Sections/Footer";
import Header from "@/components/Sections/Header";
import Hero from "@/components/Sections/Hero";
import Skill from "@/components/Sections/Skill";
import Testimonial from "@/components/Sections/Testimonial";
import Work from "@/components/Sections/Work";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
