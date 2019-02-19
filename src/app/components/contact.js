import React, {Component} from 'react';
import '../style/contact.scss';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1>Contact Us</h1>
        <form
          className="email-form"
          action="mailto:kjtobe@yahoo.com?subject=Message from toben-drainage.com"
          method="post"
          encType="text/plain"
        >
          <span>Name:</span>
          <input type="text" name="name" />
          <span>E-mail:</span>
          <input type="text" name="mail" />
          <span>Message:</span>
          <textarea name="comment" />
          <button type="submit">Send Email</button>
        </form>
      </div>
    );
  }
}

export default Contact;
