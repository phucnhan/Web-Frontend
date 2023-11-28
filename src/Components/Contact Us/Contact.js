// Contact.js

import React, { useState } from 'react';
import './Contact.css';

class Contact extends React.Component {
  render() {
    const ContactUs = () => {
      const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        orderNumber: '',
        customerNote: '',
        spamProtection: '',
      });

      const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission, e.g., send data to a server
        console.log('Form submitted with data:', formData);
        // Reset the form after submission
        setFormData({
          customerName: '',
          customerEmail: '',
          customerPhone: '',
          orderNumber: '',
          customerNote: '',
          spamProtection: '',
        });
      };

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      return (
        <div className="contact-frame">
          <h2>Contact Us</h2>
          <div className="contact-us">
            <form action="#" onSubmit={handleSubmit}>
              <label htmlFor="customerName">
                NAME
                <em>&#x2a;</em>
              </label>
              <input
                className='contact-input'
                type="text"
                id="customerName"
                name="customerName"
                required=""
                onChange={handleChange}
                value={formData.customerName}
              />

              <label htmlFor="customerEmail">
                EMAIL
                <em>&#x2a;</em>
              </label>
              <input
                type="email"
                id="customerEmail"
                name="customerEmail"
                required=""
                onChange={handleChange}
                value={formData.customerEmail}
              />

              <label htmlFor="customerPhone">PHONE</label>
              <input
                type="tel"
                id="customerPhone"
                name="customerPhone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={handleChange}
                value={formData.customerPhone}
              />

              <label htmlFor="orderNumber">ORDER NUMBER</label>
              <input
                type="text"
                id="orderNumber"
                name="orderNumber"
                onChange={handleChange}
                value={formData.orderNumber}
              />

              <label htmlFor="customerNote">
                YOUR MESSAGE
                <em>&#x2a;</em>
              </label>
              <textarea
                rows="4"
                id="customerNote"
                name="customerNote"
                required=""
                onChange={handleChange}
                value={formData.customerNote}
              ></textarea>

              <h3>Please provide all the information about your issue you can.</h3>

              <label htmlFor="spamProtection">
                SPAM PROTECTION
                <em>&#x2a;</em>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;What day comes before July 11th?</span>
              </label>
              <input 
                type="text"
                id="spamProtection"
                name="spamProtection"
                onChange={handleChange}
                value={formData.spamProtection}
              />

  
            </form>
            <button type="submit" id="customerOrder">
                SUBMIT
              </button>
          </div>
        </div>
      );
    };

    return <ContactUs />;
  }
}

export default Contact;
