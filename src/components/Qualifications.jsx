import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import JavaGoldImg from "../images/GLDSE11JPN.jpg";
import JavaSilverImg from "../images/SILVSE11JPN.jpg";

const Qualifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="qualifications" id="qualifications" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 2.0 }}
      >
        <h2>Qualification</h2>
        <div className="qualifications-box">
          <div className="qualification">
            <p>Java Programmer Gold SE11</p>
            <div className="qualification-img">
              <img src={JavaGoldImg} alt="qualification-img" />
            </div>
            <p>取得日：2022年11月</p>
          </div>
          <div className="qualification">
            <p>Java Programmer Silver SE11</p>
            <div className="qualification-img">
              <img src={JavaSilverImg} alt="qualification-img" />
            </div>
            <p>取得日：2022年3月</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Qualifications;
