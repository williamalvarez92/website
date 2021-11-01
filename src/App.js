import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Opener from './components/Opener'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import GeneralAssembly from './components/GeneralAssembly'
import PersonalProjects from './components/PersonalProjects'
import SmallProjects from './components/SmallProjects'


const App = () => {
  return (
    <>
      <BrowserRouter>
        
        <Route path='/'>
          <Opener />
        </Route>
        <Route path='/home'>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route  path='/projects'>
          <Header />
          <Projects />
          <Footer />
        </Route>
        <Route path='/contact'>
          <Header />
          <Contact />
          <Footer />
        </Route>
        <Route path='/projects/general_assembly'>
          <Header />
          <GeneralAssembly />
          <Footer />
        </Route>
        <Route path='/projects/personal_projects'>
          <Header />
          <PersonalProjects />
          <Footer />
        </Route>
        <Route path='/projects/small_projects'>
          <Header />
          <SmallProjects />
          <Footer />
        </Route>
        
        
      </BrowserRouter>
    </>
  )
}

export default App
