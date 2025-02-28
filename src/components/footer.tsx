import React, { useState } from "react";
import clsx from "clsx";

const HoverLogoMedia: React.FC<{
  image: string;
}> = ({ image }) => {
  const [color, setColor] = useState("inactive");

  return (
    <div
      className="cursor-pointer w-fit"
      onMouseEnter={() => setColor("active")}
      onMouseLeave={() => setColor("inactive")}
    >
      <img
        className={`block w-6 h-6`}
        src={`/assets/imgs/socials/${image}-${color}.png`}
      />
    </div>
  );
};

const Title: React.FC<{
  text: string;
}> = ({ text }) => (
  <div className="text-white text-xl font-semibold mb-7">{text}</div>
);

const CustomText: React.FC<{
  text: string;
  className?: string;
}> = ({ className, text }) => (
  <div className={clsx(className, "text-[#A2A8B3] hover:text-[#EECE7C]")}>
    {text}
  </div>
);

export const Footer = () => {
  return (
    <div
      className="px-4 py-10 bg-[#141416] flex justify-center"
      style={{ borderTop: "1px solid #2F3033" }}
    >
      <div className="max-w-[1320px] w-full text-[#667085]">
        <div className="flex flex-col md:flex-row justify-between text-sm break-words gap-4">
          <div className="text-sm break-words flex flex-col md:flex-row gap-4 md:gap-10"></div>
          <div>dichvumat@gmail.com</div>
        </div>
      </div>
    </div>
  );
};