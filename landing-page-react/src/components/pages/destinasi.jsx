import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import poto3 from "../../assets/poto/kaligua.png";
import poto5 from "../../assets/poto/puncaksakub.png";
import poto6 from "../../assets/poto/gurunteh.png";
import poto7 from "../../assets/poto/goajepang.png";
import icon1 from "../../assets/icon/iconqris.png";
import icon2 from "../../assets/icon/icontunai.png";
import Navbar from '../Navbar';

const Destinasi = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    numberOfTickets: 1,
    guideOption: false,
    paymentMethod: '',
    kuotaId: '',
  });

  const [kuotaList, setKuotaList] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKuota = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/kuota/all-kuota');
        setKuotaList(response.data);
      } catch (error) {
        console.error('Error fetching kuota:', error);
      }
    };

    fetchKuota();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.paymentMethod === 'QRIS') {
      navigate('/konfirmasitiket', { state: { formData } });
    } else {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.post(
          'http://localhost:5000/api/bookinguser/book-ticket',
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response?.data?.message || 'Error occurred during booking');
      }
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-12">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Destinasi Wisata</h2>
        </div>

        {/* Destinasi Sections */}
        {[{
          img: poto3, title: "Kaligua", desc: "Kaligua adalah destinasi agrowisata di lereng Gunung Slamet yang menawarkan kebun teh luas, pemandian air panas, gua Jepang, serta aktivitas seperti trekking dan tea walk."
        }, {
          img: poto5, title: "Puncak Sakub", desc: "Puncak Sakub adalah salah satu spot terbaik di Kaligua yang menawarkan pemandangan alam pegunungan yang memukau. Terletak di ketinggian sekitar 1.900 meter di atas permukaan laut."
        }, {
          img: poto6, title: "Gurun Teh", desc: "Hamparan luas perkebunan teh di lereng Gunung Slamet. Pemandangan hijau tak berujung menciptakan pengalaman agrowisata yang menenangkan."
        }, {
          img: poto7, title: "Goa Jepang", desc: "Situs bersejarah dari era Perang Dunia II yang terletak di tengah kebun teh Kaligua. Lorong-lorong gua ini menciptakan pengalaman eksplorasi unik."
        }].map(({ img, title, desc }, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-8 bg-white shadow-md rounded-lg overflow-hidden`}>
            <img src={img} alt={title} className="destination-img w-full md:w-1/2 h-64 md:h-auto object-cover" />
            <div className="p-6 md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          </div>
        ))}

        {/* Form Section */}
        <div className="bg-white shadow-md rounded-lg p-8 my-8">
          <h3 className="text-xl font-semibold text-center mb-6">Form Pemesanan Tiket</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Fields */}
            <div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9C89] bg-gray-100"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">No. HP</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9C89] bg-gray-100"
                  placeholder="Masukkan nomor HP"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Jumlah Tiket</label>
                <input
                  type="number"
                  name="numberOfTickets"
                  min="1"
                  value={formData.numberOfTickets}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9C89] bg-gray-100"
                  placeholder="Masukkan jumlah tiket"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Tambah Pemandu</label>
                  <select
                    name="guideOption"
                    value={formData.guideOption}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9C89] bg-gray-100">
                    <option value={false}>Tidak</option>
                    <option value={true}>Ya</option>
                  </select>
              </div>

            </div>
            

            {/* Payment Section */}
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold mb-4">Metode Pembayaran</h4>
              <div className="flex gap-8">
                {[
                  { method: "QRIS", icon: icon1 },
                  { method: "cash", icon: icon2 },
                ].map(({ method, icon }, idx) => (
                  <div
                    key={idx}
                    onClick={() => setFormData({ ...formData, paymentMethod: method })}
                    className={`cursor-pointer p-6 border-2 rounded-lg ${
                      formData.paymentMethod === method
                        ? "border-[#6B9C89]"
                        : "border-gray-300"
                    }`}
                  >
                    <img src={icon} alt={method} className="w-16 h-16 mx-auto" />
                    <p className="text-center mt-2 text-sm">{method}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Destinasi (Kuota ID)</label>
              <select
                name="kuotaId"
                value={formData.kuotaId}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B9C89] bg-gray-100"
                required
              >
                <option value="">Pilih Destinasi</option>
                {kuotaList.map((kuota) => (
                  <option key={kuota._id} value={kuota._id}>
                    {kuota.destinasi} - {kuota.sisa_kuota} seats available
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-1/2 bg-[#6B9C89] text-white py-2 rounded-lg hover:bg-[#588169]"
              >
                Pesan Tiket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Destinasi;
