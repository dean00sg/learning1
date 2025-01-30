import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import UseLogin from '../../hooks/userLogin'; 

const LoginPanel = () => {
  const navigate = useNavigate(); 
  const {
    username,
    setUsername,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    error,
    handleLogin,
  } = UseLogin(); 

  // Handle key press event for Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin(navigate);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6 ">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign in</h2>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress} // Add onKeyPress event
        />
      </div>

      <div className="mb-4 relative">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress} // Add onKeyPress event
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </button>
      </div>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="flex justify-between items-center mb-4">
        <label className="flex items-center text-sm">
          <input type="checkbox" className="mr-2" /> Remember me
        </label>
        <a href="#" className="text-sm text-blue-500">Forgot Password?</a>
      </div>

      <button
        className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={() => handleLogin(navigate)} // Pass navigate as argument
      >
        Sign in
      </button>

      <p className="text-center text-sm mt-4">
        Don’t have an account? <a href="#" className="text-blue-500">Sign up</a>
      </p>
    </div>
  );
};

export default LoginPanel;
