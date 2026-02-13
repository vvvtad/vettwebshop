import React from 'react';

const Product = () => {
  const items = [
    { id: 1, name: "Telescope Powerseeker 80EQ", price: 9.99, img: "prod1.jpg", cat: "tele" },
    { id: 2, name: "CGX Computerized Mount", price: 9.99, img: "prod2.jpg", cat: "mounts" },
    { id: 3, name: "Nexguide Autoguider", price: 9.99, img: "prod3.jpg", cat: "access" },
  ];

  return (
    <div className="productcontainer">
      {['tele', 'mounts', 'access'].map(cat => (
        <section className={cat} id={cat} key={cat}>
          <h1>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h1>
          <div className="productgrid">
            {items.filter(i => i.cat === cat).map(item => (
              <div className="product" key={item.id}>
                <img src={item.img} alt={item.name} />
                <h2>{item.name}</h2>
                <h2>PHP {item.price}</h2>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Product;