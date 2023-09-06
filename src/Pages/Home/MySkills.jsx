import React from 'react'
import data from "../../data/index.json"

function MySkills() {
  return (
    <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Experience</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
          {data?.frontend_skills?.map((item,index) => (
            <article key={index}>
                      <img
                src={item.src}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>{item.skill}</h3>
                <p>{item.experience}</p>
              </div>
            </article>  
            ))
            }
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Backend Development</h2>
          <div className="article-container">
          {data?.backend_skills?.map((item,index) => (
            <article key={index}>
                      <img
                src={item.src}
                alt="Experience icon"
                className="icon"
              />
              <div>
                <h3>{item.skill}</h3>
                <p>{item.experience}</p>
              </div>
            </article>  
            ))
            }
          </div>
        </div>
      </div>
    </div>
    <img
      src="./img/arrow.png"
      alt="Arrow icon"
      className="icon arrow"
      onClick={() => {"location.href='./#projects'"}}
    />
  </section>  )
}

export default MySkills