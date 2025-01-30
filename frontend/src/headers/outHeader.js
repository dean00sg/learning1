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
        <div className="flex items-center p-2 w-full sm:w-auto mt-2 sm:mt-0">
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

      <nav className="bg-green-500 py-2">
        <ul className="flex flex-wrap justify-center sm:justify-end pr-3 gap-2">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-blue-500 hover:text-blue-700 bg-white p-1 rounded-sm"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Description Section */}
      <div className='bg-white shadow-md '>
        <div className="relative w-full overflow-hidden py-1">
          <div className="min-w-full whitespace-nowrap animate-slide text-gray-800 text-center">
            Learning1 is a comprehensive web application designed to provide an efficient and user-friendly platform for online learning. Built with FastAPI for the backend, it ensures fast, scalable, and secure data handling with optimized API interactions. The front-end is powered by React JS, offering a dynamic and responsive user interface that adapts to various devices, enhancing user engagement. Styled with Tailwind CSS, the application provides an easy-to-use customization experience for both users and developers. The system leverages PostgreSQL for secure, high-performance, and scalable data management, ensuring that all data is handled securely while allowing for seamless growth. With key features like user registration, personalized dashboards, content search, and progress tracking, Learning1 offers a robust platform for users to stay organized, track their learning journey, and access all the necessary resources to maximize productivity. Additionally, Learning1 supports real-time notifications, interactive learning modules, and integration with external content sources, providing users with an enriched learning experience. The platform also includes administrative tools that allow for managing courses, user accounts, and tracking overall system performance. Whether you are a student aiming to enhance your skills, or an educator looking to deliver high-quality content, Learning1 is built to meet your needs and foster a successful learning environment. With an emphasis on ease of use, security, and performance, Learning1 strives to continuously improve, offering regular updates and new features to enhance the overall user experience. The application is designed to be scalable, ensuring that as your learning needs evolve, Learning1 grows with you.
          </div>
        </div>
      </div>

    </div>
  );
};

export default OutHeader;
