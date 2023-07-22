import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
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
              <p className="time">1992</p>
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
              <p className="time">2012</p>
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
              <p className="time">2012</p>
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
              <p className="time">2022</p>
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
  );
}

export default About;
