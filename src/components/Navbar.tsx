
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeDropdown}>
          Cube Construction
        </Link>
        
        <div className="navbar-menu">
          <div className="navbar-item dropdown">
            <button 
              onClick={() => toggleDropdown('projects')}
              className="navbar-link dropdown-toggle"
            >
              Projects
            </button>
            {activeDropdown === 'projects' && (
              <div className="dropdown-menu">
                <Link to="/projects" onClick={closeDropdown}>Greenfield</Link>
                <Link to="/projects" onClick={closeDropdown}>Wave</Link>
                <Link to="/projects" onClick={closeDropdown}>Park Lane</Link>
                <Link to="/projects" onClick={closeDropdown}>Trophy</Link>
              </div>
            )}
          </div>

          <div className="navbar-item dropdown">
            <button 
              onClick={() => toggleDropdown('ecosystem')}
              className="navbar-link dropdown-toggle"
            >
              Ecosystem
            </button>
            {activeDropdown === 'ecosystem' && (
              <div className="dropdown-menu">
                <Link to="/ecosystem" onClick={closeDropdown}>Properties</Link>
                <Link to="/ecosystem" onClick={closeDropdown}>Interiors</Link>
                <Link to="/ecosystem" onClick={closeDropdown}>Furniture</Link>
                <Link to="/ecosystem" onClick={closeDropdown}>Investments</Link>
                <Link to="/ecosystem" onClick={closeDropdown}>Institute</Link>
                <span className="coming-soon">Tech (Coming Soon)</span>
              </div>
            )}
          </div>

          <div className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={closeDropdown}>
              About Us
            </Link>
          </div>

          <div className="navbar-item dropdown">
            <button 
              onClick={() => toggleDropdown('join')}
              className="navbar-link dropdown-toggle"
            >
              Join Us
            </button>
            {activeDropdown === 'join' && (
              <div className="dropdown-menu">
                <Link to="/join" onClick={closeDropdown}>Explore Career</Link>
                <Link to="/join" onClick={closeDropdown}>Propose a Land</Link>
                <Link to="/join" onClick={closeDropdown}>Propose a Project</Link>
                <Link to="/join" onClick={closeDropdown}>Invest with Us</Link>
                <Link to="/join" onClick={closeDropdown}>Channel Partner</Link>
                <Link to="/join" onClick={closeDropdown}>Vendors & Consultants</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
