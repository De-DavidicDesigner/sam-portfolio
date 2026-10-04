import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Stack from "./sections/Stack";

const App = () => (
  <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Services />
      <Education />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
