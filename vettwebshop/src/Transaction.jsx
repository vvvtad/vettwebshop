import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Transaction = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessing(false);
      console.log("Success: Transaction successful!");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 2. Logic from transaction.js: Real-time clock
  useEffect(() => {
    const updateClock = () => {
      const time = new Intl.DateTimeFormat("en-PH", {
        dateStyle: "medium",
        timeStyle: "medium"
      }).format(new Date());
      setCurrentTime(time);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="receipt">
      <Link to="/home">// Back to Home</Link>
      <p id="time" style={{ color: 'var(--text-color)' }}>{currentTime}</p>

      {isProcessing ? (
        <h1 id="status">Processing Transaction...</h1>
      ) : (
        <>
          <h1 className="details">TOTAL RECEIPT</h1>
          <table className="details" style={{ display: 'table' }}>
            <tbody>
              <tr><th>Customer Name:</th><td>Amy Elma</td></tr>
              <tr><th>Invoice:</th><td>INV-001</td></tr>
              <tr><th>Date Issued:</th><td>June 15, 2026</td></tr>
              <tr><th>Payment Method:</th><td>Credit Card</td></tr>
            </tbody>
          </table>

          <table className="details" style={{ display: 'table' }}>
            <thead>
              <tr>
                <th>QTY</th><th>ITEM</th><th>UNIT PRICE</th><th>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Telescope Powerseeker 80EQ</td><td>9.99</td><td>9.99</td></tr>
              <tr><td>2</td><td>Nexguide Autoguider</td><td>9.99</td><td>19.98</td></tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2"></td>
                <th>Total</th><th>29.97</th>
              </tr>
            </tfoot>
          </table>
          <p className="details">Thank you for shopping with Stellarium!</p>
        </>
      )}
    </section>
  );
};

export default Transaction;