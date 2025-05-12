import React from 'react';

function Header({ 
  setShowLoginModal, 
  setShowSignupModal, 
  setShowListingModal,
  isLoggedIn, 
  setIsLoggedIn,
  setCurrentPage,
  searchQuery,
  setSearchQuery,
  handleSearch
}) {
  return (
    <header className="bg-[#2E2D1D] text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 
            className="text-2xl font-bold cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            SwapStop
          </h1>
        </div>
        
        <div className="flex-1 mx-8">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search items to swap..."
              className="w-full py-2 px-4 rounded-md dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              🔍
            </button>
          </form>
        </div>
        
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <button 
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium"
                onClick={() => setShowListingModal(true)}
              >
                Add Listing
              </button>
              <div className="relative group">
                <img 
                  src="/images/avatar.jpg" 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                  <div className="py-1">
                    <a href="#profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
                    <a href="#messages" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Messages</a>
                    <a href="#mylistings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">My Listings</a>
                    <button 
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <button 
                className="text-white hover:underline"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </button>
              <button 
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium"
                onClick={() => setShowSignupModal(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;