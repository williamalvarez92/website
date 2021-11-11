import React from 'react'
// import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="navbar navbar-expand justify-content-center navbar-dark bg-none">
      <div className='header'>
        <ul>
          <li className="one"><a href="#home">HOME</a></li>
          <li className="two"><a href="#about">ABOUT</a></li>
          <li className="three"><a href="#">PROJECTS</a></li>
          <li className="four"><a href="#">CONTACT</a></li>
          <p className='underline'></p>
        </ul>
      </div>
    </nav> 
  )
}

export default Header

