import React, { useState } from 'react';
import logo from '../../assets/logo/logo.jpg'; // Path logo
import poto12 from "../../assets/poto/hotelGrandian.png"
import poto13 from "../../assets/poto/hotelsalsa.png"
import poto14 from "../../assets/poto/hotelfisa.png"
import poto15 from "../../assets/poto/hotelteras.png"
import Navbar from '../Navbar';

const Penginapan = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Hotel Terdekat</h1>

        <div className="space-y-6">
          {/* Card 1 */}
          <div className="flex bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
            <img src={poto12} alt="Villa Kaligua" className="w-1/2 h-56 object-cover" />
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
            <img src={poto13} alt="Homestay Kaligua" className="w-1/2 h-56 object-cover" />
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
            <img src={poto14} alt="Hotel Kaligua" className="w-1/2 h-56 object-cover" />
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
            <img src={poto15} alt="Hotel Kaligua2" className="w-1/2 h-56 object-cover" />
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
            <img src={logo} alt="Logo" className="h-30 mb-4" />
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
