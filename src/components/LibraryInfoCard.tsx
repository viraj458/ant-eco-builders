import React from 'react';
import { useNavigate } from 'react-router-dom';

interface InfoCardProps {
  title: string;
  description: string;
}

const LibraryInfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/library');
  };

  return (
    <div className="bg-gray-300 p-4 rounded shadow hover:bg-gray-400 transition-all cursor-pointer text-white bg-img">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4 text-justify">{description}</p>
      <hr className="border-white w-full" />
      <button
        onClick={handleReadMore}
        className="mt-2 text-gray-400 hover:underline focus:outline-none"
      >
        Read More
      </button>
      <hr className="border-white w-full mt-4" />
    </div>
  );
};

export default LibraryInfoCard;
