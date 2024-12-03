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
