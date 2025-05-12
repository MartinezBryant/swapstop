import React, { useState } from 'react';

function TradeModal({ onClose, product, myItems }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedItem) {
      setErrorMessage('Please select an item to offer');
      return;
    }
    
    // In a real app, you would submit the trade request to your backend
    // For demo, just close the modal
    onClose();
    alert('Trade request sent successfully!');
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative max-h-screen overflow-y-auto">
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        
        <h2 className="text-2xl font-bold mb-6">Request to Swap</h2>
        
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">You want:</h3>
            <div className="border rounded-lg p-4 flex items-center">
              <div className="w-20 h-20 bg-gray-200 rounded mr-4">
                {product.imageSrc && (
                  <img 
                    src={product.imageSrc} 
                    alt={product.title} 
                    className="w-full h-full object-cover rounded"
                  />
                )}
              </div>
              <div>
                <h4 className="font-medium">{product.title}</h4>
                <p className="text-sm text-gray-500">{product.condition}</p>
                <p className="text-sm text-gray-500">{product.owner.name}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">You offer:</h3>
            {myItems.length > 0 ? (
              <div className="space-y-3">
                {myItems.map((item) => (
                  <div 
                    key={item.id} 
                    className={`border rounded-lg p-3 flex items-center cursor-pointer ${
                      selectedItem === item.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedItem(item.id)}
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded mr-3">
                      {item.imageSrc && (
                        <img 
                          src={item.imageSrc} 
                          alt={item.title} 
                          className="w-full h-full object-cover rounded"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.condition}</p>
                    </div>
                    <div className="ml-auto">
                      <div className={`w-5 h-5 rounded-full border ${
                        selectedItem === item.id 
                          ? 'border-blue-500 bg-blue-500' 
                          : 'border-gray-300'
                      }`}>
                        {selectedItem === item.id && (
                          <span className="text-white flex justify-center items-center h-full">✓</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed rounded-lg p-4 text-center">
                <p className="text-gray-500">You don't have any items to offer yet.</p>
                <button className="text-blue-600 mt-2 hover:underline">
                  Add your first item
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message (Optional)
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            placeholder="Introduce yourself and explain why you're interested in swapping for this item..."
          ></textarea>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Send Swap Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default TradeModal;