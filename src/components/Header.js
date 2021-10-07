import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg justify-content-center navbar-dark bg-dark">
      <Link to='/website'><div className=' navbar-brand text-white'>
        <h1 className='m-2 navbar-brand text-white'>WA</h1>
      </div></Link>
      <div className='container navi justify-content-end'>
        <Link to='/website/home'><div className=' m-3 navbar-item text-white'>
          Home
        </div></Link>
        <Link to='/website/projects'><div className=' m-3 navbar-item text-white'>
          Projects
        </div></Link>
        <Link to='/website/contact'> <div className=' m-3 navbar-item text-white'>
          Contact me
        </div></Link>
      </div>
    </nav> 
  )
}

export default Header

