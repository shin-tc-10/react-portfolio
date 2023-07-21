import React from "react";
import HtmlImg from "../images/html.svg";
import CssImg from "../images/css.svg";
import JavaScriptImg from "../images/javascript.svg";
import JavaImg from "../images/java.svg";
import JqueryImg from "../images/jquery.svg";
import OracleImg from "../images/oracle.svg";
import ReactImg from "../images/react.svg";
import SpringImg from "../images/spring.svg";
import SampleImg from "../images/sample.png";
import JavaGoldImg from "../images/GLDSE11JPN.jpg";
import JavaSilverImg from "../images/SILVSE11JPN.jpg";
import RubyImg from "../images/ruby.svg";
import RailsImg from "../images/rails.svg";
import GitHubImg from "../images/github-icon.svg";
import LinuxImg from "../images/linux-tux.svg";
import TypeScriptImg from "../images/typescript-icon.svg";
import NextJsImg from "../images/nextjs-icon.svg";
import FireBaseImg from "../images/firebase.svg";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function Main() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
  });
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <main>
        <div className="top">
          <h1>Shin's Portfolio Site</h1>
        </div>
        <div className="scroll-arrow">
          <Link to="works" spy={true} smooth={true} offset={50} duration={500}>
            <br />
            <FontAwesomeIcon
              icon={faAngleDown}
              beatFade
              size="2xl"
              style={{ color: "#edeff3" }}
            />
          </Link>
        </div>
        <section>
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
                    <img src={SampleImg} alt="works-image" />
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
        </section>
        <section>
          <div className="skills" id="skills" ref={ref2}>
            <motion.div
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ duration: 2.0 }}
            >
              <h2>My Skills</h2>
              <div className="skills-box">
                <div className="skill">
                  <p>HTML</p>
                  <div className="skill-img">
                    <img src={HtmlImg} />
                  </div>
                  <p>実務経験2年</p>
                </div>
                <div className="skill">
                  <p>CSS</p>
                  <div className="skill-img">
                    <img src={CssImg} alt="works-image" />
                  </div>
                  <p>実務経験2年</p>
                </div>
                <div className="skill">
                  <p>JavaScript</p>
                  <div className="skill-img">
                    <img src={JavaScriptImg} alt="works-image" />
                  </div>
                  <p>実務経験2年</p>
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
                  <p>独学3ヶ月</p>
                </div>
                <div className="skill">
                  <p>Next.js</p>
                  <div className="skill-img">
                    <img src={NextJsImg} alt="works-image" />
                  </div>
                  <p>独学3ヶ月</p>
                </div>
                <div className="skill">
                  <p>Java</p>
                  <div className="skill-img">
                    <img src={JavaImg} alt="works-image" />
                  </div>
                  <p>実務経験2年</p>
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
                <div className="skill">
                  <p>FireBase</p>
                  <div className="skill-img">
                    <img src={FireBaseImg} alt="works-image" />
                  </div>
                  <p>実務経験2年</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section>
          <div className="qualifications" id="qualifications" ref={ref3}>
            <motion.div
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
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
        </section>
        <section>
          <div className="about-me" id="about" ref={ref4}>
            <motion.div
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ duration: 2.0 }}
            >
              <h2>About</h2>
              <div className="cp_timeline04">
                <div className="timeline_item">
                  <div className="time_date">
                    <p className="time">1992年</p>
                    <p className="flag">大阪で生まれる。</p>
                  </div>
                  <div className="desc">
                    <p>
                      生まれも育ちも大阪。中高は陸上部に所属。種目は中長距離走。冬は毎日15km~20kmは走っていた。
                    </p>
                  </div>
                </div>

                <div className="timeline_item">
                  <div className="time_date">
                    <p className="time">2012年</p>
                    <p className="flag">配送会社に就職</p>
                  </div>
                  <div className="desc">
                    <p>
                      面接時は倉庫での軽作業と聞いていたものの、実際は100kg~200kg程の重量物を2人で運搬する重作業だった。
                    </p>
                  </div>
                </div>
                <div className="timeline_item">
                  <div className="time_date">
                    <p className="time">2012年</p>
                    <p className="flag">販売員に転職</p>
                  </div>
                  <div className="desc">
                    <p>
                      通信機器を販売する販売員に転職。5年ほどで店長に昇進。7年ほど勤める。
                    </p>
                  </div>
                </div>
                <div className="timeline_item">
                  <div className="time_date">
                    <p className="time">2022年</p>
                    <p className="flag">未経験からITエンジニアに転職</p>
                  </div>
                  <div className="desc">
                    <p>
                      独学していたプログラミングを本業にするため、実務未経験からITエンジニアに転職。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section>
          <div className="about-me" id="about" ref={ref5}>
            <motion.div
              initial="hidden"
              animate={inView5 ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ duration: 2.0 }}
            >
              <h2>contact</h2>
              <div className="link-table" id="link">
                <table>
                  <tbody>
                    <tr>
                      <td>Zenn</td>
                      <td>
                        <Link to="/https://zenn.dev/shin_re">
                          https://zenn.dev/shin_re
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>GitHub</td>
                      <td>
                        <Link to="/https://github.com/shin-tc-10">
                          https://github.com/shin-tc-10
                        </Link>
                      </td>
                    </tr>
                    {/* 他のポートフォリオリンクを追加 */}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
