import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Images/coder1.png'

const Opener = () => {
  return (
    <>
      <div className='container opener'>
        <div className='text-center p-5'>
          <h1>Welcome to my website!</h1>
          <p><img src={img}/></p>
          <button className='btn-dark btn-lg'>
            
            <Link to='/home'>ENTER</Link>
          </button>
        </div>

      </div>
    </>
  )
}

export default Opener 