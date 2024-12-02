import React, { useState } from 'react';
import logo from '../../assets/logo/logo.jpg';  // Path relatif sesuai struktur proyek
import group1 from '../../assets/poto/Group 1.png';  // Gambar lainnya dari src

const Beranda = () => {
  // State for toggling mobile menu
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="bg-[#6B9C89] text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">Agro Wisata Kaligua</h1>
        <p className="mt-4 text-justify">
          Agro wisata Kaligua adalah destinasi wisata berbasis pertanian yang terletak di daerah perbukitan,
          menawarkan pengalaman rekreasi sekaligus edukasi seputar perkebunan teh dan agroekosistem.
        </p>
      </section>

      {/* Destinasi Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Destinasi</h2>
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scroll-smooth">
            <div className="flex-shrink-0 w-[400px] h-[250px] relative rounded-lg overflow-hidden snap-start">
              <img src={group1} alt="Gurun Teh" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-10 w-full text-white py-3 pl-3 text-lg">Gurun Teh</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
