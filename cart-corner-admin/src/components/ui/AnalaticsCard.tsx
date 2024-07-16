import React from 'react';

interface TotalProductsCardProps {
  totalProducts?: number;
  inHouseProducts?: number;
  sellersProducts?: number;
}

const AnalyticsCard: React.FC<TotalProductsCardProps> = ({ totalProducts, inHouseProducts, sellersProducts }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-3xl font-bold">{totalProducts}</h2>
          <p className="text-gray-500">Total Products</p>
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7h2l1 10h12l1-10h2M16 7V4a4 4 0 00-8 0v3"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          <p className="text-gray-700">In-house Products</p>
        </div>
        <p className="text-gray-700">{inHouseProducts}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          <p className="text-gray-700">Sellers Products</p>
        </div>
        <p className="text-gray-700">{sellersProducts}</p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
