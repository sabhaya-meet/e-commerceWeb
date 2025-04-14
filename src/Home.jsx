import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Truested from "./components/Truested";
import FeatureProducts from "./components/FeatureProducts";
function Home() {
  const data = {
    name: "e-commerce Store",
  };
  return (
    <>
      {" "}
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Truested />
    </>
  );
}

export default Home;
