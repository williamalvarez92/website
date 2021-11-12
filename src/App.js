import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/main'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/'>
          <Header />
          <Main />
        </Route> 
      </BrowserRouter>
    </>
  )
}

export default App
