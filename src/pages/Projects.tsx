
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const projects = [
    {
      id: 1,
      name: 'Greenfield',
      location: 'Shantigram',
      city: 'Ahmedabad',
      tags: ['3BHK', 'Penthouse'],
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop',
      priceRange: '85L-2.5Cr',
      type: 'Residential'
    },
    {
      id: 2,
      name: 'Wave',
      location: 'Vaishnodevi',
      city: 'Surat',
      tags: ['Offices', 'Showrooms'],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop',
      priceRange: '50L-1.5Cr',
      type: 'Commercial'
    },
    {
      id: 3,
      name: 'Park Lane',
      location: 'Central District',
      city: 'Mumbai',
      tags: ['Residential', 'Commercial'],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop',
      priceRange: '1Cr-5Cr',
      type: 'Mixed Use'
    },
    {
      id: 4,
      name: 'Trophy',
      location: 'Gift City',
      city: 'Gandhinagar',
      tags: ['Offices'],
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=400&h=300&fit=crop',
      priceRange: '75L-2Cr',
      type: 'Commercial'
    },
    {
      id: 5,
      name: 'Skyline Heights',
      location: 'Business District',
      city: 'Pune',
      tags: ['Luxury', 'Penthouse'],
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop',
      priceRange: '1.5Cr-8Cr',
      type: 'Residential'
    },
    {
      id: 6,
      name: 'Urban Plaza',
      location: 'City Center',
      city: 'Bangalore',
      tags: ['Mixed Use', 'Retail'],
      image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop',
      priceRange: '60L-3Cr',
      type: 'Mixed Use'
    }
  ];

  // Filter projects based on search and filter criteria
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = !selectedCity || project.city === selectedCity;
    const matchesType = !selectedType || project.type === selectedType;
    const matchesPriceRange = !priceRange || project.priceRange.includes(priceRange);
    
    return matchesSearch && matchesCity && matchesType && matchesPriceRange;
  });

  const cities = [...new Set(projects.map(p => p.city))];
  const types = [...new Set(projects.map(p => p.type))];

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSelectedType('');
    setPriceRange('');
  };

  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h1>Our Projects</h1>
          <p>Discover our portfolio of exceptional construction and real estate projects</p>
        </div>

        <div className="projects-filters">
          <div className="search-section">
            <input
              type="text"
              placeholder="Search projects by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters-section">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="filter-select"
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="filter-select"
            >
              <option value="">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="filter-select"
            >
              <option value="">All Price Ranges</option>
              <option value="50L">50L - 1Cr</option>
              <option value="1Cr">1Cr - 3Cr</option>
              <option value="3Cr">3Cr+</option>
            </select>

            <button onClick={clearFilters} className="clear-filters-btn">
              Clear Filters
            </button>
          </div>
        </div>

        <div className="projects-results">
          <p className="results-count">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <Link to={`/projects/${project.id}`} className="project-link">
                <img src={project.image} alt={project.name} />
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p className="location">{project.location}, {project.city}</p>
                  <p className="price-range">Price: ₹{project.priceRange}</p>
                  <p className="project-type">Type: {project.type}</p>
                  <div className="tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results">
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
