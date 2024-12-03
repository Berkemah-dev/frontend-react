import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/logo.jpg";
import poto16 from "../../assets/poto/qrish.png";

const KonfirmasiTiket = () => {
  const navigate = useNavigate();
  const [qrisProof, setQrisProof] = useState(null); // Untuk menyimpan file bukti pembayaran
  const [fileName, setFileName] = useState(''); // Untuk menyimpan nama file
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoBack = () => {
    navigate(-1); // Navigasi kembali ke halaman sebelumnya
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // Menyimpan nama file yang dipilih
      convertFileToBase64(file);
    }
  };

  // Fungsi untuk mengonversi file menjadi base64
  const convertFileToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setQrisProof(reader.result); // Menyimpan file dalam format base64
    };
    reader.readAsDataURL(file);
  };

  const handleNextPage = async () => {
    if (!qrisProof) {
      alert("Harap unggah bukti pembayaran terlebih dahulu!");
      return;
    }

    // Menyiapkan data JSON
    const data = {
      fullName: "John Doe",
      phoneNumber: "+6281234567890",
      numberOfTickets: 3,
      guideOption: false,
      paymentMethod: "Cash",
      qrisProof: qrisProof, // File sudah dalam format base64
      kuotaId: "674d504957adfd3c830f060d"
    };

    console.log("Data yang akan dikirim:", data); // Log data untuk debugging

    try {
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:5000/api/bookinguser/book-ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Kirim data dalam format JSON
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim data, silakan coba lagi.");
      }

      await response.json();
      navigate("/konfirmasitiketberhasil");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <img src={logo} alt="Agrowisata Logo" className="h-20 sm:h-20 md:h-32 mx-auto" />
      </div>
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Scan di sini!</h1>
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm text-center">
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <img src={poto16} alt="QR Code" className="w-full h-auto" />
        </div>
        <p className="text-sm text-red-500 mt-4">
          Segera konfirmasi melalui WhatsApp jika sudah berhasil melakukan pembayaran dan jangan lupa untuk screenshot bukti transfer.
        </p>

        <div className="flex justify-between items-center space-x-4 mt-6">
          <a
            href="https://wa.me/6284546576871"
            className="flex items-center bg-[#6B9C89] text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#5A8675] focus:outline-none w-1/2 justify-center"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
            084546576871
          </a>
          <button
            onClick={handleGoBack}
            className="flex items-center bg-gray-300 text-gray-700 text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-400 focus:outline-none w-1/2 justify-center"
          >
            Kembali
          </button>
        </div>

        <div className="mt-4">
          <label
            htmlFor="upload-bukti"
            className="flex items-center justify-center bg-blue-500 text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-blue-600 cursor-pointer"
          >
            <span className="mr-2">Upload Bukti Pembayaran</span>
            <input type="file" id="upload-bukti" className="hidden" onChange={handleFileChange} />
          </label>
          {fileName && (
            <p className="text-sm text-gray-600 mt-2">
              File dipilih: <strong>{fileName}</strong>
            </p>
          )}
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          onClick={handleNextPage}
          className={`mt-4 bg-green-500 text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-green-600 w-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Selanjutnya"}
        </button>
      </div>
    </div>
  );
};

export default KonfirmasiTiket;
