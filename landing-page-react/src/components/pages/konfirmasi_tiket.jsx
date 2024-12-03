import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo/logo.jpg';
import qrImage from '../../assets/poto/qrish.png'; // Sesuaikan dengan lokasi gambar Anda

const KonfirmasiTiket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  const [message, setMessage] = useState('');
  const [qrisProof, setQrisProof] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!formData) {
      navigate('/');
    }
  }, [formData, navigate]);

  const handleQrisProofChange = (e) => {
    setQrisProof(e.target.files[0]);
  };

  const handleConfirm = async () => {
    if (formData.paymentMethod === 'QRIS' && !qrisProof) {
      setMessage('Please upload the QRIS proof.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    formDataToSend.append('numberOfTickets', formData.numberOfTickets);
    formDataToSend.append('guideOption', formData.guideOption);
    formDataToSend.append('paymentMethod', formData.paymentMethod);
    formDataToSend.append('kuotaId', formData.kuotaId);

    if (qrisProof) {
      formDataToSend.append('qrisProof', qrisProof);
    }

    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/bookinguser/book-ticket',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
      navigate('/konfirmasitiketberhasil');
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred while confirming the booking.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-8 text-center">
        <img src={logo} alt="Agrowisata Logo" className="h-20 sm:h-20 md:h-32 mx-auto" />
      </div>

      <h1 className="text-2xl font-bold text-gray-700 mb-6">Scan di sini!</h1>

      {formData ? (
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm text-center">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <img src={qrImage} alt="QR Code" className="w-full h-auto" />
          </div>

          <div className="text-left space-y-2 mt-4">
            <p><strong>Full Name:</strong> {formData.fullName}</p>
            <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
            <p><strong>Number of Tickets:</strong> {formData.numberOfTickets}</p>
            <p><strong>Guide Option:</strong> {formData.guideOption ? 'With Guide' : 'No Guide'}</p>
            <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
            <p><strong>Quota ID:</strong> {formData.kuotaId}</p>
          </div>

          {formData.paymentMethod === 'QRIS' && (
            <div className="mt-4">
              <label htmlFor="upload-bukti" className="block text-gray-700 font-medium">
                Upload QRIS Proof:
              </label>
              <input
                type="file"
                id="upload-bukti"
                className="w-full border rounded p-2"
                onChange={handleQrisProofChange}
                accept="image/*"
              />
            </div>
          )}

          <div className="flex justify-between items-center space-x-4 mt-6">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/628456789"
              className="flex items-center bg-[#6B9C89] text-white text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#5A8675] focus:outline-none w-1/2 justify-center"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
              08456789
            </a>

            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center bg-gray-300 text-gray-700 text-base font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-400 focus:outline-none w-1/2 justify-center"
            >
              Kembali
            </button>
          </div>

          <div className="mt-4">
            <button
              onClick={handleConfirm}
              disabled={loading}
              className={`w-full bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Processing...' : 'Confirm'}
            </button>
          </div>
        </div>
      ) : (
        <p>No data available to confirm booking.</p>
      )}

      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default KonfirmasiTiket;
