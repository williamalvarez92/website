import React from 'react'
import { Image } from 'react-bootstrap'
import closed from '../Images/folder.png'
import open from '../Images/folder_open.png'


const Projects = () => {
  return (
  
    <div className=' projectFolder container  d-flex justify-content-between p-5'>
      <div className='grid-container  m-5 text-center text-dark'>
        <Image className="social-icon mg" src = { closed }
          onMouseOver={e => e.currentTarget.src = { open }}
          onMouseOut={e => e.currentTarget.src = { closed }} 
        />
        <p className='text-center'><a href=''>Personal Projects</a></p>
      </div>
      <div className='grid-container m-5 text-center text-dark'>
        <Image className="social-icon mg" src = { closed }
          onMouseOver={e => e.currentTarget.src = { open }}
          onMouseOut={e => e.currentTarget.src = { closed }} 
        />
        <p className='text-center'><a href=''>General Assembly</a></p>
      </div>
      <div className='grid-container m-5 text-center text-dark'>
        <img title='Made by https://www.freepik.com' src={closed} className='grid-item img-btm text-center'/>
        <img title='Made by https://www.freepik.com' src={open} className='grid-item img-top text-center'/>
        <p className='text-center'><a href=''>Small Projects</a></p>
      </div>
    </div>
  )
}

export default Projects