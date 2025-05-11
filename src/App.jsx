import { useState } from "react";
import "./App.css";
import Headers from "./Sections/Headers";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import Pricing from "./Sections/Pricing";
import Faq from "./Sections/Faq";
import Download from "./Sections/Download";
import Testimonials from "./Sections/Testimonials";
import Footer from "./Sections/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="overflow-hidden">
      <Headers />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
