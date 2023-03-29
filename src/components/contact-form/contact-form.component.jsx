import { useState } from "react";
import Button from "../button/button.component";
import { ContactFormContainer } from "./contact-form.styles";
const defaultFormFields = {
  contactName: "",
  email: "",
  message: "",
};
const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { contactName, email, message } = formFields;

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = () => {
    resetFormFields();
    return alert(
      "Thanks for your input. I'll reach out to you as soon as I can"
    );
  };

  const onInvalidHandler = (event) => {
    console.log("asfasdgasdg");
  };

  return (
    <ContactFormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        name="contactName"
        value={contactName}
        onChange={onHandleChange}
        onInvalid={(e) =>
          e.target.setCustomValidity("Sorry, invalid format here")
        }
        required
        placeholder="NAME"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onHandleChange}
        onInvalid={(e) =>
          e.target.setCustomValidity("Sorry, invalid format here")
        }
        required
        placeholder="EMAIL"
      />

      <textarea
        name="message"
        value={message}
        cols="30"
        rows="10"
        onChange={onHandleChange}
        placeholder="MESSAGE"
      ></textarea>
      <Button type="submit">Send Message</Button>
    </ContactFormContainer>
  );
};

export default ContactForm;
