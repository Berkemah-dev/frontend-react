import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="bg-[#6B9C89] text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Menu Items Group */}
        <div className="flex items-center space-x-4">
          <img src="./asset/logo/logo.png" alt="Logo" className="h-8" />
          
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
          <Link to="/register" className="bg-white text-[#6B9C89] px-4 py-2 rounded font-medium hover:bg-[#6B9C89] hover:text-white text-sm">Registrasi</Link>
          <Link to="/login" className="bg-white text-[#6B9C89] px-4 py-2 rounded font-medium hover:bg-[#6B9C89] hover:text-white text-sm">Login</Link>
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
          <li><Link to="/register" className="block bg-white text-[#6B9C89] px-4 py-2 rounded font-medium">Registrasi</Link></li>
          <li><Link to="/login" className="block bg-white text-[#6B9C89] px-4 py-2 rounded font-medium">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
