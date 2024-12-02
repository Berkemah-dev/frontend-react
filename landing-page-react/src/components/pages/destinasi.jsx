import React, { useState } from 'react';

const Destinasi = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="bg-[#6B9C89] text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
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
            <ul className={`md:flex space-x-4 text-sm font-medium ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              <li><a href="beranda.html" className="hover:text-gray-200">Beranda</a></li>
              <li><a href="destinasi.html" className="hover:text-gray-200">Destinasi Wisata</a></li>
              <li><a href="panduan.html" className="hover:text-gray-200">Panduan Booking</a></li>
              <li><a href="cekkuota.html" className="hover:text-gray-200">Cek Kuota</a></li>
              <li><a href="berita.html" className="hover:text-gray-200">Berita</a></li>
              <li><a href="penginapan.html" className="hover:text-gray-200">Penginapan</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Destinasi Wisata</h2>
        </div>

        {/* Destination 1 */}
        <div className="flex flex-col md:flex-row items-center mb-8 bg-white shadow-md rounded-lg overflow-hidden">
          <img src="../asset/poto/kaligua.png" alt="Kaligua" className="destination-img w-full md:w-1/2 h-64 md:h-auto object-cover" />
          <div className="p-6 md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Kaligua</h3>
            <p className="text-gray-700 text-sm">
              Kaligua adalah destinasi agrowisata di lereng Gunung Slamet yang menawarkan kebun teh luas, pemandian air panas, gua Jepang, serta aktivitas seperti trekking dan tea walk. Nikmati sunrise di Bukit Kaligua, suasana sejuk, dan konsep ekowisata yang cocok untuk relaksasi dan healing.
            </p>
          </div>
        </div>

        {/* Other Destinations */}
        {/* Repeating the above section for other destinations (Puncak Sakub, Gurun Teh, Goa Jepang) */}

        {/* Ticket Info and Booking Form */}
        <div className="bg-white shadow-md rounded-lg p-6 my-8">
          <div className="grid grid-cols-2 text-center items-center border border-gray-300 rounded-md">
            <div className="border-r border-gray-300 py-4">
              <h4 className="text-lg font-medium text-gray-700">Status</h4>
              <p className="text-2xl font-bold text-black-600">BUKA</p>
            </div>
            <div className="py-4">
              <h4 className="text-lg font-medium text-gray-700">Harga Tiket</h4>
              <p className="text-2xl font-bold text-black-600">25.000</p>
            </div>
          </div>
        </div>

        {/* Additional Info Buttons */}
        <div className="bg-white shadow-md rounded-lg p-6 my-8">
          <div className="flex flex-wrap justify-center gap-6">
            {/* Add buttons similar to the ones in your HTML */}
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-center mb-6">Form Pemesanan (Booking) Tiket</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side form */}
            <div>
              {/* Form inputs for Nama, No. HP, Jumlah Tiket, etc. */}
            </div>
            {/* Right side summary and payment options */}
            <div>
              {/* Booking summary and payment methods (Tunai, QRIS, etc.) */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#6B9C89] text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:items-start px-6">
          <div className="flex flex-col items-center md:items-start">
            <img src="../asset/logo/logo.png" alt="Logo" className="h-30 mb-4" />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-16">
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
        <div className="text-center mt-8 text-sm text-gray-300">&copy; 2024 Agrowisata Kaligua Brebes. Semua Hak Cipta Dilindungi.</div>
      </footer>
    </div>
  );
};

export default Destinasi;
