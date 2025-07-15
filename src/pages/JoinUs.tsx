
import React from 'react';

const JoinUs = () => {
  const joinOptions = [
    {
      id: 1,
      title: 'Explore Career',
      description: 'Join our team of passionate professionals',
      icon: '🚀'
    },
    {
      id: 2,
      title: 'Propose a Land',
      description: 'Partner with us for land development opportunities',
      icon: '🏞️'
    },
    {
      id: 3,
      title: 'Propose a Project',
      description: 'Collaborate on innovative construction projects',
      icon: '🏗️'
    },
    {
      id: 4,
      title: 'Invest with Us',
      description: 'Explore investment opportunities in real estate',
      icon: '💰'
    },
    {
      id: 5,
      title: 'Channel Partner',
      description: 'Become a trusted channel partner',
      icon: '🤝'
    },
    {
      id: 6,
      title: 'Vendors & Consultants',
      description: 'Join our network of vendors and consultants',
      icon: '🔧'
    }
  ];

  return (
    <div className="join-us-page">
      <div className="container">
        <div className="join-us-header">
          <h1>Join Us</h1>
          <p>Discover opportunities to be part of the Cube Construction family</p>
        </div>

        <div className="join-us-grid">
          {joinOptions.map(option => (
            <div key={option.id} className="join-us-card">
              <div className="join-us-icon">{option.icon}</div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <button className="join-us-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
