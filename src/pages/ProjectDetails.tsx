
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectId } = useParams();

  // Sample project data - in a real app this would come from an API
  const projectsData = {
    '1': {
      id: 1,
      name: 'Greenfield',
      location: 'Shantigram',
      city: 'Ahmedabad',
      tags: ['3BHK', 'Penthouse'],
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop',
      landArea: '15 Acres',
      totalUnits: 450,
      priceRange: '₹85 Lakhs - ₹2.5 Crores',
      completionDate: 'December 2025',
      amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Children\'s Play Area', 'Landscaped Gardens', '24/7 Security'],
      description: 'Greenfield is a premium residential project located in the heart of Shantigram. Designed with modern architecture and sustainable living in mind, this project offers spacious 3BHK apartments and luxurious penthouses with world-class amenities.',
      highlights: [
        'RERA Approved Project',
        'Vastu Compliant Design',
        'Earthquake Resistant Structure',
        'Rainwater Harvesting System',
        'Solar Power Integration'
      ],
      floorPlans: [
        { type: '3BHK', area: '1,250 sq ft', price: '₹85 Lakhs' },
        { type: '3BHK Premium', area: '1,450 sq ft', price: '₹1.2 Crores' },
        { type: 'Penthouse', area: '2,200 sq ft', price: '₹2.5 Crores' }
      ]
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="project-details-page">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/projects" className="back-link">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <div className="container">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        
        <div className="project-header">
          <div className="project-image-container">
            <img src={project.image} alt={project.name} className="project-main-image" />
          </div>
          <div className="project-basic-info">
            <h1>{project.name}</h1>
            <p className="project-location">{project.location}, {project.city}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-price">
              <h3>Price Range: {project.priceRange}</h3>
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="project-description">
            <h2>About the Project</h2>
            <p>{project.description}</p>
          </div>

          <div className="project-details-grid">
            <div className="project-info-card">
              <h3>Project Information</h3>
              <div className="info-item">
                <span className="info-label">Land Area:</span>
                <span className="info-value">{project.landArea}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Total Units:</span>
                <span className="info-value">{project.totalUnits}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Completion Date:</span>
                <span className="info-value">{project.completionDate}</span>
              </div>
            </div>

            <div className="project-info-card">
              <h3>Project Highlights</h3>
              <ul className="highlights-list">
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="amenities-section">
            <h3>Amenities</h3>
            <div className="amenities-grid">
              {project.amenities.map((amenity, index) => (
                <div key={index} className="amenity-item">{amenity}</div>
              ))}
            </div>
          </div>

          <div className="floor-plans-section">
            <h3>Floor Plans & Pricing</h3>
            <div className="floor-plans-grid">
              {project.floorPlans.map((plan, index) => (
                <div key={index} className="floor-plan-card">
                  <h4>{plan.type}</h4>
                  <p className="plan-area">{plan.area}</p>
                  <p className="plan-price">{plan.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <h3>Interested in this project?</h3>
            <p>Contact our sales team for more information and site visits.</p>
            <button className="contact-button">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
