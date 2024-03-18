import React from 'react'

function HeroSection() {
  return (
    <section id="profile">
    <div className="section__pic-container">
      <img src="./img/Michiel_Profile.webp" alt="John Doe profile picture" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I'm</p>
      <h1 className="title">Michiel vd Gragt</h1>
      <p className="section__text__p2">Fullstack Developer</p>
      <div className="btn-container">
        <button
          className="btn btn-color-2"
          onClick={() => {window.open('./img/CV_MichielvanderGragt.pdf')}}
        >
          Download CV
        </button>
        <button className="btn btn-color-1" onClick={() => {window.location.href='#contact'}}>
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <img
          src="./img/linkedin.png"
          alt="My LinkedIn profile"
          className="icon"
          onClick={() => {location.href='https://www.linkedin.com/in/michielvandergragt/'}}
        />
        <img
          src="./img/github.png"
          alt="My Github profile"
          className="icon"
          onClick={() => {location.href='https://github.com/mvdgragt'}}
        />
      </div>
    </div>
  </section>  )
}

export default HeroSection