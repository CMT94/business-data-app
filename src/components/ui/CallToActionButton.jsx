import React from "react";

const CallToActionButton = (props) => {
  const { children, bgColor, textColor, hoverBgColor, customOverride } = props;
  return (
    <button
      className={`${
        bgColor ? bgColor : "bg-[#00df9a]"
      } w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ${
        textColor ? textColor : "text-black"
      } ${hoverBgColor ? hoverBgColor : "hover:bg-[#02c98c]"} ${
        customOverride ? customOverride : ""
      }`}
    >
      {children ? children : "Get Started"}
    </button>
  );
};

export default CallToActionButton;
