
import { useState } from 'react'
import Button from '../button/button.component'
const defaultFormFields = {
    contactName:"",
    email:"",
    message:"",
}
const ContactForm = () => {
const [formFields, setFormFields] = useState(defaultFormFields)
const {contactName, email ,message} = formFields

const onHandleChange = (event) => {
 const {name, value } = event.target
 setFormFields({...formFields, [name]: value})
}

const resetFormFields = () => setFormFields(defaultFormFields)

const handleSubmit = () => {
            resetFormFields()
            return alert("Thanks for your input. I'll reach out to you as soon as I can")
            
  


}


  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="contactName" value={contactName} onChange={onHandleChange} required/>
        <label htmlFor="">Email</label>
        <input type="email" name="email" value={email} onChange={onHandleChange} required />
        <label htmlFor=''>Message</label>
        <textarea name="message" value={message} cols="30" rows="10" onChange={onHandleChange}></textarea>
        <Button type='submit'>Send Message</Button>
    </form>
  )
}

export default ContactForm