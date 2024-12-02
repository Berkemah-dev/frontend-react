// src/components/BookingGuide.jsx
const BookingGuide = () => {
    return (
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto flex items-center">
          <div className="mr-6">
            <img src="./asset/poto/panduan.png" alt="Panduan Booking Icon" className="w-32 h-32" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Panduan Booking</h2>
            <p className="text-gray-600 mb-6">Lihat tata cara untuk booking selengkapnya</p>
            <a href="#" className="bg-[#6B9C89] text-white px-6 py-2 rounded font-medium hover:bg-green-700">Lihat Panduan</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default BookingGuide;
  