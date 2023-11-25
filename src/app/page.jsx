"use client"

import './globals.css'
import React, { useState, useEffect } from "react";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import SelfStudy from "./components/SelfStudy";
import MyLink from "./components/MyLink";

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
          <h1 className="glowing-text">Next Portfolio Site</h1>
        </div>
        <section>
          <Works />
        </section>
        <section>
          <MyLink />
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
      </main>
    </div>
  );
};

export default Main;
