import React from 'react';
import LoginPanel from '../components/login/login';
import OutHeader from '../headers/outHeader';
import OutFooter from '../footer/outFooter';
import CardNews from '../components/news/newsCards';

const WelcomePage = () => {
  return (
    <div className="app min-h-screen flex flex-col">
      <OutHeader />
      <div className="flex flex-col lg:flex-row mt-4 flex-grow px-4  gap-4">

        <div className="w-full lg:w-3/4 p-4 bg-white shadow-lg ">
          <h2 className="text-2xl font-semibold text-gray-700">Welcome to Our System</h2>
          <p className="mt-1 text-gray-600">
            Explore and enjoy the features we offer. With a simple and intuitive interface, you can access all the tools you need to stay organized and productive.
          </p>
          <CardNews/>
        </div>

        <div className="w-full lg:w-1/4 p-4 bg-gray-100 mt-6 lg:mt-0  shadow-md">
          <LoginPanel />
        </div>

      </div>
      <OutFooter />
    </div>
  );
};

export default WelcomePage;
