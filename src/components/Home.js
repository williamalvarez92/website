import React from 'react'
import img from '../Images/photo.jpg'

const Home = () => {
  return (
    <div className='container pb-4 home'>
      <div className='m-5 d-flex justify-content-center '>
        <div className='container '>
          <h3 className='mt-5 text-center'>Hi! <span className='emoji'>👋</span></h3>
          <h3 className='m-2 text-center'>I&apos;m <span>William Alvarez</span></h3>
          <h3 className='m-1 text-center'>your friendly neighbourhood full stack developer</h3>
        </div>
        <img src={img} className='photo'/>
      </div>
      <div className='m-4 text-center'><h4>Who is this guy?</h4></div>
      <div className='container story d-flex justify-content-around'>
        <div><h5 className='text-center'>An &quot;all in one&quot; full stack developer based in beautiful London in the UK. William can bring to life any virtual dream.</h5></div>
        <div><h5 className='text-center'>An amateur rower who is also a gamer. Loves to travel and discover new experiences every single day.</h5></div>
      </div>
      <div className='container m-4 p-3'>
        <h4 className='text-center m-3'>He is confident using:  </h4>
        <div className="container grid row">
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
  )
}

export default Home