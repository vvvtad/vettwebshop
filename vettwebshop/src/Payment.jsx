import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/transaction');
  };

  return (
    <div className="contactcontainer">
      <section className="paymentform">
        <h2>Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <label>Choose a payment method: </label>
          <select required>
            <option value="PayPal">PayPal</option>
            <option value="Gcash">Gcash</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
          </select><br />

          <label htmlFor="cardnumber">Card Number:</label><br />
          <input type="number" id="cardnumber" required /><br />

          <label htmlFor="expdate">Expiration Date:</label><br />
          <input type="date" id="expdate" required /><br />

          <label htmlFor="code">Security Code:</label><br />
          <input type="number" id="code" required /><br />

          <input type="submit" className="submitbutton" value="Submit Payment" />
        </form>
      </section>
    </div>
  );
};

export default Payment;