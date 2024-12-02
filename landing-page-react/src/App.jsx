import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/login/Login'; // Pastikan path ini benar
import Register from './components/login/Register';
import BookingGuide from './components/BookingGuide';
import Destinations from './components/Destinations';
import HeroSection from './components/HeroSection';
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
        <Route path="/konfirmasitiket" element={<KonfirTiketBerhasil />} />
        <Route path="/konfirmasitiket" element={<KonfirmasiTiket />} />
        <Route path="/panduan" element={<Panduan />} />

        <Route path="/penginapan" element={<Penginapan />} />

      </Routes>
    </Router>
  );
};

// Home component sebagai placeholder untuk halaman utama
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Destinations />
      <BookingGuide />
    </>
  );
};

export default App;
