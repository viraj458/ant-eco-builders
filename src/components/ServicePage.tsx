import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ServicesPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/img4.png", "/img5.png", "/img6.png", "/img1.png"];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 2000); // Automatically change slide every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]); // Dependency array ensures the interval is reset on slide change

  useEffect(() => {
    const renderChart = (canvasId: string) => {
      const ctx = (
        document.getElementById(canvasId) as HTMLCanvasElement
      )?.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "Sales",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    };

    renderChart("chart1");
    renderChart("chart2");
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto px-4">
      <div className="relative mb-8">
        <div className="relative bg-gray-300 h-48 lg:h-[500px] mb-8 flex items-center justify-center">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="object-cover w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{ opacity: 1 }}
          />
          <span className="absolute">
            <div className="flex flex-col justify-center items-center">
              <p className="uppercase text-xl sm:text-3xl lg:text-6xl font-semibold">
                service for our aac
              </p>
              <p className="uppercase text-xl sm:text-3xl lg:text-6xl font-semibold">
                blocks
              </p>
              <p className="bg-black text-base lg:text-2xl text-white p-2 px-3 mt-5 rounded-md">
                Make your way easier
              </p>
            </div>
          </span>
          <button
            onClick={handlePrevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="bg-gray-300 flex-none h-48 lg:h-auto lg:w-1/3">
          <img
            src="/img2.png"
            alt="Delivery"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-4">Delivery</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            scelerisque vehicula turpis, non varius ligula. Duis nec urna eu
            tortor condimentum euismod.
          </p>
          <div className="border-b-2 border-dashed mb-4" />
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <canvas id="chart1" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse gap-8 mb-8">
        <div className="bg-gray-300 flex-none h-48 lg:h-auto lg:w-1/3">
          <img
            src="/img4.png"
            alt="Packing and Loading"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-4">Packing and Loading</h2>
          <p className="mb-4">
            Praesent commodo, odio ac ultrices feugiat, orci risus suscipit
            metus, id volutpat elit ligula id libero. Fusce eget quam nec neque
            tincidunt cursus.
          </p>
          <div className="border-b-2 border-dashed mb-4" />
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <canvas id="chart2" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
