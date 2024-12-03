import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom
import logo from "../../assets/logo/logo.jpg"
import Navbar from '../Navbar';

function Berita() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar/>

{/* Main Content */}
<section className="container mx-auto px-6 lg:px-12 py-8">
  <h1 className="text-2xl lg:text-4xl font-bold text-center text-gray-700 mb-6">Agro Wisata Kaligua</h1>
  <h2 className="text-xl lg:text-3xl font-semibold text-center text-gray-700 mb-8">Informasi Seputar Kaligua</h2>

  <div className="content text-gray-800 leading-relaxed text-justify">
    <p className="mb-4"><strong>Agro Wisata Kaligua</strong> adalah salah satu destinasi wisata alam yang menawarkan keindahan perkebunan teh, pesona pegunungan, serta pengalaman edukasi seputar pertanian. Terletak di lereng Gunung Slamet, Kabupaten Brebes, Jawa Tengah, Kaligua menjadi tempat yang cocok untuk menikmati suasana alam pegunungan yang sejuk serta pemandangan yang hijau memanjakan mata.</p>

    <p className="mb-4"><strong>Sejarah dan Latar Belakang</strong><br />
      Perkebunan teh Kaligua didirikan oleh pemerintah kolonial Belanda pada tahun 1889 dan hingga kini masih menjadi salah satu perkebunan teh tertua di Indonesia. Awalnya, perkebunan ini difokuskan pada produksi teh hitam berkualitas ekspor, tetapi seiring berjalannya waktu, potensi wisatanya mulai digarap oleh pengelola dengan mengembangkan konsep agrowisata. Melalui konsep ini, pengunjung tidak hanya bisa menikmati wisata alam, tetapi juga bisa belajar tentang proses produksi teh dari awal hingga siap dipasarkan.
    </p>

    <p className="mb-4"><strong>Daya Tarik Wisata</strong><br />
      Salah satu daya tarik utama dari Agro Wisata Kaligua adalah luasnya hamparan perkebunan teh yang menghijau, dengan latar belakang pegunungan yang megah. Pengunjung dapat mengikuti tur ke pabrik pengolahan teh, di mana mereka akan diperlihatkan proses pengolahan daun teh hingga menjadi produk siap jual. Selain itu, tersedia juga area edukasi tentang cara penanaman, perawatan tanaman teh, hingga praktik memetik daun teh yang baik dan benar.
    </p>

    <p className="mb-4">Agro Wisata Kaligua juga menawarkan sejumlah spot wisata alam yang menarik. Salah satu yang terkenal adalah Mata Air Tuk Bening, yang merupakan sumber mata air jernih di kawasan ini. Mata air ini dipercaya oleh warga sekitar memiliki khasiat kesehatan, sehingga banyak pengunjung yang tertarik untuk berkunjung dan merasakan air segar langsung dari sumbernya.</p>

    <p className="mb-4">Tidak jauh dari Mata Air Tuk Bening, terdapat Gua Jepang, peninggalan sejarah dari masa penjajahan Jepang. Gua ini dulunya digunakan sebagai tempat persembunyian dan penyimpanan senjata oleh tentara Jepang. Saat ini, gua tersebut menjadi salah satu daya tarik bagi pengunjung yang ingin mengetahui lebih banyak tentang sejarah Kaligua.</p>

    <p className="mb-4">Selain itu, bagi para pencinta alam dan petualang, Puncak Sakub menawarkan pengalaman mendaki yang menantang dengan pemandangan spektakuler di puncaknya. Dari ketinggian ini, pengunjung dapat melihat panorama perbukitan, hamparan perkebunan teh, serta jika beruntung, pemandangan laut selatan di kejauhan.</p>

    <p className="mb-4"><strong>Fasilitas yang Tersedia</strong><br />
      Agro Wisata Kaligua telah dilengkapi dengan fasilitas yang cukup memadai. Di area ini, terdapat penginapan dengan konsep rumah teh, yang memungkinkan pengunjung merasakan suasana pedesaan dan tenang. Restoran yang ada di kawasan ini juga menawarkan makanan khas Brebes serta minuman teh khas Kaligua yang bisa dinikmati langsung di tengah perkebunan. Selain itu, tersedia tempat parkir yang luas, area bermain anak, serta toko oleh-oleh yang menjual berbagai produk teh dan kerajinan lokal.
    </p>

    <p className="mb-4"><strong>Akses dan Lokasi</strong><br />
      Untuk mencapai Agro Wisata Kaligua, pengunjung bisa menempuh perjalanan dari kota Purwokerto atau Tegal. Dari pusat Kota Brebes, jaraknya sekitar 60 km, dan dapat ditempuh dengan mobil dalam waktu kurang lebih 2,5 jam. Jalur menuju kawasan ini cukup menantang dengan jalan berkelok di antara perbukitan, namun pemandangan alam yang disuguhkan sepanjang perjalanan akan membuat perjalanan terasa menyenangkan.
    </p>
  </div>
</section>


      {/* Action Buttons */}
      <div className="flex justify-center space-x-14 mt-12">
        <Link 
          to="/acara_festival" 
          className="btn bg-[#6B9C89] text-white py-4 px-6 text-xl font-bold rounded-lg transition duration-300 hover:bg-[#558971]"
        >
          Acara & Festival
        </Link>
        <Link 
          to="/acara_festival2" 
          className="btn bg-[#6B9C89] text-white py-4 px-6 text-xl font-bold rounded-lg transition duration-300 hover:bg-[#558971]"
        >
          Perubahan Operasional
        </Link>
      </div>
      <br /><br />

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

export default Berita;
