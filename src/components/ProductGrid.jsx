import React from 'react';

function ProductGrid({ products, viewProduct }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
      {products.length > 0 ? (
        products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => viewProduct(product)}
          >
            <div className="h-48 bg-gray-200 relative">
              {/* In production, use actual images */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                {product.imageSrc ? (
                  <img 
                    src={product.imageSrc} 
                    alt={product.title} 
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span>{product.title} Image</span>
                )}
              </div>
              <div className="absolute top-2 right-2 bg-[#567257] text-white text-xs font-semibold px-2 py-1 rounded">
                {product.condition}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 truncate">{product.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.category}</p>
              <p className="text-gray-700 text-sm h-12 overflow-hidden">
                {product.description}
              </p>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">{product.owner.name}</span>
                </div>
                <span className="text-sm text-gray-500">{product.location}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-lg text-gray-500">No items found matching your criteria.</p>
          <button 
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => window.location.reload()}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;