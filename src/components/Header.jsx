import React, { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* <div className="logo">Your Logo</div> */}
      {/* メディアクエリでスマートフォンの幅以下の場合に表示 */}
      <>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="works" spy={true} smooth={true} offset={50} duration={500}>
            Works
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
          <Link to="link" spy={true} smooth={true} offset={50} duration={500}>
            Blog / GitHub
          </Link>
        </nav>
      </>
    </header>
  );
}

export default Header;
