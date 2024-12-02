import { useState } from 'react';
import logo from "../../assets/logo/logo.jpg"

function CekKuota() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setShowCalendar(false); // Close the calendar after selecting a date
  };

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
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
            <button onClick={toggleMenu} className="block md:hidden text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            {/* Menu Items */}
            <ul className={`hidden md:flex space-x-4 text-sm font-medium ${menuOpen ? 'block' : 'hidden'}`}>
              <li><a href="beranda.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Beranda</a></li>
              <li><a href="destinasi.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Destinasi Wisata</a></li>
              <li><a href="panduan.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Panduan Booking</a></li>
              <li><a href="cekkuota.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Cek Kuota</a></li>
              <li><a href="berita.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Berita</a></li>
              <li><a href="penginapan.html" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Penginapan</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="space-y-4 text-center py-4">
            <li><a href="index.html" className="block hover:text-gray-200">Beranda</a></li>
            <li><a href="destinasi.html" className="block hover:text-gray-200">Destinasi Wisata</a></li>
            <li><a href="panduan.html" className="block hover:text-gray-200">Panduan Booking</a></li>
            <li><a href="cekkuota.html" className="block hover:text-gray-200">Cek Kuota</a></li>
            <li><a href="berita.html" className="block hover:text-gray-200">Berita</a></li>
            <li><a href="penginapan.html" className="block hover:text-gray-200">Penginapan</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Section */}
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">Cek Kuota</h1>

        {/* Date Picker Button */}
        <div className="flex flex-col justify-start items-start mb-6 relative">
  {/* Button untuk menampilkan Date Picker */}
  <button
    onClick={handleCalendarClick}
    className="flex items-center bg-[#6B9C89] text-white py-2 px-4 rounded shadow hover:bg-[#5A8675] focus:outline-none"
  >
    Pilih Tanggal
    <img
      src="https://img.icons8.com/ios/50/ffffff/calendar.png"
      alt="Calendar Icon"
      className="w-5 h-5 ml-2"
    />
  </button>

  {/* Input Date Picker */}
  {showCalendar && (
    <input
      type="date"
      id="datePicker"
      value={selectedDate}
      onChange={handleDateChange}
      className="mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#6B9C89]"
    />
  )}
</div>


        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto text-center">
            <thead className="bg-[#6B9C89] text-white">
              <tr>
                <th className="py-3 px-2 md:px-4">Tanggal</th>
                <th className="py-3 px-2 md:px-4">Destinasi Kunjungan Wisata</th>
                <th className="py-3 px-2 md:px-4">Kuota</th>
                <th className="py-3 px-2 md:px-4">Sisa Kuota</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3 px-2 md:px-4">1-10-2024</td>
                <td className="py-3 px-2 md:px-4">Kaligua</td>
                <td className="py-3 px-2 md:px-4">20</td>
                <td className="py-3 px-2 md:px-4">80</td>
              </tr>
            </tbody>
          </table>
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
        <div className="text-center mt-8 text-sm text-gray-300">
          &copy; 2024 Agrowisata Kaligua Brebes. Semua Hak Cipta Dilindungi.
        </div>
      </footer>
    </div>
  );
}

export default CekKuota;
