import React from 'react'
//import {Helmet} from "react-helmet";

class ContactForm extends React.Component {

  render() {
    const formStyle = {
      textAlign: 'left',
      marginLeft: '30px',
    }
    const buttonsStyle = {
      margin: '1rem',
      listStyleType: 'none',
    }
    const inputStyle = {
      margin: '2px',
    }
    return (

      <form style={formStyle} className="form" action={this.props.action} method="post">
      <div className="formRow">
          <label>Full name</label>
          <input style={inputStyle} type="text" name="fullname"/></div>
      <div className="formRow">
          <label>Email</label>
          <input style={inputStyle} type="email" name="email"/></div>
      <div className="formRow">
          <label>Message</label>
          <textarea style={inputStyle} name="message" rows="5" cols="30"></textarea></div>
      <div className="submitRow">
            <ul className="actions" style={buttonsStyle}>
            <li>
              <button type="submit" className="button special">Send</button>
            </li>
        </ul>
          <input type="hidden" id="captchaResponse" name="g-recaptcha-response">
            </div>
      </form>
    );
  }
}

export default ContactForm
