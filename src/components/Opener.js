import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Images/logo.png'

const Opener = () => {
  return (
    <>
      <div className='container p-5 opener'>
        <div className='text-center mt-5'>
          <img src={img}/><br/>
          <Link to='/website/home'><button className='btn-dark btn'>
            ENTER
          </button></Link>
        </div>

      </div>
    </>
  )
}

export default Opener 