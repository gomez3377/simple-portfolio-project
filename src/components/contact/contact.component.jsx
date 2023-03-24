import React from 'react'
import ContactForm from '../contact-form/contact-form.component'

const Contact = () => {
  return (
    <div>
        <div className='left'>

        <h1>Contact</h1>
        <p>I would love
      to hear about your project and how I could help. Please fill in the form,
      and I’ll get back to you as soon as possible.</p>
        </div>
        <ContactForm/>
    </div>
  )
}

export default Contact