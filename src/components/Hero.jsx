import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust the breakpoint as needed

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  const [isMobile2, setIsMobile2] = useState(window.innerWidth <= 500);
  const handleWindowSizeChange = () => {
    setIsMobile2(window.innerWidth <= 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const [isMobile3, setIsMobile3] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile3(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile3(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className=" relative w-full h-screen mx-auto">
      <div
        className={` ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* This div is for the content on the left side of the hero section */}
        <div className=" flex flex-col justify-center items-center mt-5">
          {/* This is the circle on left side */}
          <div className="w-5 h-5 rounded-full bg-[#7fbcff]" />

          {/* This is the line on left side under the circle */}
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        {/* This div is for the content on the right side of the hero section */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#7fbcff]">Bar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Your friendly neighborhood <br className="sm:block hidden" />{" "}
            Software Developer
          </p>
        </div>
      </div>

      <ComputersCanvas isMobile={isMobile} />

      <div className=" absolute xs:bottom-6 bottom-32 w-full flex justify-center items-center">
        {/* This is the link to the about section */}
        <p>{`isMobile: ${isMobile}`}</p>
        <p>{`--isMobile2: ${isMobile2}`}</p>
        <p>{`--isMobile2: ${isMobile3}`}</p>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#4191b3] flex justify-center items-start p-2">
            <motion.div // This is the animated "arrow" on the bottom of the hero section
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#4191b3] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
