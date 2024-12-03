import React, { useState } from 'react';
import logo from "../../assets/logo/logo.jpg"
import icon4 from "../../assets/icon/acarafestival.png"
import Navbar from '../Navbar';

const AcaraFestival = () => {
  // State untuk mengatur tampilan dropdown menu pada mobile
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Fungsi untuk toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
     <Navbar/>

      {/* Dropdown Menu (Mobile) */}
      <div className={`md:hidden ${dropdownVisible ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 text-center py-4">
          <li><a href="beranda.html" className="block hover:text-gray-200">Beranda</a></li>
          <li><a href="destinasi.html" className="block hover:text-gray-200">Destinasi Wisata</a></li>
          <li><a href="panduan.html" className="block hover:text-gray-200">Panduan Booking</a></li>
          <li><a href="cekkuota.html" className="block hover:text-gray-200">Cek Kuota</a></li>
          <li><a href="berita.html" className="block hover:text-gray-200">Berita</a></li>
          <li><a href="penginapan.html" className="block hover:text-gray-200">Penginapan</a></li>
        </ul>
      </div>

      {/* Main Section */}
      <main className="container mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Acara & Festival</h1>
        <div className="mb-8">
          <img src={icon4} alt="Icon ceklis" className="w-72 mx-auto" />
        </div>
        <p className="text-gray-600 text-base">
          Kunjungi lagi lain kali untuk update Info tentang acara dan festival
        </p>
      </main>

      <div className="flex justify-between items-center space-x-4 mt-6">
          <a
            href="https://wa.me/6284546576871"
            className="flex items-center bg-[#6B9C89] text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#5A8675] focus:outline-none w-1/2 justify-center"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
            084546576871
          </a>
          <button
            onClick={handleGoBack}
            className="flex items-center bg-gray-300 text-gray-700 text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-400 focus:outline-none w-1/2 justify-center"
          >
            Kembali
          </button>
        </div>
    </div>

        

  );
};

export default AcaraFestival;
