import React from 'react';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component for listing items

function ProfilePage({ user }) {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mb-8">
        {/* Profile Image and Information */}
        <div className="md:w-1/3 flex flex-col items-center justify-center mb-6 md:mb-0">
          <img 
            src={user.profilePicture || '/default-profile.jpg'} 
            alt={user.name} 
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 mb-4"
          />
          <h2 className="text-3xl font-semibold">{user.name}</h2>
          <div className="flex items-center mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < user.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
              ))}
            </div>
            <span className="ml-2 text-gray-600">({user.rating}/5)</span>
          </div>
          <p className="text-gray-500 mt-2">{user.location}</p>
        </div>

        {/* Profile Description and Details */}
        <div className="md:w-2/3 mt-6 md:mt-0 md:pl-8">
          <h3 className="text-xl font-semibold mb-4">About {user.name}</h3>
          <p className="text-gray-700">{user.bio}</p>
        </div>
      </div>

      {/* Offers Grid */}
      <h3 className="text-2xl font-semibold mb-6">Offers</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {user.offers && user.offers.length > 0 ? (
          user.offers.map((offer) => (
            <ProductCard key={offer.id} product={offer} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No offers available.</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
