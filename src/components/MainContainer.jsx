import React from 'react';
import './MainContainer.css';
import EmptyBox from './EmptyBox';
import Gallery from './Gallery';
import TabsButton from './TabsButton';



function MainContainer() {
  return (
    <div className="main-container">
      
      <div className="left-section">
        <EmptyBox />
      </div>

      
      <div className="right-section">
    <TabsButton/> 

        <div className="component-divider"></div> 

        <Gallery />

       
        <div className="component-divider"></div> 
      </div>
    </div>
  );
}

export default MainContainer;