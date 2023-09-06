import React from 'react'

function Navbar() {
  return (
    <>
       <nav id="desktop-nav">
      <div className="logo">Michiel vd Gragt</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div className="logo">John Doe</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={() => {"toggleMenu()"}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links">
          <li><a href="#about" onClick={() => {"toggleMenu()"}}>About</a></li>
          <li><a href="#experience" onClick={() => {"toggleMenu()"}}>Experience</a></li>
          <li><a href="#projects" onClick={() => {"toggleMenu()"}}>Projects</a></li>
          <li><a href="#contact" onClick={() => {"toggleMenu()"}}>Contact</a></li>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar