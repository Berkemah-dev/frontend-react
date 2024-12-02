import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validasi login (bisa ditambahkan sesuai kebutuhan)
    if (email === '' || password === '') {
      setError('Email dan Password tidak boleh kosong.');
      return;
    }

    try {
      // Kirim data login ke API
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
console.log(data)
      if (!response.ok) {
        throw new Error(data.message || 'Login gagal!');
      }

      // Simpan token atau data user jika perlu
      localStorage.setItem('token', data.token); // Asumsi API mengembalikan token

      // Cek apakah user adalah admin
      if (data.role === 'admin') {
        // Redirect ke halaman admin jika admin
        window.location.href = '/';  // Ganti dengan routing yang sesuai
      } else {
        // Redirect ke halaman pengguna biasa
        window.location.href = '/admin'; // Ganti dengan routing yang sesuai
      }
      console.log(data.role)

      alert('Login berhasil!');
    } catch (error) {
      setError(error.message);
    }
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
