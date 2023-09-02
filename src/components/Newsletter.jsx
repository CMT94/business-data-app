import React from "react";

import CallToActionButton from "./ui/CallToActionButton";

const newsLetterContent = {
  title: "Want tips & tricks to optimize your flow?",
  subTitle: "Sign up to our newsletter and stay up to date.",
  warning: "We care about the protection of your data. Please, read our",
  privacyLink: "Privacy Policy.",
};

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-center sm:text-left md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {newsLetterContent.title}
          </h1>
          <p className="text-center sm:text-left">
            {newsLetterContent.subTitle}
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <CallToActionButton customOverride={"sm:ml-4"}>
              Notify me
            </CallToActionButton>
          </div>
          <p className="text-center sm:text-left">
            <span>{newsLetterContent.warning}</span>
            <span className="text-[#00df9a] underline cursor-pointer pl-1">
              {newsLetterContent.privacyLink}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
