import React from 'react'
import closed from '../Images/folder.png'


const Projects = () => {
  return (
  
    <div className=' projectFolder container  d-flex justify-content-between p-5'>
      <div className='grid-container  m-5 text-center text-dark'>
        <img title='Made by https://www.freepik.com' src={closed} className='grid-item text-center'/>
        <p className='text-center'><a href=''>Personal Projects</a></p>
      </div>
      <div className='grid-container m-5 text-center text-dark'>
        <img title='Made by https://www.freepik.com' src={closed} className='grid-item text-center'/>
        <p className='text-center'><a href=''>General Assembly</a></p>
      </div>
      <div className='grid-container m-5 text-center text-dark'>
        <img title='Made by https://www.freepik.com' src={closed} className='grid-item text-center'/>
        <p className='text-center'><a href=''>Small Projects</a></p>
      </div>
    </div>
  )
}

export default Projects