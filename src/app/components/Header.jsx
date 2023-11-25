"use client"

import React, { useState } from "react";
import { Link } from "react-scroll";
import NextLink from "next/link"

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <NextLink href="/" smooth={true} duration={500}>Home</NextLink>
        <Link to="works" smooth={true} duration={500}>Works</Link>
        <Link to="contact" smooth={true} duration={500}>Blog/GitHub</Link>
        <Link to="selfStudy" smooth={true}  duration={500}>SelfStudy</Link>
        <Link to="skills" smooth={true}  duration={500}>Skills</Link>
        <Link to="qualifications" smooth={true} duration={500}>Qualifications</Link>
        <Link to="about" smooth={true}  duration={500}>About</Link>
      </nav>
    </header>
  );
}

export default Header;
