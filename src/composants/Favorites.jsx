import React from 'react';
import Product from './images/Products.png'

const Favorites = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Favorites</h1>
{/* 
      <div className="bg-blue-600 text-white rounded-lg p-8 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-sm mb-2">September 12-22</p>
          <h2 className="text-2xl font-bold mb-2">Enjoy free home delivery in this summer</h2>
          <p className="mb-4">Designer Devices - Pick from trendy Designer Items</p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium">
            Get Started
          </button>
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-4">
            <div className="relative mb-4">
              <img
                src={Product}
                alt="Apple Watch"
                className="w-full h-full object-cover rounded-lg"
              />
                  <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500">
                ❤️
              </button>
            </div>
            <div className="space-y-2">

              <h3 className="font-medium">Apple Watch Series 4</h3>
              
              <p className="text-blue-600 font-bold">$250.00</p>
              <div className="flex items-center">
                <div className="text-yellow-400">★★★★☆</div>
                <span className="text-gray-500 text-sm ml-1">(131)</span>
              </div>
              <button className="w-40 text-sm text-blue-600 hover:text-blue-700 border border-blue-600 rounded-lg py-1">
                Edit Product
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4">
            <div className="relative mb-4">
              <img
                src={Product}
                alt="Apple Watch"
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500">
                ❤️
              </button>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Apple Watch Series 4</h3>
              <p className="text-blue-600 font-bold">$245.00</p>
              <div className="flex items-center">
                <div className="text-yellow-400">★★★★☆</div>
                <span className="text-gray-500 text-sm ml-1">(131)</span>
              </div>
              <button className="w-40 text-sm text-blue-600 hover:text-blue-700 border border-blue-600 rounded-lg py-1">
                Edit Product
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4">
            <div className="relative mb-4">
              <img
                src={Product}
                alt="Apple Watch"
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500">
                ❤️
              </button>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Apple Watch Series 4</h3>
              <p className="text-blue-600 font-bold">$255.00</p>
              <div className="flex items-center">
                <div className="text-yellow-400">★★★★☆</div>
                <span className="text-gray-500 text-sm ml-1">(131)</span>
              </div>
              <button className="w-40 text-sm text-blue-600 hover:text-blue-700 border border-blue-600 rounded-lg py-1">
                Edit Product
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* niareel carte */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4">
            <div className="relative mb-4">
              <img
                src={Product}
                alt="Apple Watch"
                className="w-full h-full object-cover rounded-lg"
              />
                  <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500">
                ❤️
              </button>
            </div>
            <div className="space-y-2">

              <h3 className="font-medium">Apple Watch Series 4</h3>
              
              <p className="text-blue-600 font-bold">$250.00</p>
              <div className="flex items-center">
                <div className="text-yellow-400">★★★★☆</div>
                <span className="text-gray-500 text-sm ml-1">(131)</span>
              </div>
              <button className="w-40 text-sm text-blue-600 hover:text-blue-700 border border-blue-600 rounded-lg py-1">
                Edit Product
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4">
            <div className="relative mb-4">
              <img
                src={Product}
                alt="Apple Watch"
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500">
                ❤️
              </button>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Apple Watch Series 4</h3>
              <p className="text-blue-600 font-bold">$245.00</p>
              <div className="flex items-center">
                <div className="text-yellow-400">★★★★☆</div>
                <span className="text-gray-500 text-sm ml-1">(131)</span>
              </div>
              <button className="w-40 text-sm text-blue-600 hover:text-blue-700 border border-blue-600 rounded-lg py-1">
                Edit Product
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4">
            <div className="relative mb-4">
              <img
                src={Product}
                alt="Apple Watch"
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500">
                ❤️
              </button>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Apple Watch Series 4</h3>
              <p className="text-blue-600 font-bold">$255.00</p>
              <div className="flex items-center">
                <div className="text-yellow-400">★★★★☆</div>
                <span className="text-gray-500 text-sm ml-1">(131)</span>
              </div>
              <button className="w-40 text-sm text-blue-600 hover:text-blue-700 border border-blue-600 rounded-lg py-1">
                Edit Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;