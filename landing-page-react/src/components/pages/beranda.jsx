import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.jpg'; // Path logo
import poto1 from "../../assets/poto/Group 1.png";
import poto2 from "../../assets/poto/Group 5.png"
import poto3 from "../../assets/poto/kaligua.png"
import poto4 from '../../assets/poto/panduan.png'
import poto18 from '../../assets/poto/goajepang.png'
import Navbar from '../Navbar';

const Beranda = () => {
  // State for toggling mobile menu
  const [dropdown, setDropdown] = useState(false);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">Agro Wisata Kaligua</h1>
          <p className="mt-4 text-justify">
            Agro wisata Kaligua adalah destinasi wisata berbasis pertanian yang terletak di daerah perbukitan,
            menawarkan pengalaman rekreasi sekaligus edukasi seputar perkebunan teh dan agroekosistem.
            Pengunjung dapat menikmati keindahan alam, tur perkebunan, serta aktivitas menarik seperti
            memetik teh, menikmati udara segar, dan mengeksplorasi berbagai produk pertanian lokal.
          </p>
        </div>
      </section>

      {/* Destinasi Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Destinasi</h2>
          <div className="relative group">
            <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-2">
              <div className="flex-shrink-0 w-[400px] h-[250px] relative rounded-lg overflow-hidden snap-start">
                <img src={poto1} alt="Gurun Teh" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-10 w-full text-white py-3 pl-3 text-lg">Gurun Teh</div>
              </div>
              <div className="flex-shrink-0 w-[400px] h-[250px] relative rounded-lg overflow-hidden snap-start">
                <img src={poto2} alt="Puncak Sakub" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-10 w-full text-white py-3 pl-3 text-lg">Puncak Sakub</div>
              </div>
              <div className="flex-shrink-0 w-[400px] h-[250px] relative rounded-lg overflow-hidden snap-start">
                <img src={poto3} alt="Kolam Renang" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-10 w-full text-white py-3 pl-3 text-lg">Kaligua</div>
              </div>
              <div className="flex-shrink-0 w-[400px] h-[250px] relative rounded-lg overflow-hidden snap-start">
                <img src={poto18} alt="Kolam Renang" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-10 w-full text-white py-3 pl-3 text-lg">Kaligua</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Guide */}
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto flex items-center">
          <div className="mr-6">
            <img src={poto4} alt="Panduan Booking Icon" className="w-32 h-32" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Panduan Booking</h2>
            <p className="text-gray-600 mb-6">Lihat tata cara untuk booking selengkapnya</p>
            <Link to="/panduan" className="bg-[#6B9C89] text-white px-6 py-2 rounded font-medium hover:bg-green-700">
              Lihat Panduan
            </Link>
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

export default Beranda;
