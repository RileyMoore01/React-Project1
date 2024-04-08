import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "SaaS",
        img: "./code.jpeg",
        desc: "We are here for all of your cutting-edge software needs. Ranging from Web/IOS Development to hardware components and design.",
    },
    {
        id: 2,
        title: "Web Developement",
        img: "./web-dev.webp",
        desc: "Create your personalized design to allow you to stay connected with your customers and clients. Also adding SEO optimization to make your website easy to find.",
    },
    {
        id: 3,
        title: "Software Issues",
        img: "./security.png",
        desc: "Having issues with your computer or PC? Lets set up a consulation call to get all of this resolved. Not to mention we do code reviews if you are not 100% sure of your third-party developer.",
    },
    {
        id: 4,
        title: "Consultation",
        img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Let us know if there is something listed that you want done related to web developement, ios development, or general technical issues.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;