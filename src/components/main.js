import React from 'react'
import profilePic from '../Images/photo.jpg'
// import { Link } from 'react-router-dom'
// import Carousel from 'react-bootstrap/Carousel'
// import closed from '../Images/folder.png'
// import open from '../Images/folder_open.png'
import img from '../Images/space.png'
// import tube from '../Images/tube3.jpeg'
// import cat from '../Images/cat.jpeg'

const Main = () => {

  // function over(e) {
  //   e.currentTarget.src = open 
  // }
  // function out(e) {
  //   e.currentTarget.src = closed 
  // }

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
  
    this.el.innerHTML = '<span>' + this.txt + '</span>'
  
    var that = this
    var delta = 300 - Math.random() * 100
  
    if (this.isDeleting) {
      delta /= 2 
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }
  
    setTimeout(function() {
      that.tick()
    }, delta)
  }
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate')
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate')
      var period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period)
      }
    }
  }



  return (
    <div >
      <div className="star">
      </div>
      <div className='hugebox'> 
        EMPTY
      </div>
      <div id='thisone'>

        <div className=' pb-4 home'>
          <div className='m-5 d-flex justify-content-center '>
            <div className=' '>       
              <h1> &gt; Hello, 
                <span
                  className="txt-rotate"
                  data-period="2000"
                  data-rotate='[ " world_", " stranger_", " friend_" ]'></span>
              </h1>
              <h3 className='m-2 text-center'>I&apos;m <span>William Alvarez</span></h3>
              <h3 className='m-1 text-center'>your friendly neighbourhood full stack developer</h3>
            </div>
            {/* <img src={profilePic} className='photo'/> */}
          </div>
          <div className='m-4 text-center'><h4>Who is this guy?</h4></div>
          <div className=' story d-flex justify-content-around'>
            <div><h5 className='text-center'>An &quot;all in one&quot; full stack developer based in beautiful London in the UK. William can bring to life any virtual dream.</h5></div>
            <div><h5 className='text-center'>An amateur rower who is also a gamer. Loves to travel and discover new experiences every single day.</h5></div>
          </div>
          <div className=' m-4 p-3'>
            <h4 className='text-center m-3'>He is confident using:  </h4>
            <div className=" grid row">
              <div>
                <div className="">HTML</div>
                <div className="progress">
                  <div className="progress-bar w-75 progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>           
              </div>
              <div>
                <div className="">CSS</div>
                <div className="progress">
                  <div className="progress-bar w-75 progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>           
              </div>
              <div>
                <div className="">React.js</div>
                <div className="progress">
                  <div className="progress-bar w-75 progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>           
              </div>
              <div>
                <div className="">Node.js</div>
                <div className="progress">
                  <div className="progress-bar w-50 progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="50" aria-valuemax="100">50%</div>
                </div>           
              </div>
              <div>
                <div className="">Django</div>
                <div className="progress">
                  <div className="progress-bar w-50 progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="50" aria-valuemax="100">50%</div>
                </div>           
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className='projecthome text-center'>Projects</h1>
      <div className='d-flex justify-content-center mt-4'>
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
            <a rel='noreferrer' target='_blank' href='https://williamalvarez92.github.io/Cat-app/'>
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
        <div className='grid- d-flex justify-content-around '>
          <Link to='/projects/general_assembly'>
            <div className='text-center grid-item'>
              <img src={closed} onMouseOut={out} onMouseOver={over}/>
              <p className='text-center'>General Assembly</p>
            </div>
          </Link>
          <Link to='/projects/personal_projects'>
            <div className='text-center grid-item'>
              <img src={closed} onMouseOut={out} onMouseOver={over}/>
              <p className='text-center'>Personal Projects</p>
            </div>
          </Link>
          <Link to='/projects/small_projects'>
            <div className='text-center grid-item'>
              <img src={closed} onMouseOut={out} onMouseOver={over}/>
              <p className='text-center'>Small Projects</p>
            </div>
          </Link>
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default Main