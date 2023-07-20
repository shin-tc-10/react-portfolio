import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <div>
      <header>
        <div className="site-name">{/* <h1>ShinMemo</h1> */}</div>
        <nav>
          <ul className="menu">
            <li className="menu-list">
              <Link
                to="works"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li className="menu-list">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="menu-list">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="menu-list">
              <Link
                to="link"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Blog / GitHub
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
