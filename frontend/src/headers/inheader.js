import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logolearning.png'; 

const InHeader = () => {
    const location = useLocation();

    return (
        <div>
            <header className="bg-green-700 text-white p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-2" /> 
                    <h1 className="text-4xl font-bold">Learning1</h1>
                </div>
            </header>

            <div className="bg-green-500 py-2 px-4 flex justify-between items-center shadow-md">
                <div className="flex items-center text-white">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    <div className=" font-semibold">Stay In Page : {location.pathname}</div>
                </div>

                <ul className="flex flex-wrap space-x-1 justify-center sm:justify-end">
                    {["Home", "About", "Services", "Contact"].map((item, index) => (
                        <li key={index}>
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

export default InHeader;
