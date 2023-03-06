import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FirstSection from "./FirstSection";
import Mission from "./Mission";
import Contact from "./Contact";
import Features from "./Features";
import { useState } from "react";
import AboutUs from "./AboutUs";
import WhoQualifies from "./WhoQualifies";
import Application from "./Application";

function App() {
  const [page, setPage] = useState('home');
  console.log(page)
  if (page === 'home') {
  return (
    <>
      <Navbar 
      setPage = {setPage}
      />
      <Hero 
      setPage = {setPage}
      />
      <FirstSection />
      <Mission />
      <Features />
      <Contact />
    </>
  );
  }
  else if (page === 'about') {
    return (
      <>
      <Navbar
      setPage = {setPage}
      />
      <AboutUs />
      <WhoQualifies />
      <Contact />
      </>
    )
  }
  else if (page === 'application') {
    return (
      <>
      <Navbar setPage = {setPage} />
      <Application />
      <Contact />
      </>
    )
  }
}

export default App;
