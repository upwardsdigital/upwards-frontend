import React, { useEffect, useState } from "react";
import AboutUs from "../components/AboutUs";
import ConnectWith from "../components/ConnectWith";
import HeaderBanner from "../components/HeaderBanner";
import OurClients from "../components/OurClients";
import OurWorks from "../components/OurWorks";
import Services from "../components/Services";
import Stages from "../components/Stages";
import Technologies from "../components/Technologies";

import { motion as m } from "framer-motion";

const HomePage = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <HeaderBanner />
      <AboutUs />
      <Services />
      <Stages />
      <OurWorks />
      <OurClients />
      <Technologies />
      <ConnectWith />
    </m.div>
  );
};

export default HomePage;
