import React from 'react';

function Categories({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-4">Browse Categories</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;