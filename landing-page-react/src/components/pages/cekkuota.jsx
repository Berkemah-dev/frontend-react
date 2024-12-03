import { useState, useEffect } from "react";
import logo from "../../assets/logo/logo.jpg";
import Navbar from "../Navbar";

function CekKuota() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [kuotaData, setKuotaData] = useState([]); // Untuk menyimpan data kuota
  const [loading, setLoading] = useState(true); // Untuk menangani status loading
  const [error, setError] = useState(null); // Untuk menangani error

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setShowCalendar(false);
  };

  const handleCalendarClick = () => setShowCalendar(!showCalendar);

  // Mengambil data kuota dari API saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchKuota = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/kuota/all-kuota");
        if (!response.ok) {
          throw new Error("Gagal memuat data kuota.");
        }
        const data = await response.json();
        setKuotaData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchKuota();
  }, []); // Menjalankan hanya sekali setelah komponen dimuat

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
     <Navbar/>

      {/* Main Section */}
      <main className="container mx-auto p-4 md:p-8 flex-1">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Cek Kuota
        </h1>

        {/* Date Picker */}
        <div className="flex flex-col items-start mb-6 relative">
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

          {showCalendar && (
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#6B9C89] w-full md:w-auto"
            />
          )}
        </div>

        {/* Kuota Table */}
        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full table-auto text-center">
              <thead className="bg-[#6B9C89] text-white">
                <tr>
                  <th className="py-3 px-4">Tanggal</th>
                  <th className="py-3 px-4">Destinasi</th>
                  <th className="py-3 px-4">Kuota</th>
                  <th className="py-3 px-4">Sisa Kuota</th>
                </tr>
              </thead>
              <tbody>
                {kuotaData.map((kuota) => (
                  <tr key={kuota._id} className="border-t">
                    <td className="py-3 px-4">{new Date(kuota.tanggal).toLocaleDateString()}</td>
                    <td className="py-3 px-4">{kuota.destinasi}</td>
                    <td className="py-3 px-4">{kuota.kuota}</td>
                    <td className="py-3 px-4">{kuota.sisa_kuota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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
}

export default CekKuota;
