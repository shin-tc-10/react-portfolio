import React from 'react';
import SoftwareDevelopmentImg from '../images/software-development.jpg';
import HtmlImg from '../images/html.svg';
import CssImg from '../images/css.svg';
import JavaScriptImg from '../images/javascript.svg';
import JavaImg from '../images/java.svg';
import JqueryImg from '../images/jquery.svg';
import OracleImg from '../images/oracle.svg';
import ReactImg from '../images/react.svg';
import SpringImg from '../images/spring.svg';
import SampleImg from '../images/sample.png';

function Main() {
  return (
    <div>
      <main>
        <section>
          <div className="top-img"><img src={SoftwareDevelopmentImg} /></div>
        </section>
        <section>
          <div className="works" id="works">
            <h2>Works</h2>
            <div className="works-app-box">
                <div className="works-app">
                    <p>ブログアプリ</p>
                    <div className="works-img">
                        <img src={SampleImg} />
                    </div>
                    <p>
                        このアプリはサンプルです。このアプリはサンプルです。
                        <br/>このアプリはサンプルです。このアプリはサンプルです。
                    </p>
                </div>
                <div className="works-app">
                    <p>SNSアプリ</p>
                    <div className="works-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>
                        このアプリはサンプルです。このアプリはサンプルです。
                        <br/>このアプリはサンプルです。このアプリはサンプルです。
                    </p>
                </div>
                <div className="works-app">
                    <p>Todoアプリ</p>
                    <div className="works-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>
                        このアプリはサンプルです。このアプリはサンプルです。
                        <br/>このアプリはサンプルです。このアプリはサンプルです。
                    </p>
                </div>
            </div>
          </div>
        </section>
        <section>
          <div className="skills" id="skills">
            <h2>Skills</h2>
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
                    <p>jQuery</p>
                    <div className="skill-img">
                        <img src={JqueryImg} alt="works-image" />
                    </div>
                    <p>実務経験1年</p>
                </div>
            </div>
            <div className="skills-box">
                <div className="skill">
                    <p>React</p>
                    <div className="skill-img">
                        <img src={ReactImg} alt="works-image" />
                    </div>
                    <p>自己学習3ヶ月</p>
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
            </div>
            <div className="skills-box">
                <div className="skill">
                    <p>Ruby</p>
                    <div className="skill-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>自己学習3ヶ月</p>
                </div>
                <div className="skill">
                    <p>Ruby on Rails</p>
                    <div className="skill-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>実務経験2年</p>
                </div>
                <div className="skill">
                    <p>Git/GitHub</p>
                    <div className="skill-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>実務経験1年</p>
                </div>
                <div className="skill">
                    <p>Linux</p>
                    <div className="skill-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>実務経験2年</p>
                </div>
            </div>
          </div>
        </section>
        <section>
          <div className="about-me" id="about-me">
            <h2>About me</h2>
            <p>Coming Soon</p>
            <div class="cp_timeline04">
                <div class="timeline_item">
                    <div class="time_date">
                        <p class="time">sample</p>
                        <p class="flag">sample</p>
                    </div>
                    <div class="desc">
                        <p>sample</p>
                    </div>
                </div>

                <div class="timeline_item">
                    <div class="time_date">
                        <p class="time">sample</p>
                        <p class="flag">sample</p>
                    </div>
                    <div class="desc">
                        <p>sample</p>
                    </div>
                </div>
                <div class="timeline_item">
                    <div class="time_date">
                        <p class="time">sample</p>
                        <p class="flag">sample</p>
                    </div>
                    <div class="desc">
                        <p>sample</p>
                    </div>
                </div>
            </div>
          </div>
        </section>
        <section>
          <div className="contact" id="contact">
            <h2>Contact</h2>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main
