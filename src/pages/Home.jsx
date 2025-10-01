
import React from 'react'
import { Navbar } from '../Components/Navbar'
import StarBackground from '../Components/StarBackground'
import ThemeToggle from '../Components/ThemeToggle'
import HeroSection from '../Components/HeroSection'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
     
      <ThemeToggle/>
      <StarBackground/>
      <Navbar/>
     <main>
       <HeroSection/>
       <AboutMe/>
       <Skills/>
       <Project/>
       <Contact/>
     </main>
     <Footer/>
    </div>
  )
}

export default Home


















// import React from 'react'
// import ThemeToggle from '../Components/ThemeToggle'
// import StarBackground from '../Components/StarBackground'
// import Navbar from '../Components/Navbar'

// const Home = () => {
//   return (

//     <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
//      <ThemeToggle/>
//      <StarBackground/>
//      <Navbar/>

     
//     </div>
//   )
// }

// export default Home