import React from 'react'
import { StyledForm } from './style';
const Form = () => {
  return (

      <StyledForm>
        <div className="title">Contact us</div>
        <input className="input" type="text" placeholder="full name" />
        <input className="input" type="text" placeholder="email address" />
        <input className="input" type="text" placeholder="subject" />
        <input className="input-message" type="text" placeholder="message" />
        <button className="button">Send</button>
      </StyledForm>

  );
}
export default Form;