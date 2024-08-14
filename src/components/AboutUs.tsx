import React from "react";
import Image2 from "/src/assets/image2.png";

const AboutUs: React.FC = () => {
  // const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // const handleValueClick = (index: number) => {
  //   setClickedIndex(index);
  // };

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      <div className="bg-gray-300 h-96 flex items-center justify-center">
        <img
          src="/img2.png"
          alt="Banner"
          className="w-full h-full border-2 border-black rounded-md opacity-50"
        />
         <span className="absolute">
          <div className="flex flex-col justify-center items-center">
            <p className="uppercase text-xl sm:text-3xl lg:text-6xl font-semibold  cursor-pointer">About ant acc</p> 
            <p className="uppercase text-xl sm:text-3xl lg:text-6xl font-semibold  cursor-pointer">blocks</p>
            <p className="bg-black text-base lg:text-2xl text-white p-2 px-3 mt-5 rounded-md cursor-pointer">Here's little bit of our company</p>
          </div>
        </span>
      </div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="bg-gray-300 w-full lg:w-1/3 flex items-center justify-center">
          <img
            src={Image2}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col space-y-6">
          <div className="p-4 space-y-2">
            {/* <h2 className="font-bold text-lg">Who we are</h2> */}
            <hr className="border-black" />
            <p className="text-sm">
              Welcome to ANT ECO BUILDERS, a leader in innovative construction
              solutions. Our mission is to revolutionize the building industry
              with superior, sustainable, and cost-effective materials and
              services. We are committed to quality and excellence, meeting
              diverse client needs while promoting modern, efficient, and
              eco-friendly structures.
            </p>
          </div>
          <div className="p-4 space-y-2">
            <h2 className="font-bold text-lg">Our Values</h2>
            <hr className="border-black" />
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-semibold">Innovation</span>: Exploring new
                technologies and materials.
              </li>
              <li>
                <span className="font-semibold">Sustainability</span>:
                Prioritizing eco-friendly practices.
              </li>
              <li>
                <span className="font-semibold">Quality</span>: Ensuring durable
                and reliable results.
              </li>
              <li>
                <span className="font-semibold">Customer Focus</span>:
                Delivering customized solutions.
              </li>
            </ul>
            <p className="text-sm">
              With industry experience, we excel in residential and commercial
              projects using cutting-edge materials like Autoclaved Aerated
              Concrete (AAC) blocks.
            </p>
          </div>

          <div className="p-4 space-y-2">
            <h2 className="font-bold text-lg">Why Choose Us</h2>
            <hr className="border-black" />
            <p className="text-sm">
            At ANT ECO BUILDERS, we provide unparalleled construction solutions with a focus on quality, innovation, and sustainability. Our team brings years of industry experience and expertise to every project, ensuring that we meet and exceed expectations.

            </p>
            <p className="text-sm">
            We use advanced materials like Autoclaved Aerated Concrete (AAC) blocks for modern, efficient building solutions. We prioritize eco-friendly practices to reduce our carbon footprint and promote sustainable development. Our customer-centric approach ensures that we deliver customized solutions tailored to your needs. From concept to completion, we offer comprehensive, cost-effective services for residential, commercial, and industrial projects.
            </p>
            <p className="text-sm">
            Choose ANT ECO BUILDERS for excellence, innovation, and sustainability.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="bg-gray-200 w-full h-40 flex flex-col items-center justify-center p-4 space-y-2">
          <h2 className="text-xl font-semibold">Vision</h2>
          <p className="text-sm w-11/12  md:w-2/3 text-center">
          At ANT ECO BUILDERS, we provide unparalleled construction solutions with a focus on quality, innovation, and sustainability. Our team brings years of industry experience and expertise to every project, ensuring that we meet and exceed expectations.
          </p>
        </div>
        {/* <div className="bg-gray-200 w-full lg:w-1/2 h-32 flex flex-col items-center justify-center p-4 space-y-2">
          <h2 className="text-xl font-semibold">Mission</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dignissim sapien et tortor malesuada, vel luctus nisi pulvinar.
            Nulla vel justo urna. Vivamus id urna eu metus mollis dictum nec sit
            amet nunc.
          </p>
        </div> */}
      </div>

      <div className="flex flex-col sm:flex-row">
  <div className="bg-gray-300 w-full sm:w-1/12 h-20 sm:h-auto flex items-center justify-center mb-1 sm:mb-0 sm:mr-1">
    <div className="transform sm:rotate-0 font-bold text-sm justify-center items-center text-center">
      KEY VALUES
    </div>
  </div>
  <div className="grid grid-cols-2 2xl:grid-cols-5 gap-2 w-full">
    {[
      {
        value: "Sustainability",
        description:
          "We are dedicated to eco-friendly practices, using sustainable materials and processes to minimize our environmental impact.",
      },
      {
        value: "Quality",
        description:
          "Our products are crafted with the highest standards of quality, ensuring durability and excellence in every brick.",
      },
      {
        value: "Innovation",
        description:
          "We continuously seek innovative solutions and technologies to improve our products and services, staying ahead in the industry.",
      },
      {
        value: "Integrity",
        description:
          "We conduct our business with honesty and transparency, building trust with our clients, partners, and employees.",
      },
      {
        value: "Customer Focus",
        description:
          "Our customers are at the heart of everything we do. We strive to exceed their expectations through exceptional service and support.",
      },
      {
        value: "Community Engagement",
        description:
          "We are committed to contributing positively to the communities where we operate, supporting local initiatives and fostering economic growth.",
      },
      {
        value: "Safety",
        description:
          "Ensuring a safe working environment for our employees and partners is a top priority, adhering to the highest safety standards.",
      },
      {
        value: "Responsibility",
        description:
          "We take responsibility for our actions and their impact on the environment and society, aiming for sustainable growth.",
      },
      {
        value: "Teamwork",
        description:
          "Collaboration and teamwork are key to our success. We believe in working together to achieve common goals.",
      },
      {
        value: "Excellence",
        description:
          "We are committed to continuous improvement, striving for excellence in all aspects of our business.",
      },
    ].map((item) => (
      <div
        key={item.value}
        // onClick={() => handleValueClick(index)}
        className={`h-28 sm:h-32 flex items-center justify-center text-center text-sm font-bold p-2 border bg-gray-300 cursor-pointer relative flip-box`}
      >
        <div className="flip-box-inner h-full w-full">
          <div className={`flip-box-front h-full w-full flex items-center justify-center`}>
            {item.value}
          </div>
          <div className="flip-box-back h-full w-full flex items-center justify-center bg-blue-600 text-white font-light text-xs md:text-base p-1">
            {item.description}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


     



    </div>
  );
};

export default AboutUs;
