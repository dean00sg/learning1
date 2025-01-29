import React from 'react';
import UserInfo from '../components/checkIn_fo_user/UserInfo'; // Relative to the src folder

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
        <UserInfo isAlternative={false} />
      </div>
    </>
  );
};


export default HomePage;
