import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, name, icon }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <Tilt className="xs:w-[170px] w-30">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full blue-green-gradient p-[1px] rounded-full shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 10 }}
          className={`bg-tertiary rounded-full ${
            isMobile ? "py-7" : "py-9"
          } px-5 flex justify-evenly items-center flex-col`}
        >
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />

          <h3
            className={` text-white ${
              isMobile ? "text-[14px]" : "text-[18px]"
            } font-bold text-center`}
          >
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className=" w-36 h-36" key={technology.name}>
          <ServiceCard key={technology.name} index={index} {...technology} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
