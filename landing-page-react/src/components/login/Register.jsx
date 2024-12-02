import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-4 text-center">
        <img
          src="../asset/logo/logo.png"
          alt="Agrowisata Logo"
          className="mx-auto h-20 sm:h-20 md:h-32"
        />
      </div>

      {/* Register Form */}
      <div className="bg-white shadow-lg rounded-2xl px-6 sm:px-8 md:px-5 py-8 w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          {/* Nama Lengkap */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium text-sm mb-2" htmlFor="name">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>

          {/* Konfirmasi Password */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium text-sm mb-2" htmlFor="confirmPassword">
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Konfirmasi Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring focus:ring-green-300 focus:outline-none"
            />
          </div>

          {/* Checkbox */}
          <div className="mb-6 flex items-start">
            <input
              type="checkbox"
              id="terms"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2 mt-1"
            />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              Dengan mendaftar, Anda menerima ketentuan penggunaan dan kebijakan privasi kami.
            </label>
          </div>

          {/* Sign Up Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#6B9C89] hover:bg-[#4f7f66] text-white font-semibold py-2 px-6 rounded-full transition duration-200 w-full sm:w-auto"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Button */}
        <button className="google-button bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-full w-full hover:bg-gray-200">
          <img
            src="../asset/icon/google_icon.webp"
            alt="Google Icon"
            className="google-icon w-6 h-6 mr-2"
          />
          Lanjutkan Menggunakan Google
        </button>

        {/* Login Link */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-green-500 hover:underline font-semibold">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
