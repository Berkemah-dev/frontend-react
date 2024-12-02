import { useState, useEffect } from "react";
import logo from "../../assets/logo/logo.jpg";

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
      <nav className="bg-[#6B9C89] text-white px-6 py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-8" />
            <ul className="hidden md:flex space-x-4 text-sm font-medium">
              <li><a href="/beranda" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Beranda</a></li>
              <li><a href="/destinasi" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Destinasi Wisata</a></li>
              <li><a href="/panduan" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Panduan Booking</a></li>
              <li><a href="/cekkuota" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Cek Kuota</a></li>
              <li><a href="/berita" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Berita</a></li>
              <li><a href="/penginapan" className="hover:text-gray-200 border-b-2 border-transparent hover:border-white">Penginapan</a></li>
            </ul>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
          <ul className="space-y-4 text-center py-4">
            <li><a href="/beranda" className="block hover:text-gray-200">Beranda</a></li>
            <li><a href="/destinasi" className="block hover:text-gray-200">Destinasi Wisata</a></li>
            <li><a href="/panduan" className="block hover:text-gray-200">Panduan Booking</a></li>
            <li><a href="/cekkuota" className="block hover:text-gray-200">Cek Kuota</a></li>
            <li><a href="/berita" className="block hover:text-gray-200">Berita</a></li>
            <li><a href="/penginapan" className="block hover:text-gray-200">Penginapan</a></li>
          </ul>
        </div>
      </nav>

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
                    <td className="py-3 px-4">{kuota.date}</td>
                    <td className="py-3 px-4">{kuota.destinasi}</td>
                    <td className="py-3 px-4">{kuota.total}</td>
                    <td className="py-3 px-4">{kuota.sisa}</td>
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
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="h-30 mb-4" />
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
