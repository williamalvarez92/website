import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Opener from './components/Opener'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Opener />
          </Route>
          <Route exact path='/home'>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route  exact path='/projects'>
            <Header />
            <Projects />
            <Footer />
          </Route>
          <Route exact path='/contact'>
            <Header />
            <Contact />
            <Footer />
          </Route>
        </Switch>
        
      </BrowserRouter>
    </>
  )
}

export default App
