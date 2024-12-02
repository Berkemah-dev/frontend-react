import { useState } from 'react';

function AcaraFestival2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="bg-[#6B9C89] text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo & Menu Items */}
          <div className="flex items-center space-x-4">
            <img src="../asset/logo/logo.png" alt="Logo" className="h-8" />
            <button onClick={toggleMenu} className="block md:hidden text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <ul className={`hidden md:flex space-x-4 text-sm font-medium ${menuOpen ? 'block' : 'hidden'}`}>
              <li><a href="beranda.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Beranda</a></li>
              <li><a href="destinasi.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Destinasi Wisata</a></li>
              <li><a href="panduan.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Panduan Booking</a></li>
              <li><a href="cekkuota.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Cek Kuota</a></li>
              <li><a href="berita.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Berita</a></li>
              <li><a href="penginapan.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Penginapan</a></li>
            </ul>
          </div>
        </div>

        {/* Dropdown Menu (Mobile) */}
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="space-y-4 text-center py-4">
            <li><a href="index.html" className="block hover:text-gray-200">Beranda</a></li>
            <li><a href="destinasi.html" className="block hover:text-gray-200">Destinasi Wisata</a></li>
            <li><a href="panduan.html" className="block hover:text-gray-200">Panduan Booking</a></li>
            <li><a href="cekkuota.html" className="block hover:text-gray-200">Cek Kuota</a></li>
            <li><a href="berita.html" className="block hover:text-gray-200">Berita</a></li>
            <li><a href="penginapan.html" className="block hover:text-gray-200">Penginapan</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Section */}
      <main className="container mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Acara & Festival</h1>
        <div className="mb-8">
          <img src="../asset/icon/acarafestival.png" alt="Icon ceklis" className="w-72 mx-auto" />
        </div>
        <p className="text-gray-600 text-base">Kunjungi lagi lain kali untuk update Info tentang acara dan festival</p>
      </main>
    </div>
  );
}

export default AcaraFestival2;
