import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo/logo.jpg';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Memeriksa status login saat komponen dimuat
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); // Pengguna sudah login
    } else {
      setIsAuthenticated(false); // Pengguna belum login
    }
  }, []);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    // Hapus token dan data pengguna dari localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false); // Perbarui status login
    navigate('/'); // Arahkan pengguna ke halaman utama setelah logout
  };

  return (
    <nav className="bg-[#6B9C89] text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Menu Items Group */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-8" />
          
          {/* Hamburger Menu */}
          <button onClick={toggleDropdown} className="block md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Menu Items */}
          <ul className={`md:flex space-x-4 text-sm font-medium ${dropdown ? "block" : "hidden"}`} id="menu">
            <li><Link to="/" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Beranda</Link></li>
            <li><Link to="/destinasi" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Destinasi Wisata</Link></li>
            <li><Link to="/panduan" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Panduan Booking</Link></li>
            <li><Link to="/cekkuota" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Cek Kuota</Link></li>
            <li><Link to="/berita" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Berita</Link></li>
            <li><Link to="/penginapan" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Penginapan</Link></li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          {!isAuthenticated ? (
            <>
              <Link to="/register" className="bg-white text-[#6B9C89] px-4 py-2 rounded font-medium hover:bg-[#6B9C89] hover:text-white text-sm">Registrasi</Link>
              <Link to="/login" className="bg-white text-[#6B9C89] px-4 py-2 rounded font-medium hover:bg-[#6B9C89] hover:text-white text-sm">Login</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="bg-white text-[#6B9C89] px-4 py-2 rounded font-medium hover:bg-[#6B9C89] hover:text-white text-sm">
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${dropdown ? "block" : "hidden"}`} id="dropdown">
        <ul className="space-y-4 text-center py-4">
          <li><Link to="/" className="block hover:text-gray-200">Beranda</Link></li>
          <li><Link to="/destinasi" className="block hover:text-gray-200">Destinasi Wisata</Link></li>
          <li><Link to="/panduan" className="block hover:text-gray-200">Panduan Booking</Link></li>
          <li><Link to="/cekkuota" className="block hover:text-gray-200">Cek Kuota</Link></li>
          <li><Link to="/berita" className="block hover:text-gray-200">Berita</Link></li>
          <li><Link to="/penginapan" className="block hover:text-gray-200">Penginapan</Link></li>
          {!isAuthenticated ? (
            <>
              <li><Link to="/register" className="block bg-white text-[#6B9C89] px-4 py-2 rounded font-medium">Registrasi</Link></li>
              <li><Link to="/login" className="block bg-white text-[#6B9C89] px-4 py-2 rounded font-medium">Login</Link></li>
            </>
          ) : (
            <li><button onClick={handleLogout} className="block bg-white text-[#6B9C89] px-4 py-2 rounded font-medium">Logout</button></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
