import React, { useState } from 'react';

const AboutUs: React.FC = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleValueClick = (index: number) => {
    setClickedIndex(index);
  };

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      <div className="bg-gray-300 h-96 flex items-center justify-center">
        <img src="/aboutImg01.png" alt="Banner" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="bg-gray-300 w-full lg:w-1/3 flex items-center justify-center">
          <img src="/src/assets/image2.png" alt="Image 2" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col space-y-6">
          <div className="p-4 space-y-2">
            <h2 className="font-bold text-lg">Who We Ae</h2>
            <hr className="border-black" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex vel cursus
              convallis. Phasellus sit amet justo at nunc pharetra dignissim. Curabitur vel orci
              ultricies, gravida urna nec, consequat velit. Integer efficitur diam nec augue mattis
              vehicula. Quisque vitae augue ac nisl fermentum facilisis at et magna.
            </p>
          </div>
          <div className="p-4 space-y-2">
            <h2 className="font-bold text-lg">Why Choose Us</h2>
            <hr className="border-black" />
            <p className="text-sm">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Sed at nulla lorem. Sed at est eget urna ultricies aliquet. Mauris lacinia,
              nisl id feugiat bibendum, erat nisl sodales enim, id molestie metus risus id nulla.
              Aliquam erat volutpat. Morbi suscipit purus sed sollicitudin feugiat.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="bg-gray-200 w-full lg:w-1/2 h-32 flex flex-col items-center justify-center p-4 space-y-2">
          <h2 className="text-xl font-semibold">Vision</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim sapien et
            tortor malesuada, vel luctus nisi pulvinar. Nulla vel justo urna. Vivamus id urna eu
            metus mollis dictum nec sit amet nunc.
          </p>
        </div>
        <div className="bg-gray-200 w-full lg:w-1/2 h-32 flex flex-col items-center justify-center p-4 space-y-2">
          <h2 className="text-xl font-semibold">Mission</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim sapien et
            tortor malesuada, vel luctus nisi pulvinar. Nulla vel justo urna. Vivamus id urna eu
            metus mollis dictum nec sit amet nunc.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="bg-gray-300 w-full sm:w-1/12 h-32 sm:h-auto flex items-center justify-center">
          <div className="transform -rotate-90 sm:rotate-0 font-bold text-sm">KEY VALUES</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 w-full">
          {[
            'Sustainability',
            'Quality',
            'Innovation',
            'Integrity',
            'Customer Focus',
            'Community Engagement',
            'Safety',
            'Responsibility',
            'Teamwork',
            'Excellence',
          ].map((value, index) => (
            <div
              key={value}
              onClick={() => handleValueClick(index)}
              className={`h-16 sm:h-24 flex items-center justify-center text-center text-sm font-bold p-2 border bg-gray-300 hover:bg-blue-${(index + 1) * 100} ${clickedIndex === index ? 'bg-blue-600 text-white' : ''} cursor-pointer`}
              style={{
                opacity: clickedIndex === index ? 1 : 0.75,
                backgroundColor: clickedIndex === index ? 'rgb(37, 99, 235)' : '',
                transition: 'background-color 0.3s, opacity 0.3s',
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
