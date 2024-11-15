import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Services from "./components/Services/Services";
import Advantages from "./components/Advantages/Advantages";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Banner />
      <Features />
      <Services />
      <Advantages />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
