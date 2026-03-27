import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PositionStrip from "@/components/PositionStrip";
import Stats from "@/components/Stats";
import WhoFor from "@/components/WhoFor";
import Services from "@/components/Services";
import AISection from "@/components/AISection";
import Differentiation from "@/components/Differentiation";
import Process from "@/components/Process";
import Results from "@/components/Results";
import TechStack from "@/components/TechStack";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <PositionStrip />
        <Stats />
        <WhoFor />
        <Services />
        <AISection />
        <Differentiation />
        <Process />
        <Results />
        <TechStack />
        <Pricing />
        <About />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
