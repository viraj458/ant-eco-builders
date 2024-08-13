import React from "react";
import { FiDownload } from "react-icons/fi";
import { PieChart } from '@mantine/charts';

const EcoFriendlyComponent: React.FC = () => {
  const data = [
    { name: 'Traditional Bricks', value: 60, color: 'red' },
    { name: 'Concrete Blocks', value: 25, color: 'orange' },
    { name: 'ANT AAC Block', value: 15, color: 'green' },
  ];

  return (
    <div className="bg-gray-100 max-w-[1600px] mx-auto">
      <div className="bg-green-500 h-96 flex items-center justify-center mb-4">
        <img src="/src/assets/image3.png" alt="Eco-friendly shows in green theme" className="h-full w-full" />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 bg-gray-200 mb-4 p-4 flex items-center justify-center">
          <img src="/src/assets/image4.png" alt="Image 2" className="h-full w-full object-cover" />
        </div>
        <div className="w-full lg:w-3/4 p-4">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">ANT AAC Block</h2>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula ex sed justo suscipit, ut placerat eros consequat.
            </p>
            <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 flex items-center justify-center">
              <span className="mr-2">ANT AAC Block</span>
              <FiDownload />
            </button>
          </div>
          <div className="mb-0 bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold mb-4">
              Advantages of ANT AAC Block
            </h3>
            <div className="flex flex-col lg:flex-row">
              <ul className="flex-1 mb-4 lg:mb-0 lg:mr-4">
                <li className="mb-2">Eco-friendly</li>
                <li className="mb-2">Lightweight</li>
                <li className="mb-2">Soundproof</li>
                <li className="mb-2">Fire-resistant</li>
                <li className="mb-2">Durable</li>
                <li className="mb-2">Cost-effective</li>
                <li className="mb-2">Energy-efficient</li>
              </ul>
              <div className="flex-1 bg-gray-300 p-4 rounded">
                <p className="border-b border-dashed border-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                  Library
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2 text-center">Standard Block Sizes</h3>
        <div className="h-24 bg-gray-300 flex items-center justify-center mb-4">
          <p>There is a chart here...</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="w-full md:w-1/3 bg-gray-200  flex items-center justify-center mb-4 md:mb-0">
          <img src="/src/assets/image1.jpg" alt="Picture 01" className="h-full w-full object-cover" />
        </div>
        <div className="w-full md:w-1/3 bg-gray-200  flex items-center justify-center mb-4 md:mb-0 md:mx-2">
          <img src="/src/assets/image2.jpg" alt="Picture 02" className="h-full w-full object-cover" />
        </div>
        <div className="w-full md:w-1/3 bg-gray-200  flex items-center justify-center">
          <img src="/src/assets/image3.jpg" alt="Picture 03" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2 text-center">Technical Specifications</h3>
        <div className="h-24 bg-gray-300 flex items-center justify-center">
          <p>There is a chart here...</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2 text-center">
          Environmental Impact Comparison
        </h3>
        <div className="border-t border-dashed border-gray-400 pt-2">
          {data && data.length > 0 ? (
            <PieChart
              data={data}
            />
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EcoFriendlyComponent;
