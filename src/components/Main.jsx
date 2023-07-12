import React from 'react';
import SoftwareDevelopmentImg from '../images/software-development.jpg';

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
                        <img src="../images/works1.png" alt="works-image" />
                    </div>
                    <p>
                        このアプリはサンプルです。このアプリはサンプルです。
                        <br/>このアプリはサンプルです。このアプリはサンプルです。
                    </p>
                </div>
                <div className="works-app">
                    <p>SNSアプリ</p>
                    <div className="works-img">
                        <img src="../images/works1.png" alt="works-image" />
                    </div>
                    <p>
                        このアプリはサンプルです。このアプリはサンプルです。
                        <br/>このアプリはサンプルです。このアプリはサンプルです。
                    </p>
                </div>
                <div className="works-app">
                    <p>Todoアプリ</p>
                    <div className="works-img">
                        <img src="../images/works1.png" alt="works-image" />
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
                        <img src="../images/html.svg" alt="works-image" />
                    </div>
                    <p>実務経験2年</p>
                </div>
                <div className="skill">
                    <p>CSS</p>
                    <div className="skill-img">
                        <img src="../images/css.svg" alt="works-image" />
                    </div>
                    <p>実務経験2年</p>
                </div>
                <div className="skill">
                    <p>JavaScript</p>
                    <div className="skill-img">
                        <img src="../images/javascript.svg" alt="works-image" />
                    </div>
                    <p>実務経験2年</p>
                </div>
                <div className="skill">
                    <p>jQuery</p>
                    <div className="skill-img">
                        <img src="../images/jquery.svg" alt="works-image" />
                    </div>
                    <p>実務経験1年</p>
                </div>
            </div>
            <div className="skills-box">
                <div className="skill">
                    <p>React</p>
                    <div className="skill-img">
                        <img src="../images/react.svg" alt="works-image" />
                    </div>
                    <p>自己学習3ヶ月</p>
                </div>
                <div className="skill">
                    <p>Java</p>
                    <div className="skill-img">
                        <img src="../images/java.svg" alt="works-image" />
                    </div>
                    <p>実務経験2年</p>
                </div>
                <div className="skill">
                    <p>SpringBoot</p>
                    <div className="skill-img spring">
                        <img src="../images/spring.svg" alt="works-image" />
                    </div>
                    <p>実務経験1年</p>
                </div>
                <div className="skill">
                    <p>SQL</p>
                    <div className="skill-img">
                        <img src="../images/oracle.svg" alt="works-image" />
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
            {/* <div class="cp_timeline04">
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
            </div> */}
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
