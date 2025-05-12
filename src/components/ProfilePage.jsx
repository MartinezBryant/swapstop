import React, { useState } from 'react';
import ProductCard from './ProductCard';

// Report Modal Component
const ReportModal = ({ user, onClose }) => {
  const [reason, setReason] = useState('');
  
  const handleSubmit = () => {
    alert(`Reported ${user.name} for: ${reason}`);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-full">
        <h4 className="text-xl font-bold mb-4">Report {user.name}</h4>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4 h-32"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter reason for reporting this user..."
        />
        <div className="flex justify-end space-x-2">
          <button 
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}>
            Cancel
          </button>
          <button 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleSubmit}>
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
};

// Main ProfilePage Component
const ProfilePage = ({ user, viewProduct = () => {} }) => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [activeTab, setActiveTab] = useState('listed'); // 'listed' or 'sold'
  
  // Fallback for missing data
  const safeUser = {
    name: user.name || 'User',
    rating: user.rating || 0,
    bio: user.bio || 'No bio available',
    location: user.location || 'Location not provided',
    joinDate: user.joinDate || 'Unknown',
    profilePicture: user.profilePicture || '/api/placeholder/150/150',
    listedItems: user.listedItems || [],
    soldItems: user.soldItems || []
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Image */}
          <div className="w-32 h-32 md:mr-8 mb-4 md:mb-0">
            <img 
              src={safeUser.profilePicture || '/api/placeholder/128/128'} 
              alt={`${safeUser.name}'s profile`} 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          {/* Profile Information */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <h1 className="text-3xl font-bold">{safeUser.name}</h1>
              <button 
                onClick={() => setShowReportModal(true)}
                className="mt-2 md:mt-0 px-3 py-1 text-sm text-gray-600 hover:text-red-500 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Report User
              </button>
            </div>
            
            <div className="flex items-center justify-center md:justify-start mt-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.floor(safeUser.rating) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    )}
                  </span>
                ))}
                <span className="ml-2 text-gray-600">({safeUser.rating}/5)</span>
              </div>
            </div>
            
            <div className="mt-2 flex flex-col md:flex-row md:items-center text-gray-600">
              <div className="flex items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Joined: {safeUser.joinDate}
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {safeUser.location}
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Description */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">About {safeUser.name}</h2>
          <p className="text-gray-700">{safeUser.bio}</p>
        </div>
      </div>
      
      {/* Tabs for Listed and Sold Items */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('listed')}
              className={`py-4 px-1 font-medium text-sm border-b-2 ${
                activeTab === 'listed'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Listed Items
            </button>
            <button
              onClick={() => setActiveTab('sold')}
              className={`py-4 px-1 font-medium text-sm border-b-2 ${
                activeTab === 'sold'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Sold Items
            </button>
          </nav>
        </div>
      </div>
      
      {/* Items Grid */}
      <div className="mt-6">
        {activeTab === 'listed' ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Listed Items</h2>
            {safeUser.listedItems && safeUser.listedItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {safeUser.listedItems.map((item) => (
                  <div key={item.id} onClick={() => viewProduct(item)}>
                    <ProductCard product={item} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No listed items available.</p>
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Sold Items</h2>
            {safeUser.soldItems && safeUser.soldItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {safeUser.soldItems.map((item) => (
                  <div key={item.id} onClick={() => viewProduct(item)}>
                    <ProductCard product={item} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No sold items available.</p>
            )}
          </>
        )}
      </div>
      
      {/* Report Modal */}
      {showReportModal && (
        <ReportModal user={safeUser} onClose={() => setShowReportModal(false)} />
      )}
    </div>
  );
};

export default ProfilePage;