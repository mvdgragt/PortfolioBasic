import HeroSection from "../HeroSection";

import React from 'react'
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

function Home() {
  return (
<>
<HeroSection />
<AboutMe />

<MySkills />
<MyPortfolio />
<ContactMe />
<Footer />
</>  )
}

export default Home