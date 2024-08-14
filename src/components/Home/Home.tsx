import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import "@mantine/carousel/styles.css";
import { Image } from "@mantine/core";
import Img01 from "/img4.png";
import Img02 from "/img3.jpg";
// import Img03 from "/img9.png";
import Img99 from "/img99.png";
import { useRef } from "react";
import LibraryInfoCard from "../LibraryInfoCard";

const images = ["/img5.png", "/img4.png", "/img8.png", "/img/img04.png"];

function Home() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} className="w-full h-[500px] rounded-md" />
    </Carousel.Slide>
  ));

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="relative">
        {/* Carousel */}
        <Carousel
          withIndicators
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          loop
          styles={{
            indicator: {
              backgroundColor: "#000",
              "&[data-active]": {
                backgroundColor: "#007BFF",
              },
            },
          }}
        >
          {slides}
        </Carousel>

        {/* Overlay Text */}
        <span className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center">
            <p className="uppercase text-xl sm:text-3xl lg:text-6xl font-semibold">
              the uk's leading acc
            </p>
            <p className="uppercase text-xl sm:text-3xl lg:text-6xl font-semibold">
              Block supplier
            </p>
            <p className="bg-black text-base lg:text-2xl text-white p-2 px-3 mt-5 rounded-md">
              Build your dream structure with us
            </p>
          </div>
        </span>
      </div>

      <hr className="border-black my-8" />
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-300  flex items-center justify-center overflow-hidden">
            <img
              src={Img01}
              className="object-cover w-full h-full rounded-md"
              alt="Decorative"
            />
          </div>
          <div className="bg-white p-4 shadow">
            <h2 className="text-xl font-bold mb-2">About ANT ECO BUILDERS</h2>
            <p className="text-sm mb-2">
              Welcome to ANT ECO BUILDERS, a pioneering brick company based in
              the UK, founded with a shared vision for a sustainable future. Our
              core product is the innovative AAC (Autoclaved Aerated Concrete)
              block, renowned for its superior quality, excellent insulation
              properties, and eco-friendly characteristics.
            </p>
            <p className="text-sm mb-2">
              At ANT ECO BUILDERS, we are committed to supplying a diverse range
              of high-quality bricks that meet the highest technical standards
              while minimizing environmental impact. Our dedication to
              sustainability and innovation ensures that our products not only
              enhance the structural integrity of your projects but also
              contribute to a greener, more sustainable world.
            </p>
            <p className="text-sm mb-2">Join us in building a better future.</p>

            <button
              className="text-black py-2 px-4 rounded mt-4 hover:bg-gray-500 transition-all"
              style={{ background: "#D9D9D9" }}
              onClick={() => (window.location.href = "/about")}
            >
              About
            </button>
          </div>

          <div className="bg-white p-4 shadow">
            <h2 className="text-xl font-bold mb-2">
              Why Choose ANT ACC Blocks?
            </h2>
            <ul className="list-disc pl-5 text-sm">
              <li>
                Eco-Friendly: Made from sustainable materials, our blocks reduce
                environmental impact and contribute to a greener future.
              </li>
              <li>
                Lightweight: AAC blocks are lightweight yet strong, making them
                easy to handle and ideal for a variety of construction projects.
              </li>
              <li>
                Fast Insulation: AAC blocks provide outstanding thermal and
                acoustic insulation, enhancing energy efficiency and comfort.
              </li>
              <li>
                Fire Resistant: Offering superior fire resistance, our blocks
                add an extra layer of safety to your building.
              </li>
              <li>
                Superior Quality: Our AAC blocks are manufactured to the highest
                technical standards, ensuring durability and reliability.
              </li>
            </ul>
            <button
              className="text-black py-2 px-4 rounded mt-4 hover:bg-gray-500 transition-all"
              style={{ background: "#D9D9D9" }}
              onClick={() => (window.location.href = "/products")}
            >
              Products
            </button>
          </div>

          <div className="bg-gray-300  flex items-center justify-center overflow-hidden">
            {/* <img
              src={Img03}
              className="object-cover w-full h-full rounded-md"
              alt="Decorative"
            /> */}
            <img
              src={Img99}
              className="object-cover w-full h-full rounded-md"
              alt="Decorative"
            />
          </div>
          <div className="bg-gray-300  flex items-center justify-center overflow-hidden">
            <img
              src={Img02}
              className="object-cover w-full h-full rounded-md"
              alt="Decorative"
            />
          </div>
          <div className="bg-white p-4 shadow">
            <h2 className="text-xl font-bold mb-2">How can we help?</h2>
            <ul className="list-disc pl-5 text-sm">
              <li>
                Efficient Delivery: Offering prompt and reliable delivery
                services to ensure your materials arrive on time.
              </li>
              <li>
                Secure Packing: Providing secure and protective packing to
                ensure your materials reach their destination in perfect
                condition.
              </li>
              <li>
                Professional Loading: Offering professional loading services to
                ensure your materials are handled with care and precision.
              </li>
            </ul>
            <button
              className="text-black py-2 px-4 rounded mt-4 hover:bg-gray-500 transition-all"
              style={{ background: "#D9D9D9" }}
              onClick={() => (window.location.href = "/services")}
            >
              Services
            </button>
          </div>
        </div>
      </div>
      <hr className="border-black my-8 " />
      <div className="bg-white py-8 px-4 sm:px-8">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-2xl font-bold mb-6">Explore Our Library</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <LibraryInfoCard
              title="What is AAC Block?"
              description="Autoclaved Aerated Concrete (AAC) Blocks are a versatile and innovative building material that has revolutionized construction techniques around the world. Originating in Sweden in the 1920s, AAC blocks are known for their superior properties, including light weight, high strength, and excellent thermal insulation."
            />
            <LibraryInfoCard
              title="History of AAC Blocks"
              description="Autoclaved Aerated Concrete (AAC) Blocks have a rich history that dates back to the early 20th century. Developed to address the need for a lightweight, durable, and insulating building material, AAC blocks have evolved significantly since their inception."
            />
            <LibraryInfoCard
              title="Advantages of AAC Blocks"
              description="Autoclaved Aerated Concrete (AAC) Blocks offer a multitude of benefits, making them a preferred choice in modern construction. By incorporating AAC blocks into your building projects, you can achieve a balance of performance, sustainability, and cost-efficiency."
            />
          </div>

          <div className="bg-gray-500 text-white py-8 px-4 rounded shadow-lg flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-semibold mb-4 md:mb-0">
              Feel Free to contact usz
            </div>
            <div className="flex items-center">
              <hr className="border-white w-48 mr-4" />
              <button
                className="bg-white text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-all"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
