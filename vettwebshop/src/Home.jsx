import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    { id: 1, name: "Telescope Powerseeker 80EQ", price: "9.99", img: "/prod1.jpg" },
    { id: 2, name: "CGX Computerized Mount", price: "9.99", img: "/prod2.jpg" },
    { id: 3, name: "Nexguide Autoguider", price: "9.99", img: "/prod3.jpg" }
  ];

  return (
    <div className="homecontainer">
      <section className="features">
        <img src="/feat1.jpg" alt="Planetarium Venue" />
        <div className="feattxttop">
          <h2>Get ready to have a STELLAR experience with</h2>
          <h1>Stellarium</h1>
        </div>
        <div className="feattxtbot">
          <h1>ONLY at PHP99</h1>
          <button 
            className="submitbutton" 
            onClick={() => navigate('/payment')}
          >
            BUY NOW
          </button>
        </div>
      </section>

      <section className="products">
        <h1>Featured Products</h1>
        <div className="productgrid">
          {featuredProducts.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <h2>PHP {product.price}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
