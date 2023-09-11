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
                alt="School Applications"
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
                src="./img/Ewallet.png"
                alt="E-Wallet"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">E-Wallet</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {window.open('https://github.com/mvdgragt/cardwithredux')}}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {window.open('https://cardswithreduxtoolkit.netlify.app/')}}
              >
                Live Demo
              </button>
            </div>
          </div>

          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./img/assetmanager.png"
                alt="E-wallet"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Assetmanager</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {window.open('https://github.com/mvdgragt/assetmanager-client')}}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {window.open('https://assetmanager.vandergragt.eu/')}}
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