import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = [
    { id: 1, name: "Telescope Powerseeker 80EQ", img: "prod1.jpg" },
    { id: 2, name: "CGX Computerized Mount", img: "prod2.jpg" },
    { id: 3, name: "Nexguide Autoguider", img: "prod3.jpg" }
  ];

  return (
    <div className="homecontainer">
      <section className="products">
        <h1>Shopping Cart</h1>
        <div className="productgrid">
          {cartItems.map(item => (
            <div className="product" key={item.id}>
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
              <h2>Quantity: 1</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="carttotal">
        <h1>TOTAL: PHP 29.97</h1>
        <button className="submitbutton" onClick={() => navigate('/payment')}>
          CHECKOUT
        </button>
      </section>
    </div>
  );
};

export default Cart;