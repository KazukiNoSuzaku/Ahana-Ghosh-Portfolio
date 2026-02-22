import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import GlasgowLife from "@/components/GlasgowLife";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Skills />
      <GlasgowLife />
      <Contact />
      <Footer />
    </main>
  );
}
