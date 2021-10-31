import React from 'react'
import phone from '../Images/phone.png'
import mail from '../Images/email.png'
import social from '../Images/user.png'
import github from '../Images/github.png' 

const Contact = () => {
  return (
    <div className=' maincontact'>
      <h2 className='text-center'>Don&apos;t be shy and let&apos;s talk!</h2>
      <div className='d-flex contact justify-content-around'>
        <div className='boxes p-3 grid-container text-center text-white bg-dark'>
          <img className='grid-item text-center' title='Made by https://www.freepik.com' src={phone}/>
          <p className=' grid-item text-center'></p>
          <a className="grid-item btn btn-secondary text-white" target='blank' rel="opener" href="tel:+4407459526933" role="button">Call me</a>
        </div>
        <div className='boxes p-3 grid-container text-center text-white bg-dark'>
          <img className='grid-item text-center' title='Made by https://www.freepik.com' src={mail}/>
          <p className=' grid-item text-center'></p>
          <a className="grid-item btn btn-secondary text-white" target='blank' rel="opener" href="mailto:williamalvarez672@gmail.com" role="button">Email me</a>
        </div> 
        <div className='boxes p-3 grid-container text-center text-white bg-dark'>
          <img className='grid-item text-center' title='Made by https://www.freepik.com' src={social}/>
          <p className=' grid-item text-center'></p>
          <a className="grid-item btn btn-secondary text-white" target='blank' rel="opener" href="https://www.linkedin.com/in/williamalvarez92" role="button">Follow me</a>
        </div> 
        <div className='boxes p-3 grid-container text-center text-white bg-dark'>
          <img className='grid-item text-center' title='Made by https://www.freepik.com' src={github}/>
          <p className=' grid-item text-center'></p>
          <a className="grid-item btn btn-secondary text-white" target='blank' rel="opener" href="https://github.com/williamalvarez92" role="button">Github me</a>
        </div>  
      </div>
    </div>
  )
}

export default Contact