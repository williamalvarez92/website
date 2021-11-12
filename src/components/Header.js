import React from 'react'
// import { Link } from 'react-router-dom'


const Header = () => {

  const mybutton = document.getElementById('myBtn')
  window.onscroll = function() {
    scrollFunction()
  }

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'block'
    } else {
      mybutton.style.display = 'none'
    }
  }  
  return (
    <>
      <nav className="navbar navbar-expand justify-content-center navbar-dark bg-none">
        <div className='header'>
          <ul>
            <li className="one"><a href="#home">HOME</a></li>
            <li className="two"><a href="#about">ABOUT</a></li>
            <li className="three"><a href="#projects">PROJECTS</a></li>
            <li className="four"><a href="#contact">CONTACT</a></li>
            <p className='underline'></p>
          </ul>
        </div>
      </nav> 
    </>
  )
}

export default Header

