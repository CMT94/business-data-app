import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Analytics />
    </React.Fragment>
  );
};

export default App;
