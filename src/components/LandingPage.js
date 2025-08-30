import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <h1 className="company-name">Plantify</h1>
        <p className="company-description">
          Welcome to Plantify, your premier destination for beautiful houseplants that transform your living space into a green oasis. We specialize in providing high-quality, healthy plants that bring life, beauty, and fresh air to your home. From low-maintenance succulents to vibrant flowering plants, we have everything you need to create your perfect indoor garden. Our carefully curated collection ensures that every plant lover, from beginners to experts, can find their ideal green companion.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
