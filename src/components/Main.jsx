import React from 'react'

function Main() {
  return (
    <div>
      <main>
        <section>
          <div className="top-img"><img src="../images/shin-top-img.jpg" alt="top-image" /></div>
        </section>
        <section>
          <div className="Works" id="Works">
            <h2>Works</h2>
            <div>Todoアプリ</div>
          </div>
        </section>
        <section>
          <div className="Skills" id="Skills">
            <h2>Skills</h2>
          </div>
        </section>
        <section>
          <div className="AboutMe" id="AboutMe">
            <h2>About me</h2>
          </div>
        </section>
        <section>
          <div className="Contact" id="Contact">
            <h2>Contact</h2>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main
