import React, { useState } from 'react';
import './Tabsbutton.css';

function TabsButton() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="tabs-button-container">
     
      <div className="top-icons">
        <div className="icon-circle">?</div>
        <div className="grid-icon">
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
        </div>
      </div>

      
      <nav className="tabs-nav-bar">
        
        <button
          className={`nav-button ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>

        <button
          className={`nav-button ${activeTab === 'experiences' ? 'active' : ''}`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>

        <button
          className={`nav-button ${activeTab === 'recommended' ? 'active' : ''}`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </nav>

     
      <div className="tab-content-area">
        <div className="tab-content">
          {activeTab === 'about' && (
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
              <br />
              <br />
              I was born and raised in Albany, NY& have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters- Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          )}
          {activeTab === 'experiences' && <p>Experiences content goes here...</p>}
          {activeTab === 'recommended' && <p>Recommended content goes here...</p>}
        </div>
        <div className="custom-scrollbar"></div>
      </div>
    </div>
  );
}

export default TabsButton;