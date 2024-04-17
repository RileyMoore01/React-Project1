import "./hero.scss";
import React, { useRef } from 'react';
import { motion } from "framer-motion";
import Contact from "../contact/Contact";
// import { useNavigate } from "react-router-dom";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const targetRef = useRef('#Contact');

  // const scrollToSection = () => {
  //   targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // };

  const scrollToSection = () => {
    if (targetRef.current) {
      const topPos = targetRef.current.offsetTop * 15 - 6; // Adjust 60 to the height of your header or any other offset
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Riley Moore</motion.h2>
          <motion.h1 variants={textVariants}>
            Moore Devs
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            {/* <motion.button variants={textVariants} className='contact-button' onClick={scrollToSection}>Contact Me</motion.button> */}
            <div>
              <button className='contact-button' onClick={scrollToSection}>Contact Me</button>
              <div ref={targetRef}></div>
              {/* <div style={{ height: '150px' }}>Scroll down</div> */}
            </div>
            {/* <button className='contact-button' onClick={goToAbout}>Contact Me</button> */}
            {/* <motion.button variants={textVariants}>
              Contact Me
            </motion.button> */}
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero-grad.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;