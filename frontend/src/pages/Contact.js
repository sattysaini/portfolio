import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <div className="contact-item">
          <h3>📧 Email</h3>
          <p><a href="mailto:stym.6996@gmail.com">stym.6996@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <h3>📱 Phone</h3>
          <p><a href="tel:+919810910924">+91-9810910924</a></p>
        </div>
        <div className="contact-item">
          <h3>🔗 LinkedIn</h3>
          <p>Connect with me on LinkedIn for professional networking</p>
        </div>
      </div>
      <div className="contact-message">
        <p>I'm always interested in discussing new opportunities, collaborations, or just connecting with fellow developers. Feel free to reach out!</p>
      </div>
    </div>
  );
}

export default Contact;