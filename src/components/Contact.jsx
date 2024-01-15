import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { whatsapp, phone, sms } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.VITE_EMAIL_JS_SERVICE,
        process.env.VITE_EMAIL_JS_TEMPLATE,
        {
          from_name: form.name,
          to_name: "Bar",
          from_email: form.email,
          to_email: "barlis2693@gmail.com",
          message: form.message,
        },
        process.env.VITE_EMAIL_JS_API_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <p className={styles.sectionSubText}>via</p>
        <div className="flex flex-row flex-wrap justify-start gap-5 py-1">
          <div
            onClick={() => window.open("https://wa.me/972532419404", "blank")}
            className=" w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={whatsapp}
              alt="whatsapp"
              className="w-[90%] h-[90%] object-contain"
            />
          </div>
          <div
            onClick={() => {
              if (isMobile) {
                window.open("tel:+972-53-241-9404", "blank");
              } else {
                alert("This is my phone number: 0532419404");
              }
            }}
            className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={phone}
              alt="phone"
              className="w-[90%] h-[90%] object-contain"
            />
          </div>
          <div
            onClick={() => window.open("sms:+972-53-241-9404", "blank")}
            className=" w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={sms}
              alt="sms"
              className="w-[90%] h-[90%] object-contain"
            />
          </div>
        </div>
        <p className={styles.sectionSubText}>test:</p>
        <p className={styles.sectionSubText}>{process.env.VITE_EMAIL_JS_API_KEY}</p>
        <p className={styles.sectionSubText}>{import.meta.env.VITE_EMAIL_JS_SERVICE}</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-8"
        >
          <p className={styles.sectionSubText}>or</p>
          <label className="flex flex-col">
            <span className=" text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className=" text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className=" text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></textarea>
          </label>

          <button
            type="submit"
            className=" bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
