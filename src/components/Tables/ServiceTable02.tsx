import React from 'react';

const ServiceTable02: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-sm sm:text-base xl:text-xl 2xl:text-2xl">
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <div className="col-span-1 bg-gray-300 text-gray-700 p-1 sm:p-2 font-semibold rounded-md"></div>
        <div className="col-span-1 bg-black text-white p-1 sm:p-2 font-semibold rounded-xl flex justify-center items-center">Size</div>
        <div className="col-span-1 bg-gray-200 text-gray-700 p-1 sm:p-2 font-semibold rounded-xl flex justify-center items-center">Single Pallet (per pallet)</div>
        <div className="col-span-1 bg-gray-200 text-gray-700 p-1 sm:p-2 font-semibold rounded-xl flex justify-center items-center">Double Pallet (per pallet)</div>

        <div className="col-span-1 bg-gray-100 text-gray-700 p-2 rounded-xl flex justify-center items-center">Size 01</div>
        <div className="col-span-1 bg-white text-gray-700 p-2 hover:bg-black/65 hover:text-white">600 mm X 200 mm X 100mm</div>
        <div className="col-span-1 bg-gray-100 text-gray-700 p-2 hover:bg-black/65 hover:text-white">96 Blocks</div>
        <div className="col-span-1 bg-gray-100 text-gray-700 p-2 hover:bg-black/65 hover:text-white">192 Blocks</div>

        <div className="col-span-1 bg-gray-100 text-gray-700 p-2 rounded-xl flex justify-center items-center">Size 01</div>
        <div className="col-span-1 bg-white text-gray-700 p-2 hover:bg-black/65 hover:text-white">600 mm X 200 mm X 150mm</div>
        <div className="col-span-1 bg-gray-100 text-gray-700 p-2 hover:bg-black/65 hover:text-white">64 Blocks</div>
        <div className="col-span-1 bg-gray-100 text-gray-700 p-2 hover:bg-black/65 hover:text-white">128 Blocks</div>

        <div className="col-span-1 bg-gray-100 text-gray-700 p-2 rounded-xl flex justify-center items-center">Size 01</div>
        <div className="col-span-1 bg-white text-gray-700 p-2 hover:bg-black/65 hover:text-white">600 mm X 200 mm X 200mm</div>
        <div className="col-span-1 bg-gray-100 text-gray-700 p-2 hover:bg-black/65 hover:text-white">48 Blocks</div>
        <div className="col-span-1 bg-gray-100 text-gray-700 p-2 hover:bg-black/65 hover:text-white">96 Blocks</div>
      </div>
    </div>
  );
};

export default ServiceTable02;
