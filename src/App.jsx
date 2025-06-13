import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Experience from "./components/Experience";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";
import Skils from "./components/Skils";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />}>
            <Route index element={<Navigate to="experience" replace />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
            <Route path="skills" element={<Skils />} />
            <Route path="about-me" element={<AboutMe />} />
          </Route>
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
