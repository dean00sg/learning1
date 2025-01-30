import React from 'react';
import LoginPanel from '../components/login/login';
import OutHeader from '../headers/outHeader';

const WelcomePage = () => {
  return (
    <>
      <div className="app">
        <OutHeader />
        <div className="flex flex-col lg:flex-row">
    
          <div className="leftWelcome-section w-full lg:w-2/3 p-6 bg-gray-100">
       
            <h2 className="text-2xl font-semibold text-gray-700">Welcome to Our System</h2>
            <p className="mt-4 text-gray-600">
              Explore and enjoy the features we offer. With a simple and intuitive interface, you can access all the tools you need to stay organized and productive.
            </p>
          </div>

          <div className="rightWelcome-section  w-full lg:w-1/3 p-3 bg-gray-100  mt-6 lg:mt-0">
            <LoginPanel />
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
