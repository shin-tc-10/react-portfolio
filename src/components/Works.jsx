import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import PortfolioWebsiteImg from "../images/portfolio-website.png";
import TodoApp from "../images/react-todo-app.png";
import SampleImg from "../images/sample.png";
import NextSnsAppImg from "../images/next-sns-app.png";
import PhotoSearchAppImg from "../images/photo-search-app.png";


function Works() {
  const [ref, inView] = useInView({ triggerOnce: true, });
  const [ref2, inView2] = useInView({ triggerOnce: true, });
  const [ref3, inView3] = useInView({ triggerOnce: true, });
  const [ref4, inView4] = useInView({ triggerOnce: true, });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="works" id="works">
      <h2>Works</h2>
      <div className="works-app-box">
        <div className="works-app" ref={ref}>
          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }} >
            <div className="works-img">
              <img src={TodoApp} alt="works-image" />
            </div>
            <a href="https://react-first-todo.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
              <span>React.js Todo App</span>
            </a>
          </motion.div>
        </div>
        <div className="works-app" ref={ref2}>
          <motion.div initial="hidden" animate={inView2 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <img src={PortfolioWebsiteImg} alt="works-image" />
            </div>
            <a href="/" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
            <span>React.js Web Site</span>
            </a>
          </motion.div>
        </div>
        <div className="works-app" ref={ref3}>
          <motion.div initial="hidden" animate={inView3 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <img src={NextSnsAppImg} alt="works-image" />
            </div>
            <a href="https://next-sns-client-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
              <span>Next.js SNS App</span>
            </a>
          </motion.div>
        </div>
        <div className="works-app" ref={ref4}>
          <motion.div initial="hidden" animate={inView4 ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.5 }}>
            <div className="works-img">
              <img src={PhotoSearchAppImg} />
            </div>
            <a href="https://next-photo-search-blond.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-flat">
              <span>Next.js Photo Search App</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Works;
