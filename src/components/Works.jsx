import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import PortfolioWebsiteImg from "../images/portfolio-website.png";
import SampleImg from "../images/sample.png";

function Works() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="works" id="works" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 2.0 }}
      >
        <h2>Works</h2>
        <div className="works-app-box">
          <div className="works-app">
            <p>ブログアプリ</p>
            <div className="works-img">
              <img src={SampleImg} />
            </div>
            <p>Coming Soon</p>
          </div>
          <div className="works-app">
            <p>SNSアプリ</p>
            <div className="works-img">
              <img src={SampleImg} alt="works-image" />
            </div>
            <p>Coming Soon</p>
          </div>
          <div className="works-app">
            <p>Webサイト</p>
            <div className="works-img">
              <img src={PortfolioWebsiteImg} alt="works-image" />
            </div>
            <p>Coming Soon</p>
          </div>
          <div className="works-app">
            <p>チャットアプリ</p>
            <div className="works-img">
              <img src={SampleImg} alt="works-image" />
            </div>
            <p>Coming Soon</p>
          </div>
          <div className="works-app">
            <p>Todoアプリ</p>
            <div className="works-img">
              <img src={SampleImg} alt="works-image" />
            </div>
            <p>Coming Soon</p>
          </div>
          <div className="works-app">
            <p>サンプルアプリ</p>
            <div className="works-img">
              <img src={SampleImg} alt="works-image" />
            </div>
            <p>Coming Soon</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Works;
