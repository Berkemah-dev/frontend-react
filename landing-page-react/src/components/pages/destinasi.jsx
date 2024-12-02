import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logo.jpg'; // Path logo
import poto3 from "../../assets/poto/kaligua.png"
import poto5 from "../../assets/poto/puncaksakub.png"
import poto6 from "../../assets/poto/gurunteh.png"
import poto7 from "../../assets/poto/goajepang.png"
import icon1 from "../../assets/icon/iconqris.png"
import icon2 from "../../assets/icon/icontunai.png"

const Destinasi = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [nama, setNama] = useState('');
  const [nomorHp, setNomorHp] = useState('');
  const [jumlahTiket, setJumlahTiket] = useState(1);
  const [pemandu, setPemandu] = useState('0');
  const [metodePembayaran, setMetodePembayaran] = useState('');
  const navigate = useNavigate();

  const handleNamaChange = (e) => setNama(e.target.value);
  const handleNomorHpChange = (e) => setNomorHp(e.target.value);
  const handleJumlahTiketChange = (e) => setJumlahTiket(e.target.value);
  const handlePemanduChange = (e) => setPemandu(e.target.value);
  const handleMetodePembayaranChange = (e) => setMetodePembayaran(e.target.value);


  const totalHarga = jumlahTiket * 25000; // Contoh harga tiket Rp 25.000

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubmit = () => {
    // Arahkan ke halaman konfirmasi tiket
    navigate('/konfirmasitiket');
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="bg-[#6B9C89] text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
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
            <ul className={`md:flex space-x-4 text-sm font-medium ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              <li><a href="/beranda" className="hover:text-gray-200">Beranda</a></li>
              <li><a href="/destinasi" className="hover:text-gray-200">Destinasi Wisata</a></li>
              <li><a href="/panduan" className="hover:text-gray-200">Panduan Booking</a></li>
              <li><a href="/cekkuota" className="hover:text-gray-200">Cek Kuota</a></li>
              <li><a href="/berita" className="hover:text-gray-200">Berita</a></li>
              <li><a href="/penginapan" className="hover:text-gray-200">Penginapan</a></li>
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
          <img src={poto3} alt="Kaligua" className="destination-img w-full md:w-1/2 h-64 md:h-auto object-cover" />
          <div className="p-6 md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Kaligua</h3>
            <p className="text-gray-700 text-sm">
              Kaligua adalah destinasi agrowisata di lereng Gunung Slamet yang menawarkan kebun teh luas, pemandian air panas, gua Jepang, serta aktivitas seperti trekking dan tea walk. Nikmati sunrise di Bukit Kaligua, suasana sejuk, dan konsep ekowisata yang cocok untuk relaksasi dan healing.
            </p>
          </div>
        </div>

                    {/* Destinasi 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center mb-8 bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    src={poto5}
                    alt="Puncak Sakub"
                    className="destination-img w-full md:w-1/2 h-64 md:h-auto object-cover"
                />
                <div className="p-6 md:w-1/2">
                    <h3 className="text-xl font-semibold mb-2">Puncak Sakub</h3>
                    <p className="text-gray-700 text-sm">
                        Puncak Sakub adalah salah satu spot terbaik di Kaligua yang menawarkan pemandangan alam pegunungan yang memukau. Puncak ini terletak di ketinggian sekitar 1.900 meter di atas permukaan laut.
                    </p>
                </div>
            </div>

            {/* Destinasi 3 */}
            <div className="flex flex-col md:flex-row items-center mb-8 bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    src={poto6}
                    alt="Gurun Teh"
                    className="w-full md:w-1/2 h-64 object-cover"
                />
                <div className="p-6 md:w-1/2">
                    <h3 className="text-xl font-semibold mb-2">Gurun Teh</h3>
                    <p className="text-gray-700 text-sm">
                        Gurun Teh merujuk pada hamparan luas perkebunan teh di lereng Gunung Slamet. Pemandangan hijau tak berujung dengan udara sejuk menciptakan pengalaman agrowisata yang menenangkan.
                    </p>
                </div>
            </div>

            {/* Destinasi 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-8 bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    src={poto7}
                    alt="Goa Jepang"
                    className="destination-img w-full md:w-1/2 h-64 md:h-auto object-cover"
                />
                <div className="p-6 md:w-1/2">
                    <h3 className="text-xl font-semibold mb-2">Goa Jepang</h3>
                    <p className="text-gray-700 text-sm">
                        Goa Jepang adalah situs bersejarah dari era Perang Dunia II yang terletak di tengah kebun teh Kaligua. Lorong-lorong gua ini menciptakan pengalaman eksplorasi yang unik.
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
      </div>

      <div className="container mx-auto px-4 py-12">
            {/* Informasi Tambahan */}
            <div className="bg-white shadow-md rounded-lg p-6 my-8">
                <div className="flex flex-wrap justify-center gap-6">
                    <button className="flex items-center bg-[#6B9C89] text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#5A8675] focus:outline-none">
                        <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
                        Harga tiket dapat berubah sewaktu-waktu
                    </button>
                    <button className="flex items-center bg-[#6B9C89] text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#5A8675] focus:outline-none">
                        <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
                        Objek wisata dapat tutup sewaktu-waktu
                    </button>
                    <button className="flex items-center bg-[#6B9C89] text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#5A8675] focus:outline-none">
                        <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
                        1 tiket hanya berlaku untuk satu orang
                    </button>
                    <button className="flex items-center bg-[#6B9C89] text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#5A8675] focus:outline-none">
                        <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
                        1 tiket untuk 4 destinasi wisata
                    </button>
                    <button className="flex items-center bg-[#6B9C89] text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#5A8675] focus:outline-none">
                        <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
                        1 pemandu hanya berlaku untuk 10 orang
                    </button>
                </div>
            </div>

            {/* Form Pemesanan */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-center mb-6">Form Pemesanan (Booking) Tiket</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Formulir Pengisian */}
                    <div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                            <input
                                type="text"
                                value={nama}
                                onChange={handleNamaChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9C89]"
                                placeholder="Masukkan nama lengkap"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">No. HP</label>
                            <input
                                type="text"
                                value={nomorHp}
                                onChange={handleNomorHpChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9C89]"
                                placeholder="Masukkan nomor HP"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Jumlah Tiket</label>
                            <input
                                type="number"
                                min="1"
                                value={jumlahTiket}
                                onChange={handleJumlahTiketChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9C89]"
                                placeholder="Masukkan jumlah tiket"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Tambah Pemandu</label>
                            <select
                                value={pemandu}
                                onChange={handlePemanduChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9C89]"
                            >
                                <option value="0">Tidak</option>
                                <option value="1">Ya</option>
                            </select>
                        </div>
                    </div>

                    {/* Ringkasan dan Metode Pembayaran */}
                    <div>
                      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
                        <h4 className="font-semibold text-lg mb-3">Ringkasan Pemesanan</h4>
                        <p><strong>Nama:</strong> {nama}</p>
                        <p><strong>Tiket:</strong> {jumlahTiket}</p>
                        <p><strong>Total:</strong> Rp {totalHarga.toLocaleString()}</p>
                        <p><strong>Metode Pembayaran:</strong> {metodePembayaran || 'Belum dipilih'}</p>
                      </div>

                      <div className="flex justify-center gap-6 mt-6">
                        <label className="flex flex-col items-center justify-center w-44 h-44 bg-[#6B9C89] text-white rounded-xl shadow-lg cursor-pointer">
                          <input
                            type="radio"
                            name="metodePembayaran"
                            value="Tunai"
                            onChange={handleMetodePembayaranChange}
                            className="hidden"
                          />
                          <img src={icon2} alt="Tunai Icon" className="w-100 h-100 mb-2" />
                          <span>Tunai</span>
                        </label>
                        <label className="flex flex-col items-center justify-center w-44 h-44 bg-[#6B9C89] text-white rounded-xl shadow-lg cursor-pointer">
                          <input
                            type="radio"
                            name="metodePembayaran"
                            value="QRIS"
                            onChange={handleMetodePembayaranChange}
                            className="hidden"
                          />
                          <img src={icon1} alt="QRIS Icon" className="w-100 h-100 mb-2" />
                          <span>QRIS</span>
                        </label>
                      </div>
                    </div>
                </div>

                {/* Tombol Pesan */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="mt-6 w-1/2 bg-[#6B9C89] text-white py-2 rounded-lg hover:bg-[#588169]">
                    Pesan
                  </button>
                </div>
            </div>
        </div>

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

export default Destinasi;
