import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
// import useProductContext from "./hooks/useProductContext";

function About() {
  // const myname = useProductContext();

  const data = {
    name: "Web Store",
  };
  return <HeroSection myData={data} />;
}

export default About;
