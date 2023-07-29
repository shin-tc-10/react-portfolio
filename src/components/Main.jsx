import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import About from "./About";
import Works from "./Works";
import Skills from "./Skills";
import Qualifications from "./Qualifications";
import Contact from "./Contact";
import SelfStudy from "./SelfStudy";

const Main = () => {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    // 3秒後にフェードインさせる
    const timer = setTimeout(() => {
      setIsFadeIn(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <main>
        <div className={`fade-in-text ${isFadeIn ? "fade-in" : ""}`}>
          <h1 className="glowing-text">Shin's Portfolio Site</h1>
        </div>
        {/* <div className="scroll-arrow">
          <Link to="works" spy={true} smooth={true} offset={50} duration={500}>
            <br />
            <FontAwesomeIcon
              icon={faAngleDown}
              beatFade
              size="2xl"
              style={{ color: "#edeff3" }}
            />
          </Link>
        </div> */}
        <section>
          <Works />
        </section>
        <section>
          <SelfStudy />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Qualifications />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Main;
