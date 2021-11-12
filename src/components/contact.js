import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
function ContactForm() {
  const [state, handleSubmit] = useForm('xbjqnlow')
  if (state.succeeded) {
    return <p>Thank you for message!</p>
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='insection text-dark'>
        <label className='text-white' htmlFor="email">
        Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="formemail"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <br/>
        <label className='text-white'>
          Message</label>
        <textarea
          id="message"
          name="message"
          className="formtext"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <br/>
        <div className="g-recaptcha" data-sitekey="6Lc2vi0dAAAAABi2XG4K40LBQMtXAvYccduL-t0z"></div>
        <button type="submit" disabled={state.submitting} className="btn m-3 btn-primary">
        Send
        </button>
      </form>
    </>
  )
}

export default ContactForm