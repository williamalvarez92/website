import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Images/coder1.png'

const Header = () => {
  return (
    <div className='container-fluid p-0'>
      <nav className="navbar-bar nav d-flex justify-content-around bg-dark bg-gradient">
        <div className='  navbar-brand text-white'>
          <Link to='/'><img src={img} />
          </Link></div>
        <div className=' m-2 navbar-item text-white'>
          <Link to='/home'>Home
          </Link></div>
        <div className=' m-2 navbar-item text-white'>
          <Link to='/projects'>Projects
          </Link></div>
        <div className=' m-2 navbar-item text-white'>
          <Link to='/contact'>Contact me
          </Link></div>
      </nav>
    </div>
  )
}

export default Header