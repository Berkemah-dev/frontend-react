import { useState } from 'react';
import logo from "../../assets/logo/logo.jpg"
import icon4 from "../../assets/icon/acarafestival.png"
import Navbar from '../Navbar';

function AcaraFestival() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar/>

      {/* Main Section */}
      <main className="container mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Acara & Festival</h1>
        <div className="mb-8">
          <img src={icon4} alt="Icon ceklis" className="w-72 mx-auto" />
        </div>
        <p className="text-gray-600 text-base">Kunjungi lagi lain kali untuk update Info tentang acara dan festival</p>
      </main>
    </div>
  );
}

export default AcaraFestival;
