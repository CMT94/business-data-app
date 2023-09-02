import React from "react";

import Button from "./ui/CallToActionButton";

import { Typewriter } from "react-simple-typewriter";
import CallToActionButton from "./ui/CallToActionButton";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <p className="md:text-5xl sm:text-4xl text-xl text-[#6d6d6d] font-bold md:pl-4 pl-2">
            <Typewriter
              words={["BtoB", "BtoC", "SaaS"]}
              typeSpeed={120}
              deleteSpeed={100}
              delaySpeed={2000}
              loop
              cursor
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BtoB, BtoC & SaaS
          platforms.
        </p>

        <CallToActionButton />
      </div>
    </div>
  );
};

export default Hero;
