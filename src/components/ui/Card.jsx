import React from "react";

import CallToActionButton from "./CallToActionButton";

const Card = (props) => {
  const { index, image, title, price, options } = props;
  return (
    <div
      className={`w-full shadow-xl ${
        index === 1 ? "bg-gray-100" : ""
      } flex flex-col p-4 ${
        index === 1 ? "md:my-0 my-8" : "my-4"
      } rounded-lg hover:scale-105 duration-300`}
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-transparent"
        src={image}
        alt={title}
      />
      <h2 className="text-2xl font-bold capitalize text-center py-8">
        {title}
      </h2>
      <p className="text-center text-4xl font-bold">${price}</p>

      <div className="text-center font-medium">
        {options.map((option, optionIndex) => (
          <p
            key={optionIndex}
            className={`py-2 border-b mx-8 ${optionIndex === 0 ? "mt-8" : ""}`}
          >
            {option}
          </p>
        ))}
      </div>

      <CallToActionButton
        bgColor={index === 1 ? "bg-black" : undefined}
        textColor={index === 1 ? "text-[#00df9a]" : undefined}
      >
        Start Trial
      </CallToActionButton>
    </div>
  );
};

export default Card;
