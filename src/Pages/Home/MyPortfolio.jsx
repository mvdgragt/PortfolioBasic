import React from 'react'

function MyPortfolio() {
  return (
<section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./img/schoolapplications.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">School Applications</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {window.open('https://github.com/mvdgragt/SchoolApplications')}}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {window.open('https://schoolapplications.netlify.app/')}}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./img/project-2.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">E-Wallet</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {window.open=('https://cardswithreduxtoolkit.netlify.app/')}}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {windows.open=('https://github.com/mvdgragt/cardwithredux')}}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./img/project-3.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {"location.href='https://github.com/'"}}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {"location.href='https://github.com/'"}}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./img/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {"location.href='./#contact'"}}
      />
    </section>  )
}

export default MyPortfolio