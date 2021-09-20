import React from 'react'
import phone from '../Images/phone.png'
import mail from '../Images/email.png'
import social from '../Images/user.png'
import github from '../Images/github.png'

const Contact = () => {
  return (
    <>
      <h1 className='text-center m-5'>Dont be shy and let&apos;s talk!</h1>
      <div className='container boxes d-flex justify-content-between p-5'>
        <div className='grid-container p-5 text-center text-white bg-dark'>
          <img title='Made by https://www.freepik.com' src={phone} className='grid-item text-center mb-5'/>
          <p className='text-center p-1'></p>
          <a>07 459 526 933</a>
        </div>
        <div className='grid-container text-center p-5 text-white bg-dark'>
          <img title='Made by https://www.freepik.com' src={mail} className='grid-item text-center mb-5'/>
          <p className='text-center'></p>
          <a className="btn btn-secondary text-white" href="mailto: williamalvarez672@gmail.com" role="button">Email me</a>
        </div>
        <div className='grid-container text-center p-5 text-white bg-dark'>
          <img title='Made by https://www.freepik.com' src={social} className='grid-item text-center mb-5'/>
          <p className='text-center'></p>
          <a className="btn btn-secondary text-white" target='blank' rel="opener" href="https://www.linkedin.com/in/williamalvarez92/" role="button">Follow me</a>
        </div>
        <div className='grid-container text-center p-5 text-white bg-dark'>
          <img title='Made by https://www.freepik.com' src={github} className='grid-item text-center mb-5'/>
          <p className='text-center'></p>
          <a className="btn btn-secondary text-white" target='blank' rel="opener" href="https://github.com/williamalvarez92" role="button">Github me</a>
        </div>
      </div>
    </>
  )
}

export default Contact