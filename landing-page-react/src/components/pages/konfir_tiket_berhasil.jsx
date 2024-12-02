import React from 'react';

const KonfirTiketBerhasil = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-8 text-center">
        <img src="../asset/logo/logo.png" alt="Agrowisata Logo" className="h-20 sm:h-20 md:h-32 mx-auto" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-black-700 mb-6">Ticket Berhasil dipesan</h1>

      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm text-center">
        {/* Ceklis Icon */}
        <div className="mb-8 text-center">
          <img src="../asset/icon/icon_ceklis.png" alt="icon ceklis" className="h-20 sm:h-20 md:h-32 mx-auto" />
        </div>
        {/* Message */}
        <p className="text-sm text-black-500 mt-4">
          Segera konfirmasi melalui Whatsapp jika sudah berhasil memesan ticket dan jangan lupa mengunjungi loket untuk pembayaran pemesanan dan pengambilan ticket
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
            className="flex items-center bg-[#6B9C89] text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-400 focus:outline-none w-1/2 justify-center"
          >
            <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default KonfirTiketBerhasil;
