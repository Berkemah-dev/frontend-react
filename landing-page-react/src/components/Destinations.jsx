// src/components/Destinations.jsx
const Destinations = () => {
    return (
      <section className="bg-gray-50 py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Destinasi</h2>
          <div className="relative group">
            <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-2">
              <div className="flex-shrink-0 w-[400px] h-[250px] relative rounded-lg overflow-hidden snap-start">
                <img src="./asset/poto/Group 1.png" alt="Gurun Teh" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-10 w-full text-white py-3 pl-3 text-lg">Gurun Teh</div>
              </div>
              <div className="flex-shrink-0 w-[400px] h-[250px] relative rounded-lg overflow-hidden snap-start">
                <img src="./asset/poto/Group 5.png" alt="Puncak Sakub" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-10 w-full text-white py-3 pl-3 text-lg">Puncak Sakub</div>
              </div>
              <div className="flex-shrink-0 w-[400px] h-[250px] relative rounded-lg overflow-hidden snap-start">
                <img src="./asset/poto/Group 5.png" alt="Kolam Renang" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-10 w-full text-white py-3 pl-3 text-lg">Kolam Renang</div>
              </div>
            </div>
            {/* Navigation Buttons */}
            <button className="hidden absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-full group-hover:block">&larr;</button>
            <button className="hidden absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-full group-hover:block">&rarr;</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Destinations;
  