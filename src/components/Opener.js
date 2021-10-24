import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Images/logo.png'

const Opener = () => {
  return (
    <>
      <div className='container opener'>
        <div className='text-center'>
          <img src={img}/><br/>
          <Link to='/home'><button className='btn-dark btn'>
            ENTER
          </button></Link>
        </div>

      </div>
    </>
  )
}

export default Opener 