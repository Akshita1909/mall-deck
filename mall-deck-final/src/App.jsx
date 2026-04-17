import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Attractions from "./components/Attractions";
import Retail from "./components/Retail";
import CTA from "./components/CTA";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Attractions />
      <Retail />
      <CTA />
    </>
  );
}