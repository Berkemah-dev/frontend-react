import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Beranda from './components/pages/beranda';
import AcaraFestival from './components/pages/acara_festival';
import AcaraFestival2 from './components/pages/acara_festival2';
import Berita from './components/pages/berita';
import CekKuota from './components/pages/cekkuota';
import Destinasi from './components/pages/destinasi';
import KonfirTiketBerhasil from './components/pages/konfir_tiket_berhasil';
import KonfirmasiTiket from './components/pages/konfirmasi_tiket';
import Panduan from './components/pages/panduan';
import Penginapan from './components/pages/penginapan';
import Admin from './components/pages/admin';
import Kuotaadmin from './components/pages/kuotaadmin';
import ApprovalAdmin from './components/pages/approvaladmin';
import logo from './assets/logo/logo.jpg';
import poto1 from './assets/poto/Group 1.png';
import poto2 from './assets/poto/Group 5.png';
import poto3 from './assets/poto/kaligua.png';
import poto4 from './assets/poto/panduan.png';
import poto18 from './assets/poto/goajepang.png';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/acara_festival" element={<AcaraFestival />} />
        <Route path="/acara_festival2" element={<AcaraFestival2 />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/cekkuota" element={<CekKuota />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route path="/konfirmasitiketberhasil" element={<KonfirTiketBerhasil />} />
        <Route path="/konfirmasitiket" element={<KonfirmasiTiket />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/approvaladmin" element={<ApprovalAdmin />} />
        <Route path="/kuotaadmin" element={<Kuotaadmin />} />
        <Route path="/penginapan" element={<Penginapan />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar />

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
              {[poto1, poto2, poto3, poto18].map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] h-[250px] relative rounded-lg overflow-hidden snap-start"
                >
                  <img src={src} alt={`Destinasi ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-10 w-full text-white py-3 pl-3 text-lg">
                    {`Destinasi ${index + 1}`}
                  </div>
                </div>
              ))}
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
            <Link
              to="/panduan"
              className="bg-[#6B9C89] text-white px-6 py-2 rounded font-medium hover:bg-green-700"
            >
              Lihat Panduan
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6B9C89] text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:items-start px-6">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="h-30 mb-4" />
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
                <li>
                  <span>Jl. Pandansari, Kaligua, Pandansari, Brebes, Jawa Tengah 52276</span>
                </li>
                <li>
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

export default App;
