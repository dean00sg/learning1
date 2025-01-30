import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logolearning.png'; 

const OutHeader = () => {

  return (
    <div>
      <div className="">
      </div>
      <header className="flex items-center justify-between p-4 bg-green-700 shadow-md">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-4xl font-bold text-white">Learning1</h1>
        </div>
        <div className="flex items-center border border-gray-300 p-2 w-full sm:w-auto">
          <input
            type="text"
            className="w-full sm:w-48 border-r focus:outline-none p-2"
            placeholder="Search..."
          />
          <button type="submit" className="px-3 py-2 bg-blue-500 text-white">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </div>
      </header>
      <div className="bg-green-500 py-2">
        <ul className="flex flex-wrap space-x-1 justify-center sm:justify-end pr-3">
          <li><a href="#home" className="text-sm text-blue-500 hover:text-blue-700 bg-white p-1 rounded-sm">Home</a></li>
          <li><a href="#about" className="text-sm text-blue-500 hover:text-blue-700 bg-white p-1 rounded-sm">About</a></li>
          <li><a href="#services" className="text-sm text-blue-500 hover:text-blue-700 bg-white p-1 rounded-sm">Services</a></li>
          <li><a href="#contact" className="text-sm text-blue-500 hover:text-blue-700 bg-white p-1 rounded-sm">Contact</a></li>
          <li><a href="#about" className="text-sm text-blue-500 hover:text-blue-700 bg-white p-1 rounded-sm">About</a></li>
          <li><a href="#services" className="text-sm text-blue-500 hover:text-blue-700 bg-white p-1 rounded-sm">Services</a></li>
          <li><a href="#contact" className="text-sm text-blue-500 hover:text-blue-700 bg-white p-1 rounded-sm">Contact</a></li>
        </ul>
      </div>
      {/* <div className="p-1 bg-green-500 text-center mb-5">
        <h>Explore and enjoy the features we offer. With a simple and intuitive interface, you can access all the tools you need to stay organized and productive</h>
      </div> */}
    </div>
  );
};

export default OutHeader;
