import React from 'react';
import UserInfo from '../components/userInfo/userProfile';
import Home from '../components/home/home';
import InHeader from '../headers/inheader';
import Requesting from '../components/home/requesting';
import OutFooter from '../footer/outFooter';

const HomePage = () => {
  console.log('Rendering HomePage');
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <InHeader />

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <div className="lg:col-span-2 bg-white p-4">
          <Home />
          <Requesting />
        </div>

        <div className="bg-white p-4 border-gray-300">
          <UserInfo />
        </div>
      </div>
      <OutFooter />
    </div>
  );
};

export default HomePage;
