import React from 'react'
import img from '../Images/coder1.png'

const Home = () => {
  return (
    <div className='mt-5 container home'>
      <div className=' d-flex justify-content-center '>
        <div className=''>
          <h2>Willliam Alvarez</h2>
          <p className='text-center'>🏠 London, UK</p>
          <p className='text-center'>💻 Software Developer</p>
          <p className='text-center ball'></p>
        </div>
        <img src={img} className='m-3 w-25 h-25'/>
      </div>
      <div className='m-5 text-center'>Bottom stuff here</div>
    </div>
  )
}

export default Home