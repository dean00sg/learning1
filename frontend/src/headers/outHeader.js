import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logolearning.png';

const OutHeader = () => {
  return (
    <div>
      <header className="flex flex-wrap items-center justify-between p-4 bg-green-700 shadow-md">
        <div className="flex items-center w-full sm:w-auto">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-2xl sm:text-4xl font-bold text-white">Learning1</h1>
        </div>
        <div className="flex items-center  p-2 w-full sm:w-auto mt-2 sm:mt-0">
          <input
            type="text"
            className="w-full sm:w-48 lg:w-64 border-r focus:outline-none p-2"
            placeholder="Search..."
          />
          <button type="submit" className="px-3 py-2 bg-blue-500 text-white">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </div>
      </header>
      <div className="bg-green-500 py-2">
        <ul className="flex flex-wrap justify-center sm:justify-end pr-3 gap-2">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-sm text-blue-500 hover:text-blue-700 bg-white p-1 rounded-sm">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OutHeader;
