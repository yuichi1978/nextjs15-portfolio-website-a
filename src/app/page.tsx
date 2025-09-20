import Hero from "./components/Hero";
import About from "./components/About";
import LogoAnimation from "@/app/components/LogoAnimation";
import Portfolio from "@/app/components/Portfolio";
import Stack from "@/app/components/Stack";
import KeyMetrics from "@/app/components/KeyMetrics";
import Servers from "@/app/components/Servers";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
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
    </div>
  );
}
