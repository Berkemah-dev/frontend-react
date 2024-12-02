import React, { useState } from 'react';

const Penginapan = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="bg-[#6B9C89] text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and Menu Items Group */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <img src="../asset/logo/logo.png" alt="Logo" className="h-8" />

            {/* Hamburger Menu */}
            <button
              id="menu-btn"
              className="block md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            {/* Menu Items */}
            <ul className={`md:flex space-x-4 text-sm font-medium ${isMenuOpen ? 'block' : 'hidden'}`} id="menu">
              <li><a href="beranda.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Beranda</a></li>
              <li><a href="destinasi.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Destinasi Wisata</a></li>
              <li><a href="panduan.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Panduan Booking</a></li>
              <li><a href="cekkuota.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Cek Kuota</a></li>
              <li><a href="berita.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Berita</a></li>
              <li><a href="penginapan.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Penginapan</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div id="dropdown" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
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

      {/* Main Content */}
      <section className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Hotel Terdekat</h1>

        <div className="space-y-6">
          {/* Card 1 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
            <img src="../asset/poto/kaligua.png" alt="Villa Kaligua" className="w-1/2 h-56 object-cover" />
            <div className="p-6 w-1/2">
              <h3 className="text-xl font-semibold text-gray-800">Villa Kaligua</h3>
              <p className="text-gray-600 mb-4">Nikmati kenyamanan menginap di Villa Kaligua dengan pemandangan alam yang indah dan fasilitas lengkap, termasuk kolam renang dan restoran. Tersedia ruang terbuka yang nyaman untuk relaksasi.</p>
              <div className="flex items-center space-x-4">
                <span className="text-[#6B9C89] font-semibold">Rp 1.500.000/malam</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
            <img src="../asset/poto/kaligua.png" alt="Homestay Kaligua" className="w-1/2 h-56 object-cover" />
            <div className="p-6 w-1/2">
              <h3 className="text-xl font-semibold text-gray-800">Homestay Kaligua</h3>
              <p className="text-gray-600 mb-4">Homestay yang nyaman dan ramah untuk keluarga, dengan fasilitas lengkap dan suasana yang tenang dan alami. Lokasi ideal untuk menikmati keindahan alam Kaligua.</p>
              <div className="flex items-center space-x-4">
                <span className="text-[#6B9C89] font-semibold">Rp 800.000/malam</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
            <img src="../asset/poto/kaligua.png" alt="Hotel Kaligua" className="w-1/2 h-56 object-cover" />
            <div className="p-6 w-1/2">
              <h3 className="text-xl font-semibold text-gray-800">Hotel Kaligua</h3>
              <p className="text-gray-600 mb-4">Hotel bintang tiga dengan fasilitas modern, pemandangan alam yang memukau, dan layanan kelas satu. Cocok untuk wisatawan yang mencari kenyamanan selama liburan.</p>
              <div className="flex items-center space-x-4">
                <span className="text-[#6B9C89] font-semibold">Rp 1.200.000/malam</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
            <img src="../asset/poto/kaligua.png" alt="Hotel Kaligua2" className="w-1/2 h-56 object-cover" />
            <div className="p-6 w-1/2">
              <h3 className="text-xl font-semibold text-gray-800">Hotel Kaligua2</h3>
              <p className="text-gray-600 mb-4">Hotel bintang tiga dengan fasilitas modern, pemandangan alam yang memukau, dan layanan kelas satu. Cocok untuk wisatawan yang mencari kenyamanan selama liburan.</p>
              <div className="flex items-center space-x-4">
                <span className="text-[#6B9C89] font-semibold">Rp 1.200.000/malam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6B9C89] text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:items-start px-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src="../asset/logo/logo.png" alt="Logo" className="h-30 mb-4" />
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-16">
            {/* Link Terkait */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-center md:text-left">Link Terkait</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="destinasi.html" className="hover:underline">Destinasi Wisata</a></li>
                <li><a href="panduan.html" className="hover:underline">Panduan Booking</a></li>
                <li><a href="cekkuota.html" className="hover:underline">Cek Kuota</a></li>
                <li><a href="berita.html" className="hover:underline">Berita</a></li>
                <li><a href="penginapan.html" className="hover:underline">Penginapan</a></li>
              </ul>
            </div>

            {/* Informasi Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-center md:text-left">Informasi</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-center md:justify-start">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l7-7m0 0l7 7M10 3v16"></path>
                  </svg>
                  <span>Jl. Pandansari, Kaligua, Pandansari, Brebes, Jawa Tengah 52276</span>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m4 8H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6"></path>
                  </svg>
                  <span>0854-4567-6871</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-300">
          &copy; 2024 Agrowisata Kaligua Brebes. Semua Hak Cipta Dilindungi.
        </div>
      </footer>
    </div>
  );
};

export default Penginapan;
