import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Opener from './components/Opener'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact.'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route to='/'>
          <Opener />
        </Route>
        <Route to='/home'>
          <Home />
        </Route>
        <Route to='/projects'>
          <Projects />
        </Route>
        <Route to='/contact'>
          <Contact />
        </Route>
        <Route>
      
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
