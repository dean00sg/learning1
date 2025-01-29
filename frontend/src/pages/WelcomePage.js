import React from 'react';
import LoginPanel from '../components/login/login';

const WelcomePage = () => {
  return (
    <>
     
      <div className="app">
        <div className="leftWelcome-section">
        
        
        </div>
        <div className="rightWelcome-section">
          <LoginPanel />
          
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
