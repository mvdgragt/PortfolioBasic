import React from 'react'

function ContactMe() {
  return (
<section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="./img/email.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:michiel@vandergragt.eu">michiel@vandergragt.eu</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src="./img/linkedin.png"
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/michielvandergragt/">LinkedIn</a></p>
        </div>
      </div>
    </section>  )
}

export default ContactMe