import React from 'react'

function Header() {
  return (
    <div>
      <header>
        <div className="site-name">
          <h1>Shin's Portfolio Site</h1>
        </div>
        <nav>
          <ul className="menu">
            <li className="menu-list"><a href="#Works">Works</a></li>
            <li className="menu-list"><a href="#Skills">Skills</a></li>
            <li className="menu-list"><a href="#AboutMe">About me</a></li>
            <li className="menu-list"><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
