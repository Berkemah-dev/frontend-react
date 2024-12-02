import React, { useState } from 'react';
import logo from "../../assets/logo/logo.jpg"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Email dan Password tidak boleh kosong.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login gagal!');
      }

      localStorage.setItem('token', data.token);
      if (data.role === 'admin') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/';
      }
      alert('Login berhasil!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-4 text-center">
        <img src={logo} alt="Agrowisata Logo" className="mx-auto h-20 sm:h-20 md:h-32" />
      </div>

      {/* Login Form */}
      <div className="bg-white shadow-lg rounded-2xl px-6 sm:px-8 md:px-5 py-8 w-full max-w-lg sm:max-w-md md:max-w-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Login</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium text-sm mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring focus:ring-green-300 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 font-medium text-sm mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring focus:ring-green-300 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              Belum punya akun? <a href="/register" className="text-green-500 hover:underline font-semibold">Daftar</a>
            </p>
            <button
              type="button"
              onClick={() => (window.location.href = '../beranda')}
              className="bg-[#6B9C89] hover:bg-[#4f7f66] text-white font-semibold py-2 px-6 rounded-full transition duration-200 w-full sm:w-auto"
            >
              Kembali
            </button>
            <button
              type="submit"
              className="bg-[#6B9C89] hover:bg-[#4f7f66] text-white font-semibold py-2 px-6 rounded-full transition duration-200 w-full sm:w-auto"
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
