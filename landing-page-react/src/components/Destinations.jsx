import React, { useState } from 'react';
import Logo from '../assets/logo/logo.jpg'; // Path logo
import kaligua from '../assets/poto/kaligua.png'

const Destinations = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}

      <div className="container mx-auto px-4 pt-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Destinasi Wisata</h2>
        </div>

        {/* Destinations List */}
        {/* Repeat this section for each destination */}
        <div className="flex flex-col md:flex-row items-center mb-8 bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={kaligua}
            alt="Kaligua"
            className="destination-img w-full md:w-1/2 h-64 md:h-auto object-cover"
          />
          <div className="p-6 md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Kaligua</h3>
            <p className="text-gray-700 text-sm">
              Kaligua adalah destinasi agrowisata di lereng Gunung Slamet yang menawarkan kebun teh luas,
              pemandian air panas, gua Jepang, serta aktivitas seperti trekking dan tea walk. Nikmati sunrise di
              Bukit Kaligua, suasana sejuk, dan konsep ekowisata yang cocok untuk relaksasi dan healing.
            </p>
          </div>
        </div>

        {/* Repeat for other destinations... */}

      </div>

      {/* Footer */}
      <footer className="bg-[#6B9C89] text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:items-start px-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="Logo" className="h-30 mb-4" />
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-16">
            {/* Link Terkait */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-center md:text-left">Link Terkait</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="destinasi.html" className="hover:underline">
                    Destinasi Wisata
                  </a>
                </li>
                <li>
                  <a href="panduan.html" className="hover:underline">
                    Panduan Booking
                  </a>
                </li>
                <li>
                  <a href="cekkuota.html" className="hover:underline">
                    Cek Kuota
                  </a>
                </li>
                <li>
                  <a href="berita.html" className="hover:underline">
                    Berita
                  </a>
                </li>
                <li>
                  <a href="penginapan.html" className="hover:underline">
                    Penginapan
                  </a>
                </li>
              </ul>
            </div>

            {/* Informasi Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-center md:text-left">Informasi</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-center md:justify-start">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10l7-7m0 0l7 7M10 3v16"
                    />
                  </svg>
                  <span>Jl. Pandansari, Kaligua, Pandansari, Brebes, Jawa Tengah 52276</span>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12H9m4 8H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"
                    />
                  </svg>
                  <span>info@kaligua.com</span>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 6h18M3 12h18m-9 6h9"
                    />
                  </svg>
                  <span>+62 813-7222-3888</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Destinations;
