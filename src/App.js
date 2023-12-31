import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Services />
      <Footer />
    </React.Fragment>
  );
};

export default App;
