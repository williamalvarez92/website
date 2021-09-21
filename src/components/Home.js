import React from 'react'
import img from '../Images/coder1.png'

const Home = () => {
  return (
    <>
      <div className='m-5 home container d-flex '>
        <div className='m-5 p-5 justify-content-center'>
          <h2>Willliam Alvarez</h2>
          <p className='text-center'>🏠 London, UK</p>
          <p className='text-center'>💻 Software Developer</p>
          <p className='text-center'>Here other stuff</p>
        
        </div>
        <img src={img} className='m-5 w-25 h-25'/>
      </div>
      <div className='m-5 text-center'>Bottom stuff here</div>
    </>
  )
}

export default Home