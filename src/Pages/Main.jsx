import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Shorten from "./Shortern";
import FeatureBox from "./FeatureBox";
import CTA from "./CTA";
import Footer from "../components/Footer";
function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Shorten />
      <FeatureBox />
      <CTA />
      <Footer />
    </div>
  );
}

export default Main;
