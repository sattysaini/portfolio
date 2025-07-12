import React from 'react';
import Icon from './Icon';
import './ContactItem.css';

function ContactItem({ iconName, href, text }) {
  return (
    <div className="contact-item">
      <div className="contact-icon">
        <Icon name={iconName} size={20} />
      </div>
      <div className="contact-details">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </div>
    </div>
  );
}

export default ContactItem;