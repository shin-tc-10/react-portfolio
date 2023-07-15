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
import JavaGoldImg from '../images/GLDSE11JPN.jpg';
import JavaSilverImg from '../images/SILVSE11JPN.jpg';
import RubyImg from '../images/ruby.svg';
import RailsImg from '../images/rails.svg';
import GitHubImg from '../images/github-icon.svg';
import LinuxImg from '../images/linux-tux.svg';
import TypeScriptImg from '../images/typescript-icon.svg';
import NextJsImg from '../images/nextjs-icon.svg';
import FireBaseImg from '../images/firebase.svg';


function Main() {
  return (
    <div>
      <main>
        <div className="top-img"></div>
        {/* <img src={SoftwareDevelopmentImg} /> */}
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
                    </p>
                </div>
                <div className="works-app">
                    <p>SNSアプリ</p>
                    <div className="works-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>
                        このアプリはサンプルです。このアプリはサンプルです。
                    </p>
                </div>
                <div className="works-app">
                    <p>Webサイト</p>
                    <div className="works-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>
                        このアプリはサンプルです。このアプリはサンプルです。
                    </p>
                </div>
                <div className="works-app">
                    <p>チャットアプリ</p>
                    <div className="works-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>
                        このアプリはサンプルです。このアプリはサンプルです。
                    </p>
                </div>
                <div className="works-app">
                    <p>Todoアプリ</p>
                    <div className="works-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>
                        このアプリはサンプルです。このアプリはサンプルです。
                    </p>
                </div>
                <div className="works-app">
                    <p>サンプルアプリ</p>
                    <div className="works-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>
                        このアプリはサンプルです。このアプリはサンプルです。
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
            </div>
        </section>
        <section>
          <div className="qualifications" id="qualifications">
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
                {/* <div className="skill">
                    <p>Ruby on Rails</p>
                    <div className="skill-img">
                        <img src={SampleImg} alt="works-image" />
                    </div>
                    <p>実務経験2年</p>
                </div> */}
            </div>
          </div>
        </section>
        <section>
          <div className="about-me" id="about-me">
            <h2>About me</h2>
            <div class="cp_timeline04">
                <div class="timeline_item">
                    <div class="time_date">
                        <p class="time">1992年</p>
                        <p class="flag">大阪で生まれる。</p>
                    </div>
                    <div class="desc">
                        <p>生まれも育ちも大阪。中高は陸上部に所属。種目は中長距離走。冬は毎日15km~20kmは走っていた。</p>
                    </div>
                </div>

                <div class="timeline_item">
                    <div class="time_date">
                        <p class="time">2012年</p>
                        <p class="flag">配送会社に就職</p>
                    </div>
                    <div class="desc">
                        <p>面接時は倉庫での軽作業と聞いていたものの、実際は100kg~200kg程の重量物を2人で運搬する重作業だった。</p>
                    </div>
                </div>
                <div class="timeline_item">
                    <div class="time_date">
                        <p class="time">2012年</p>
                        <p class="flag">販売員に転職</p>
                    </div>
                    <div class="desc">
                        <p>通信機器を販売する販売員に転職。5年ほどで店長に昇進。7年ほど勤める。</p>
                    </div>
                </div>
                <div class="timeline_item">
                    <div class="time_date">
                        <p class="time">2022年</p>
                        <p class="flag">未経験からITエンジニアに転職</p>
                    </div>
                    <div class="desc">
                        <p>独学していたプログラミングを本業にするため、実務未経験からITエンジニアに転職。</p>
                    </div>
                </div>
            </div>
            <div className="link" id="link">
                <h2>Blog / GitHub</h2>
                <div className="my-link">
                    <p>Zenn：<a href="https://zenn.dev/shin_re">https://zenn.dev/shin_re</a></p>
                    <p>GitHub：<a href="https://github.com/shin-tc-10">https://github.com/shin-tc-10</a></p>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main
