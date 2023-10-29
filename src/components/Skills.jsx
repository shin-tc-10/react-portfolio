import React from "react";
import RubyImg from "../images/ruby.svg";
import RailsImg from "../images/rails.svg";
import GitHubImg from "../images/github-icon.svg";
import LinuxImg from "../images/linux-tux.svg";
import TypeScriptImg from "../images/typescript-icon.svg";
import NextJsImg from "../images/nextjs-icon.svg";
import NestJsImg from "../images/nestjs.svg";
import FireBaseImg from "../images/firebase.svg";
import HtmlImg from "../images/html.svg";
import CssImg from "../images/css.svg";
import JavaScriptImg from "../images/javascript.svg";
import JavaImg from "../images/java.svg";
import JqueryImg from "../images/jquery.svg";
import OracleImg from "../images/oracle.svg";
import ReactImg from "../images/react.svg";
import SpringImg from "../images/spring.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="skills" id="skills" ref={ref}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariants} transition={{ duration: 2.0 }}>
        <h2>My Skills</h2>
        <div className="skills-box">
          <div className="skill">
            <p>HTML</p>
            <div className="skill-img">
              <img src={HtmlImg} />
            </div>
            <p>実務経験3年</p>
          </div>
          <div className="skill">
            <p>CSS</p>
            <div className="skill-img">
              <img src={CssImg} alt="works-image" />
            </div>
            <p>実務経験3年</p>
          </div>
          <div className="skill">
            <p>JavaScript</p>
            <div className="skill-img">
              <img src={JavaScriptImg} alt="works-image" />
            </div>
            <p>実務経験3年</p>
          </div>
          <div className="skill">
            <p>TypeScript</p>
            <div className="skill-img">
              <img src={TypeScriptImg} alt="works-image" />
            </div>
            <p>実務経験0.6年</p>
          </div>
          <div className="skill">
            <p>jQuery</p>
            <div className="skill-img">
              <img src={JqueryImg} alt="works-image" />
            </div>
            <p>実務経験1年</p>
          </div>
          <div className="skill">
            <p>React</p>
            <div className="skill-img">
              <img src={ReactImg} alt="works-image" />
            </div>
            <p>独学6ヶ月</p>
          </div>
          <div className="skill">
            <p>Next.js</p>
            <div className="skill-img">
              <img src={NextJsImg} alt="works-image" />
            </div>
            <p>独学6ヶ月</p>
          </div>
          <div className="skill">
            <p>Nest.js</p>
            <div className="skill-img">
              <img src={NestJsImg} alt="works-image" />
            </div>
            <p>独学1ヶ月</p>
          </div>
          <div className="skill">
            <p>Java</p>
            <div className="skill-img">
              <img src={JavaImg} alt="works-image" />
            </div>
            <p>実務経験3年</p>
          </div>
          <div className="skill">
            <p>SpringBoot</p>
            <div className="skill-img">
              <img src={SpringImg} alt="works-image" />
            </div>
            <p>実務経験1年</p>
          </div>
          <div className="skill">
            <p>SQL</p>
            <div className="skill-img">
              <img src={OracleImg} alt="works-image" />
            </div>
            <p>実務経験2年</p>
          </div>
          <div className="skill">
            <p>Ruby</p>
            <div className="skill-img">
              <img src={RubyImg} alt="works-image" />
            </div>
            <p>独学3ヶ月</p>
          </div>
          <div className="skill">
            <p>Rails</p>
            <div className="skill-img">
              <img src={RailsImg} alt="works-image" />
            </div>
            <p>独学3ヶ月</p>
          </div>
          <div className="skill">
            <p>Git/GitHub</p>
            <div className="skill-img">
              <img src={GitHubImg} alt="works-image" />
            </div>
            <p>実務経験1年</p>
          </div>
          <div className="skill">
            <p>Linux</p>
            <div className="skill-img">
              <img src={LinuxImg} alt="works-image" />
            </div>
            <p>実務経験2年</p>
          </div>
          {/* <div className="skill">
            <p>FireBase</p>
            <div className="skill-img">
              <img src={FireBaseImg} alt="works-image" />
            </div>
            <p>独学2ヶ月</p>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
