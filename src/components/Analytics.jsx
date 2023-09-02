import React from "react";

import Laptop from "../assets/laptop.jpg";
import CallToActionButton from "./ui/CallToActionButton";

const analyticsContent = {
  title: "Data analytics dashboard",
  subTitle: "Manage data analytics centrally",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio adipisci recusandae? Enim, sequi. Soluta, accusamus iste quia nisi doloremque delectus odio a quae atque illo natus, accusantium excepturi eum!",
};

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            {analyticsContent.title}
          </p>
          <h1 className=" capitalize md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {analyticsContent.subTitle}
          </h1>
          <p>{analyticsContent.description}</p>
          <CallToActionButton
            bgColor={"bg-black"}
            hoverBgColor={"hover:bg-[#292929]"}
            hov
            textColor={"text-[#00df9a]"}
            customOverride={"md:mx-0 py-3"}
          >
            Try Free Trial
          </CallToActionButton>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
