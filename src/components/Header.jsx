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
            <li className="menu-list"><a href="#works">Works</a></li>
            <li className="menu-list"><a href="#skills">Skills</a></li>
            <li className="menu-list"><a href="#about-me">About me</a></li>
            <li className="menu-list"><a href="#link">Blog/GitHub</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
