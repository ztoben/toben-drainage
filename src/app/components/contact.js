import React, {Component} from 'react';
import '../style/contact.scss';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="content-container">
          <h1>Contact Us</h1>
          <div className="content">
            <div className="phone-container">
              <p>
                For quotes and estimates please give Kevin a call at{' '}
                <a href="tel:3192692412">(319) 269-2412</a>. You can also find us on{' '}
                <a href="https://www.facebook.com/tobendrainage">Facebook</a>!
              </p>
              <p>
                Alternatively, you can use the email form provided and we'll get back to you as soon
                as we can.
              </p>
            </div>
            <div className="email-container">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
