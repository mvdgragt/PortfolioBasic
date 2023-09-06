import React from 'react'

function ContactMe() {
  return (
<section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./img/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:michiel@vandergragt.eu">michiel@vandergragt.eu</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src="./img/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/michielvandergragt/">LinkedIn</a></p>
        </div>
      </div>
    </section>  )
}

export default ContactMe