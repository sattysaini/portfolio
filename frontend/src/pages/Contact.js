import React from 'react';
import ContactItem from '../components/ContactItem';
import './Contact.css';

function Contact() {

  return (
    <section id="contact">
        {/*<h2 className="common-section-title">CONTACT INFO</h2>*/}

        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-info">
              <ContactItem 
                iconName="email"
                href="mailto:stym.6996@gmail.com" 
                text="stym.6996@gmail.com" 
              />
              <ContactItem 
                iconName="phone"
                href="tel:+919810910924"
                text="+91-9810910924 / +91-9315873013"
              />
            </div>
          </div>
        </section>
    </section>
  );
}

export default Contact;