import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import closed from '../Images/folder.png'
import open from '../Images/folder_open.png'
import img from '../Images/space.png'
import tube from '../Images/tube3.jpeg'
import cat from '../Images/cat.jpeg'


const Projects = () => {
  
  function over(e) {
    e.currentTarget.src = open 
  }
  function out(e) {
    e.currentTarget.src = closed 
  }

  return (
    
    <>
      <h1 className='text-center m-5'>Projects</h1>
      <div className='d-flex justify-content-center'>
        <Carousel >
          <Carousel.Item interval={1000}>
            <a rel='noreferrer' target='_blank' href='https://williamalvarez92.github.io/Space-Invaders/'>
              <img
                className="d-block w-100"
                src={img}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>JavaScrip Space Invaders</h3>
                <p>Created the classic with JavaScrip, CSS and HTML.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <a rel='noreferrer' target='_blank' href='https://williamalvarez92.github.io/Tfl-API/'>
              <img
                className="d-block w-100"
                src={tube}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>London Tube API</h3>
                <p>A live Underground Lines status API, using React and Boostrap.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a rel='noreferrer' target='_blank' href='https://catopedia-britannica.netlify.app/'>
              <img
                className="d-block w-100"
                src={cat}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Catopedia</h3>
                <p>The Cat enciclopedia, using a public API, React and Boostrap.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='m-5 projectPage'>
        <h1 className='text-center m-5'>Archives</h1>
        <div className='grid-container d-flex justify-content-around '>
          <Link to='website/projects/general_assembly'>
            <div className='text-center grid-item'>
              <img src={closed} onMouseOut={out} onMouseOver={over}/>
              <p className='text-center'>General Assembly</p>
            </div>
          </Link>
          <Link to='website/projects/personal_projects'>
            <div className='text-center grid-item'>
              <img src={closed} onMouseOut={out} onMouseOver={over}/>
              <p className='text-center'>Personal Projects</p>
            </div>
          </Link>
          <Link to='/website/projects/small_projects'>
            <div className='text-center grid-item'>
              <img src={closed} onMouseOut={out} onMouseOver={over}/>
              <p className='text-center'>Small Projects</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Projects