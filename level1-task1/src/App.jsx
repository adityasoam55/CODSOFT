import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}