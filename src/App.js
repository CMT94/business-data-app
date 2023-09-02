import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
    </React.Fragment>
  );
};

export default App;
