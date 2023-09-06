import React from 'react'

function AboutMe() {
  return (
    <section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      <div className="section__pic-container">
        <img
          src="./img/about-pic.png"
          alt="Profile picture"
          className="about-pic"
        />
      </div>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img
              src="./img/experience.png"
              alt="Experience icon"
              className="icon"
            />
            <h3>Experience</h3>
            <p>2+ years <br />Fullstack Development</p>
          </div>
          <div className="details-container">
            <img
              src="./img/education.png"
              alt="Education icon"
              className="icon"
            />
            <h3>Education</h3>
            <p>B.Sc. Bachelors Degree<br />B.Ed. Bachelors Degree</p>
          </div>
        </div>
        <div className="text-container">
          <p>
          I live by Pippi Longstocking's motto: 'How can I know that when I've never tried?' </p><br/><p>That's how I try to live my life. At the age of 20 I moved to Sweden to take on a new adventure and ended up staying! I went into teaching to share my passion for learning new things. After 20 years I was ready for another big step: changing career. I left teaching and went back to school to become a webdeveloper. I chose webdevelopment because of my love for technology, languages, coding, building great applications and solving problems.</p>
        </div>
      </div>
    </div>
    <img
      src="./img/arrow.png"
      alt="Arrow icon"
      className="icon arrow"
      onClick={() => {location.href='./#experience'}}
    />
  </section>  )
}

export default AboutMe