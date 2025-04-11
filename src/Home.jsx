import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Truested from "./components/Truested";
function Home() {
  const data = {
    name: "e-commerce Store",
  };
  return (
    <>
      {" "}
      <HeroSection myData={data} />
      <Services />
      <Truested />
    </>
  );
}

export default Home;
