import React from 'react'
// import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="navbar navbar-expand fixed-top justify-content-center navbar-dark bg-dark">
      <div className='header'>
        <ul>
          <li className="one"><a href="#">HOME</a></li>
          <li className="two"><a href="#">ABOUT ME</a></li>
          <li className="three"><a href="#">PROJECTS</a></li>
          <li className="four"><a href="#">CONTACT</a></li>
          <p className='underline'></p>
        </ul>
      </div>
    </nav> 
  )
}

export default Header

