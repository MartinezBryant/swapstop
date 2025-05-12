import React from 'react';

function ProductDetail({ product, setShowTradeModal, isLoggedIn, setShowLoginModal, viewProfile }) {
  const handleTradeRequest = () => {
    if (isLoggedIn) {
      setShowTradeModal(true);
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="h-96 bg-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              {product.imageSrc ? (
                <img 
                  src={product.imageSrc} 
                  alt={product.title} 
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-xl">{product.title} Image</span>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/2 p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <span className="bg-[#567257] text-white text-sm font-semibold px-3 py-1 rounded">
              {product.condition}
            </span>
          </div>

          <p className="text-gray-500 mb-4">{product.category}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-700 flex items-center">
              <span className="mr-2">📍</span> {product.location}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Owner</h3>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <p 
                  className="font-medium text-blue-600 cursor-pointer hover:underline"
                  onClick={() => viewProfile(product.owner)}
                >
                  {product.owner.name}
                </p>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < product.owner.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleTradeRequest}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Request Trade
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
