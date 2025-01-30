import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logolearning.png';
import background from '../assets/background.png';

const OutHeader = () => {
  return (
    <div>
      <header
        className="flex flex-wrap items-center justify-between p-4 shadow-md text-white"
        style={{
          backgroundImage: `url(${background})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-center w-full sm:w-auto  bg-opacity-50 p-2 rounded-md">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-2xl sm:text-4xl font-bold">Learning1</h1>
        </div>
        <div className="flex items-center p-2 w-full sm:w-auto mt-2 sm:mt-0 bg-opacity-50 rounded-md">
          <input
            type="text"
            className="w-full sm:w-48 lg:w-64 border-r focus:outline-none p-2"
            placeholder="Search..."
          />
          <button type="submit" className="px-3 py-2 bg-blue-500 text-white" aria-label="Search">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </div>
      </header>

      <nav className="bg-green-600 py-2">
        <ul className="flex flex-wrap justify-center sm:justify-end pr-3 gap-2 ">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-green-700 hover:text-green-900  p-1 font-semibold bg-green-50 rounded-sm"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Description Section */}
      <div className="bg-white shadow-md">
        <div className="relative w-full overflow-hidden py-1">
          <div className="min-w-full whitespace-nowrap animate-slide text-gray-800 text-center">
            Learning1 is a comprehensive web application designed to provide an efficient and user-friendly platform for online learning...
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutHeader;
