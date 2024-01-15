import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
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
            Just your friendly neighborhood <br className="sm:block hidden" />{" "}
            Software Developer
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className=" absolute xs:bottom-6 bottom-32 w-full flex justify-center items-center">
        {/* This is the link to the about section */}
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
