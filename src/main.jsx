import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Banner/>
    <Skill/>
    <Projects/>
    <About/>
    <Contact/>
  </React.StrictMode>,
)
