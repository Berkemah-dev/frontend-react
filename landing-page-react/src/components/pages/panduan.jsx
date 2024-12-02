import React, { useState } from 'react';
import logo from "../../assets/logo/logo.jpg";
import poto8 from "../../assets/poto/panduan1.png"
import poto9 from "../../assets/poto/panduan2.png"
import poto10 from "../../assets/poto/panduan3.png"
import poto11 from "../../assets/poto/panduan4.png"

const Panduan = () => {
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
            <img src={logo} alt="Logo" className="h-8" />

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
              <li><a href="/beranda" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Beranda</a></li>
              <li><a href="/destinasi" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Destinasi Wisata</a></li>
              <li><a href="/panduan" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Panduan Booking</a></li>
              <li><a href="/cekkuota" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Cek Kuota</a></li>
              <li><a href="/berita" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Berita</a></li>
              <li><a href="/penginapan" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Penginapan</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div id="dropdown" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="space-y-4 text-center py-4">
            <li><a href="/index" className="block hover:text-gray-200">Beranda</a></li>
            <li><a href="/destinasi" className="block hover:text-gray-200">Destinasi Wisata</a></li>
            <li><a href="/panduan" className="block hover:text-gray-200">Panduan Booking</a></li>
            <li><a href="/cekkuota" className="block hover:text-gray-200">Cek Kuota</a></li>
            <li><a href="/berita" className="block hover:text-gray-200">Berita</a></li>
            <li><a href="/penginapan" className="block hover:text-gray-200">Penginapan</a></li>
          </ul>
        </div>
      </nav>

      {/* Panduan Booking Section */}
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Panduan Booking</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Langkah 1 */}
          <div className="flex space-x-4">
            <div className="step-number">1</div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Buka Halaman Agrowisata</h2>
              <img src={poto8} alt="Buka Halaman Agrowisata" className="mb-4" />
              <p className="text-gray-700">
                Akses situs resmi Agrowisata Kaligua melalui browser. Di halaman utama, pilih opsi "Destinasi" untuk melihat pilihan wisata yang tersedia di Kebun Teh Kaligua.
              </p>
            </div>
          </div>

          {/* Langkah 2 */}
          <div className="flex space-x-4">
            <div className="step-number">2</div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Cek Kuota</h2>
              <img src={poto9} alt="Cek Kuota" className="mb-4" />
              <p className="text-gray-700">
                Sebelum memilih tanggal kunjungan wisata, harap cek ketersediaan kuota terlebih dahulu. Klik “Cek Kuota” pada bagian atas, lalu sesuaikan jadwal kunjungan Anda dengan kuota yang tersedia.
              </p>
            </div>
          </div>

          {/* Langkah 3 */}
          <div className="flex space-x-4">
            <div className="step-number">3</div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Registrasi</h2>
              <img src={poto10} alt="Registrasi" className="mb-4" />
              <p className="text-gray-700">
                <ol className="list-decimal pl-5">
                  <li>Pastikan Anda sudah memiliki akun. Jika belum, silakan lakukan registrasi dengan mengisi informasi yang diperlukan di halaman pendaftaran.</li>
                  <li>Setelah berhasil mendaftar, login menggunakan email dan password yang telah didaftarkan. Anda akan diarahkan ke halaman beranda yang memuat informasi lengkap mengenai Agrowisata Kaligua.</li>
                  <li>Setelah login, cek kembali ketersediaan kuota untuk tanggal kunjungan Anda. Jika kuota tersedia dan tanggal sudah sesuai, klik "Destinasi Wisata" dan isi form pemesanan untuk melanjutkan proses booking.</li>
                </ol>
              </p>
            </div>
          </div>

          {/* Langkah 4 */}
          <div className="flex space-x-4">
            <div className="step-number">4</div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Isi Form Pemesanan</h2>
              <img src={poto11} alt="Isi Form Pemesanan" className="mb-4" />
              <p className="text-gray-700">
                <ol className="list-decimal pl-5">
                  <li>Pilih destinasi yang ingin dikunjungi di menu Destinasi Wisata.</li>
                  <li>Isi formulir pemesanan wisata yang tersedia di website.</li>
                  <li>Baca dan setujui syarat dan ketentuan berwisata di Agrowisata Kaligua, termasuk larangan membawa barang tertentu dan kesediaan untuk mematuhi peraturan yang berlaku.</li>
                  <li>Tentukan tanggal kunjungan sesuai kuota yang tersedia. Pastikan semua data yang dimasukkan sudah benar.</li>
                  <li>Masukkan jumlah tiket yang diinginkan di form pemesanan. Pilih metode pembayaran sesuai preferensi Anda, baik melalui Transfer atau QRIS.</li>
                  <li>Setelah data dan pembayaran selesai, pemesanan tiket Agrowisata Anda telah berhasil dilakukan secara online.</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </main>

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

export default Panduan;
