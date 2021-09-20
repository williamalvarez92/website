import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Images/coder1.png'

const Header = () => {
  return (
    <>
      <nav className="navbar-bar  navbar-expand-lg d-flex justify-content-around bg-dark bg-gradient">
      
        <div className=' m-1 navbar-brand text-white'>
          <Link to='/'><img src={img} />
          </Link></div>
        <div className=' m-2 navbar-brand text-white'>
          <Link to='/home'>Home
          </Link></div>
        <div className=' m-2 navbar-brand text-white'>
          <Link to='/projects'>Projects
          </Link></div>
        <div className=' m-2 navbar-brand text-white'>
          <Link to='/contact'>Contact me
          </Link></div>
      </nav>
    </>
  )
}

export default Header