import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { PieChart } from '@mantine/charts';
import PImage1 from "/src/assets/pimage1.jpg";
import Pmage2 from "/img7.png";

const EcoFriendlyComponent: React.FC = () => {
  const data = [
    { name: 'Traditional Bricks', value: 60, color: 'red' },
    { name: 'Concrete Blocks', value: 25, color: 'orange' },
    { name: 'ANT AAC Block', value: 15, color: 'green' },
  ];

  const descriptions: { [key: string]: string } = {
    "Eco-friendly": "The production of AAC blocks typically involves less energy and raw materials compared to traditional concrete blocks. Additionally, they are often made from recycled materials and are recyclable themselves, contributing to sustainability.",
    "Lightweight": "AAC blocks are significantly lighter than traditional concrete blocks, making them easier to handle and reducing the load on the structure. This can also lead to lower transportation costs and easier installation.",
    "Fast Installation": "AAC blocks are designed for quick and efficient assembly due to their lightweight nature and precise dimensions. Their ease of handling and the ability to use thin-set mortar significantly speed up the construction process. This reduces labour time and accelerates project completion compared to traditional masonry materials.",
    "Fire-resistant": "AAC blocks are highly fire-resistant due to their composition and structure. They can withstand high temperatures and contribute to fire safety in buildings.",
    "Durable": "AAC blocks exhibit consistent quality and precision due to their controlled manufacturing process. They have uniform dimensions and densities, which ensures a high level of structural integrity and reduces issues such as uneven surfaces or gaps. This reliability enhances overall building performance and durability.",
    "Soundproof": "The cellular structure of AAC blocks provides good sound insulation, making them effective in reducing noise transmission between rooms and from outside.",
    "Cost-effective": "The combined benefits of reduced material usage, faster construction time, and lower energy consumption contribute to overall cost savings. AAC blocks are an economical choice for various construction projects.",
    "Energy-efficient": "AAC blocks provide excellent thermal insulation, reducing the need for additional heating or cooling in buildings. This leads to energy savings and contributes to a more sustainable environment."
  };

  const [selectedDescription, setSelectedDescription] = useState("Eco-friendly");

  return (
    <div className="bg-gray-100 max-w-[1600px] mx-auto">
      <div className="bg-green-500 h-[150px] sm:h-auto flex items-center justify-center mb-4">
        <img src={PImage1} alt="Eco-friendly shows in green theme" className="h-full w-full" />
        <span className="absolute">
          <div className="flex flex-col justify-center items-center">
            <p className="uppercase text-xl sm:text-3xl lg:text-6xl font-semibold cursor-pointer">the world's best aac</p> 
            <p className="uppercase text-xl sm:text-3xl lg:text-6xl font-semibold cursor-pointer">blocks</p>
            <p className="bg-black text-base lg:text-2xl text-white p-2 px-3 mt-5 rounded-md cursor-pointer">Bring your home closer to nature</p>
          </div>
        </span>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 bg-gray-200 mb-4 p-4 flex items-center justify-center">
          <img src={Pmage2} alt="Image 2" className="h-full w-full" />
        </div>
        <div className="w-full lg:w-2/3 p-4">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">ANT AAC Block</h2>
            <p className="text-gray-500 mb-4">
              ANT AAC Blocks are the next generation of building materials designed for superior performance and sustainability. Made from Autoclaved Aerated Concrete (AAC), these blocks offer a lightweight, durable, and eco-friendly alternative to traditional bricks, perfect for modern construction needs. This will become Innovative, Sustainable, and High-Performance Building Solutions.
            </p>
            <p className="text-gray-500 mb-4">
              Choosing ANT AAC Blocks means investing in a product that prioritizes quality, sustainability, and efficiency. Whether you’re constructing a new building or renovating an existing one, our AAC blocks provide the perfect balance of strength, durability, and environmental responsibility.
            </p>
            <p className="text-gray-500 mb-4">
              Experience the future of construction with ANT AAC Blocks, and build with confidence, knowing you’re making a positive impact on both your project and the planet.
            </p>
            <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 flex items-center justify-center">
              <span className="mr-2">Download Brochure</span>
              <FiDownload />
            </button>
          </div>
          <h3 className="text-lg font-bold mb-4">
            Advantages of ANT AAC Block
          </h3>
          <div className="mb-0 bg-gray-200 p-4 rounded">
            <div className="flex flex-col lg:flex-row">
              <ul className="flex-1 mb-4 lg:mb-0 lg:mr-4">
                {Object.keys(descriptions).map((key) => (
                  <li
                    key={key}
                    className={`mb-2 cursor-pointer hover:text-gray-200 ${
                      selectedDescription === key ? 'bg-black text-white p-2 rounded' : ''
                    }`}
                    onClick={() => setSelectedDescription(key)}
                  >
                    {key}
                  </li>
                ))}
              </ul>
              <div className="flex-1 bg-gray-300 p-4 rounded">
                <p className="border-b border-dashed border-gray-400 mb-4">
                  {descriptions[selectedDescription]}
                </p>
                <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                 onClick={() => (window.location.href = "/library")}
                >
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
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2 text-center">Technical Specifications</h3>
        <div className="h-24 bg-gray-300 flex items-center justify-center">
          <p>There is a chart here...</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2 text-center">
          Item comparison with ANT AAC Block
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
