import Hero from "./components/Hero";
import About from "./components/About";
import LogoAnimation from "@/components/LogoAnimation";
import Portfolio from "@/components/Portfolio";
import Stack from "@/components/Stack";
import KeyMetrics from "@/components/KeyMetrics";
import Servers from "@/components/Servers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoAnimation />
      <About />
      <Portfolio />
      <Stack />
      <KeyMetrics />
      <Servers />
      <Contact />
      <Footer />
    </>
  );
}
