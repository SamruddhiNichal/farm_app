import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing">
      <h2>Pricing</h2>
      <div className="pricing-grid">
        <div className="animal">
          <img src="buffalo.jpg" alt="Buffalo" />
          <h3>Buffalo</h3>
          <p>Price: $1000</p>
        </div>
        <div className="animal">
          <img src="goat.jpg" alt="Goat" />
          <h3>Goat</h3>
          <p>Price: $500</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
