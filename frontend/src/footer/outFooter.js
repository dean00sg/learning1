import React from 'react';
import logo from '../assets/logolearning.png';

const OutFooter = () => {
    return (
        <footer className="bg-white text-gray-400 p-4 border mt-5 ">
            <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 ">
                <div className="flex items-center w-full sm:w-auto">
                    {/* <div className="items-center justify-between ">
                        <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                        <h1 className="text-1xl sm:text-1xl font-bold text-geen-600">Learning1</h1>
                    </div> */}
                    <div className="text-sm  text-left">

                        {/* Using <br />
                        Back-End : Fast API<br />
                        Front-End : React JS & Tailwind CSS<br />
                        DataBase : Postgresql<br /> */}
                       
                    </div>
                </div>
                <div className="text-sm text-right mt-4 md:mt-0">
                    <a
                        href="https://github.com/dean00sg/learning1"
                        className="text-blue-600 hover:underline font-semibold"
                    >
                        Learning1 system testing web application by Dean.sg
                    </a>
                    <br />
                    Copyright © 2025. All Rights Reserved. <span className="font-medium">Version L.1.D04/2</span>
                </div>
            </div>
        </footer>
    );
};

export default OutFooter;
