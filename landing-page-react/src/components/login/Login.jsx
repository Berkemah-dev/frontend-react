import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Validasi login (bisa ditambahkan sesuai kebutuhan)
    if (email === '' || password === '') {
      setError('Email dan Password tidak boleh kosong.');
      return;
    }

    // Simulasi proses login (bisa diganti dengan API nyata)
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirect atau aksi setelah login sukses
    // (misalnya menggunakan React Router atau menyimpan data di localStorage)
    alert('Login berhasil!');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#6B9C89] text-white p-2 rounded hover:bg-[#4a7a64]"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">Belum punya akun? <a href="/register" className="text-[#6B9C89]">Daftar di sini</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
