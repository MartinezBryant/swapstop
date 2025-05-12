import React from 'react';

function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#567257] to-[#383515] text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            Swap Don't Shop
          </h2>
          <p className="text-xl mb-6">
            Join thousands of people exchanging items instead of buying new. 
            Find things you love and trade items you no longer need.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
              Browse Items
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              How It Works
            </button>
          </div>
        </div>
        
       <div className="md:w-1/2 flex justify-center">
  <div className="relative">
    {/* Main Hero Image */}
    <img
      src="/images/hero.jpg"
      alt="People exchanging items"
      className="w-80 h-80 object-cover rounded-lg shadow-2xl"
    />

    {/* Item 1 */}
    <img
      src="/images/item1.jpg"
      alt="Traded item 1"
      className="absolute -bottom-4 -left-4 w-40 h-40 object-cover rounded-lg shadow-xl"
    />

    {/* Item 2 */}
    <img
      src="/images/item2.jpg"
      alt="Traded item 2"
      className="absolute -top-4 -right-4 w-40 h-40 object-cover rounded-lg shadow-xl"
    />
  </div>
</div>
      </div>
    </div>
  );
}

export default Hero;