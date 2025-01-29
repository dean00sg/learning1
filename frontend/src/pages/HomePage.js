import React from 'react';
import UserInfo from '../components/userInfo/userProfile';


const HomePage = () => {
  console.log('Rendering HomePage');
  return (
    <>
      <div className="app">
        <div className="leftHome-section">
          <h11>Requesting</h11>
        </div>
      </div>
      <div className="rightHome-section">
        <UserInfo />
      </div>
    </>
  );
};


export default HomePage;
