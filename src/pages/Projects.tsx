
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Greenfield',
      location: 'Shantigram',
      tags: ['3BHK', 'Penthouse'],
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Wave',
      location: 'Vaishnodevi',
      tags: ['Offices', 'Showrooms'],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Park Lane',
      location: 'Central District',
      tags: ['Residential', 'Commercial'],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Trophy',
      location: 'Gift City',
      tags: ['Offices'],
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Skyline Heights',
      location: 'Business District',
      tags: ['Luxury', 'Penthouse'],
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Urban Plaza',
      location: 'City Center',
      tags: ['Mixed Use', 'Retail'],
      image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h1>Our Projects</h1>
          <p>Discover our portfolio of exceptional construction and real estate projects</p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.name} />
              <div className="project-info">
                <h3>{project.name}</h3>
                <p className="location">{project.location}</p>
                <div className="tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
