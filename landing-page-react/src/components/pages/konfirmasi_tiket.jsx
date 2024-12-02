import React from 'react';

const KonfirmasiTiket = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleNextPage = () => {
    // Redirect to the next page (You can modify this URL as needed)
    window.location.href = 'konfir_tiket_berhasil.html';
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-8 text-center">
        <img src="../asset/logo/logo.png" alt="Agrowisata Logo" className="h-20 sm:h-20 md:h-32 mx-auto" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Scan di sini!</h1>

      {/* QRIS Card Section */}
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm text-center">
        {/* QRIS Card */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <img src="../asset/poto/qrish.png" alt="QR Code" className="w-full h-auto" />
        </div>

        {/* Payment Instruction */}
        <p className="text-sm text-red-500 mt-4">
          Segera konfirmasi melalui WhatsApp jika sudah berhasil melakukan pembayaran dan jangan lupa untuk screenshot bukti transfer.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-between items-center space-x-4 mt-6">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/628456789"
            className="flex items-center bg-[#6B9C89] text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#5A8675] focus:outline-none w-1/2 justify-center"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
            08456789
          </a>

          {/* Go Back Button */}
          <button
            onClick={handleGoBack}
            className="flex items-center bg-gray-300 text-gray-700 text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-400 focus:outline-none w-1/2 justify-center"
          >
            <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
            Kembali
          </button>
        </div>

        {/* Upload Payment Proof */}
        <div className="mt-4">
          <label
            htmlFor="upload-bukti"
            className="flex items-center justify-center bg-blue-500 text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-blue-600 cursor-pointer"
          >
            <span className="mr-2">Upload Bukti Pembayaran</span>
            <input type="file" id="upload-bukti" className="hidden" />
          </label>
        </div>

        {/* Next Button */}
        <div className="mt-4">
          <button
            onClick={handleNextPage}
            className="flex items-center justify-center bg-green-500 text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-green-600 focus:outline-none cursor-pointer w-full"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default KonfirmasiTiket;
