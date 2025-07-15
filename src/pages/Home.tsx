
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop" 
            alt="Modern Buildings"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Designing the Future.<br />
            Building with Purpose.
          </h1>
          <p className="hero-subtitle">
            Your journey begins the moment we lay the foundation.
          </p>
          <Link to="/about" className="hero-button">
            Explore More
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="about-preview">
        <div className="container">
          <h2>We don't just construct buildings. We shape experiences.</h2>
          <p>Every project is a system, serving people. Our mission is to create spaces that redefine how communities live, work, and grow.</p>
          <Link to="/about" className="learn-more-btn">Learn More About Us</Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop" alt="Greenfield Project" />
              <h3>Greenfield</h3>
              <p>Shantigram</p>
              <div className="tags">
                <span>3BHK</span>
                <span>Penthouse</span>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop" alt="Wave Project" />
              <h3>Wave</h3>
              <p>Vaishnodevi</p>
              <div className="tags">
                <span>Offices</span>
                <span>Showrooms</span>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop" alt="Trophy Project" />
              <h3>Trophy</h3>
              <p>Gift City</p>
              <div className="tags">
                <span>Offices</span>
              </div>
            </div>
          </div>
          <Link to="/projects" className="view-all-btn">View All Projects</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
