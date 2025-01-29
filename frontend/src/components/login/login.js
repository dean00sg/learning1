import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate

const LoginPanel = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // สร้าง navigate function

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    const loginData = new URLSearchParams();
    loginData.append('username', username);
    loginData.append('password', password);

    try {
      const response = await fetch('http://127.0.0.1:8000/authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: loginData.toString(),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login success:', data);
        // จัดเก็บ token ใน localStorage
        localStorage.setItem('token', data.access_token);
        // เปลี่ยนเส้นทางไปยังหน้า /Home
        navigate('/Home');  
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign in</h2>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-4 relative">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={handleLogin}
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
