
import React from 'react';

const Ecosystem = () => {
  const ecosystemItems = [
    {
      id: 1,
      name: 'Properties',
      description: 'Residential and commercial real estate development',
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop',
      available: true
    },
    {
      id: 2,
      name: 'Interiors',
      description: 'Complete interior design and furnishing solutions',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      available: true
    },
    {
      id: 3,
      name: 'Furniture',
      description: 'Custom furniture design and manufacturing',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      available: true
    },
    {
      id: 4,
      name: 'Investments',
      description: 'Real estate investment opportunities and advisory',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop',
      available: true
    },
    {
      id: 5,
      name: 'Institute',
      description: 'Training and education in construction and real estate',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop',
      available: true
    },
    {
      id: 6,
      name: 'Tech',
      description: 'PropTech solutions and digital innovations',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop',
      available: false
    }
  ];

  return (
    <div className="ecosystem-page">
      <div className="container">
        <div className="ecosystem-header">
          <h1>The Cube Construction Ecosystem</h1>
          <p className="ecosystem-subtitle">Six Verticals. One Vision. A complete system for modern living.</p>
        </div>

        <div className="ecosystem-grid">
          {ecosystemItems.map(item => (
            <div key={item.id} className={`ecosystem-card ${!item.available ? 'coming-soon' : ''}`}>
              <img src={item.image} alt={item.name} />
              <div className="ecosystem-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {!item.available && <span className="coming-soon-badge">Coming Soon</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
