import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import About from "../components/About";

import React from "react";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Problem />
      <Solution />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
