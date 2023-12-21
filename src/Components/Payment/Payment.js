// Payment.js
import React, { useState } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import './Payment.css';

const Payment = () => {
  const [billCode, setBillCode] = useState('');

  const handleConfirmPayment = () => {
    // Add logic to handle payment confirmation
    console.log('Payment confirmed for bill code:', billCode);
    // You may want to redirect or perform additional actions after confirmation
  };

  return (
    <div>
      <Navbar />
      <div className="payment-container">
        <h2>Payment</h2>
        <div className="qr-code-section">
          {/* Replace 'your-image-path/qrcode-momo.jpg' with the correct path to your image */}
          <img
            src={require('./qrcodemomo.jpg')}
            alt="Your MoMo QR Code"
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div className="payment-form">
          <label htmlFor="billCode">Enter Bill Code</label>
          <input
            type="text"
            id="billCode"
            name="billCode"
            value={billCode}
            onChange={(e) => setBillCode(e.target.value)}
          />
          <button onClick={handleConfirmPayment}>Confirm Payment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
