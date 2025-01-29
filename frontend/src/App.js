import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <BrowserRouter> {/* Wrap Routes inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
