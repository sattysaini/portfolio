import React, { useState } from 'react';
import Icon from '../components/Icon';
import Navbar from '../components/Navbar';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">

      <main className="main-content">
        <section className="contact-hero">
          <h1 className="page-title">GET IN TOUCH</h1>
          <p className="page-description">Let's discuss opportunities, collaborations, or just connect</p>
        </section>

        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">CONTACT INFO</h2>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="email" size={24} />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:stym.6996@gmail.com">stym.6996@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="phone" size={24} />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href="tel:+919810910924">+91-9810910924</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="linkedin" size={24} />
                </div>
                <div className="contact-details">
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/satyam--saini/" target="_blank" rel="noopener noreferrer">
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="github" size={24} />
                </div>
                <div className="contact-details">
                  <h3>GitHub</h3>
                  <a href="https://github.com/sattysaini" target="_blank" rel="noopener noreferrer">
                    View my projects
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2 className="section-title">SEND MESSAGE</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-message">
          <div className="message-card">
            <p>I'm always interested in discussing new opportunities, collaborations, or just connecting with fellow developers. Feel free to reach out!</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;