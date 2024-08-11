import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image } from '@mantine/core';
import { LineChart } from '@mantine/charts';

const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

const data = [
    {
      date: 'Mar 22',
      Apples: 2890,
      Oranges: 2338,
      Tomatoes: 2452,
    },
    {
      date: 'Mar 23',
      Apples: 2756,
      Oranges: 2103,
      Tomatoes: 2402,
    },
    {
      date: 'Mar 24',
      Apples: 3322,
      Oranges: 986,
      Tomatoes: 1821,
    },
    {
      date: 'Mar 25',
      Apples: 3470,
      Oranges: 2108,
      Tomatoes: 2809,
    },
    {
      date: 'Mar 26',
      Apples: 3129,
      Oranges: 1726,
      Tomatoes: 2290,
    },
];

function Home() {
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} className="object-cover w-full h-full rounded-md border border-black"/>
        </Carousel.Slide>
    ));

    return (
        <div className="max-w-[1600px] mx-auto">
            <Carousel
                withIndicators
                height={350} // Increased height
                styles={{
                    indicator: {
                        backgroundColor: '#000',
                        '&[data-active]': {
                            backgroundColor: '#007BFF',
                        },
                    },
                }}
            >
                {slides}
            </Carousel>
            <hr className="border-black my-8" />
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-300  flex items-center justify-center overflow-hidden">
                        <img
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                            className="object-cover w-full h-full rounded-md"
                            alt="Decorative"
                        />
                    </div>
                    <div className="bg-white p-4 shadow">
                        <h2 className="text-xl font-bold mb-2">About ANT Eco Builders</h2>
                        <p className="text-sm mb-2">
                            Welcome to ANT ECO BUILDERS, a pioneering brick company based in the UK, founded with a shared vision for a sustainable future. Our core product is the innovative AAC (Autoclaved Aerated Concrete) block, renowned for its superior quality, excellent insulation properties, and eco-friendly characteristics.
                        </p>
                        <p className="text-sm mb-2">
                            At ANT ECO BUILDERS, we are committed to supplying a diverse range of high-quality bricks that meet the highest technical standards while minimizing environmental impact. Our dedication to sustainability and innovation ensures that our products not only enhance the structural integrity of your projects but also contribute to a greener, more sustainable world.
                        </p>
                        <p className="text-sm mb-2">
                            Join us in building a better future.
                        </p>

                        <button className="text-black py-2 px-4 rounded mt-4 hover:bg-gray-500 transition-all" style={{ background: '#D9D9D9' }}>
                            About
                        </button>
                    </div>
                    <div className="bg-white p-4 shadow">
                        <h2 className="text-xl font-bold mb-2">Why Choose ANT ACC Blocks?</h2>
                        <ul className="list-disc pl-5 text-sm">
                            <li>Eco-Friendly: Made from sustainable materials, our blocks reduce environmental impact and contribute to a greener future.</li>
                            <li>Lightweight: AAC blocks are lightweight yet strong, making them easy to handle and ideal for a variety of construction projects.</li>
                            <li>Fast Insulation: AAC blocks provide outstanding thermal and acoustic insulation, enhancing energy efficiency and comfort.</li>
                            <li>Fire Resistant: Offering superior fire resistance, our blocks add an extra layer of safety to your building.</li>
                            <li>Superior Quality: Our AAC blocks are manufactured to the highest technical standards, ensuring durability and reliability.</li>
                        </ul>
                        <button className="text-black py-2 px-4 rounded mt-4 hover:bg-gray-500 transition-all" style={{ background: '#D9D9D9' }}>
                            Products
                        </button>
                    </div>
                    <div className="bg-slate-200 shadow-md ">
                        <LineChart
                            className='p-5'
                            h={300}
                            data={data}
                            dataKey="date"
                            series={[
                                { name: 'Apples', color: 'indigo.6' },
                                { name: 'Oranges', color: 'blue.6' },
                                { name: 'Tomatoes', color: 'teal.6' },
                            ]}
                            curveType="linear"
                        />
                    </div>
                    <div className="bg-gray-300  flex items-center justify-center overflow-hidden">
                        <img
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                            className="object-cover w-full h-full rounded-md"
                            alt="Decorative"
                        />
                    </div>
                    <div className="bg-white p-4 shadow">
                        <h2 className="text-xl font-bold mb-2">How can we help?</h2>
                        <ul className="list-disc pl-5 text-sm">
                            <li>Efficient Delivery: Offering prompt and reliable delivery services to ensure your materials arrive on time.</li>
                            <li>Secure Packing: Providing secure and protective packing to ensure your materials reach their destination in perfect condition.</li>
                            <li>Professional Loading: Offering professional loading services to ensure your materials are handled with care and precision.</li>
                        </ul>
                        <button className="text-black py-2 px-4 rounded mt-4 hover:bg-gray-500 transition-all" style={{ background: '#D9D9D9' }}>
                            Services
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-black my-8" />
            <div className="bg-white py-8">
                <div className="max-w-[1600px] mx-auto">
                    <h2 className="text-2xl font-bold mb-6">How can we help?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-gray-300 p-4 rounded shadow hover:bg-gray-400 transition-all cursor-pointer">
                            <h3 className="text-lg font-semibold mb-2">Blog</h3>
                            <p className="text-sm mb-4">
                                Efficient Delivery: Offering prompt and reliable delivery services to ensure your materials arrive on time.
                            </p>
                            <div className="flex justify-between items-center">
                                <hr className="border-black w-full" />
                                <span className="ml-2 cursor-pointer">⌄</span>
                            </div>
                        </div>
                        <div className="bg-gray-300 p-4 rounded shadow hover:bg-gray-400 transition-all cursor-pointer">
                            <h3 className="text-lg font-semibold mb-2">Blog</h3>
                            <p className="text-sm mb-4">
                                Secure Packing: Providing secure and protective packing to ensure your materials reach their destination in perfect condition.
                            </p>
                            <div className="flex justify-between items-center">
                                <hr className="border-black w-full" />
                                <span className="ml-2 cursor-pointer">⌄</span>
                            </div>
                        </div>
                        <div className="bg-gray-300 p-4 rounded shadow hover:bg-gray-400 transition-all cursor-pointer">
                            <h3 className="text-lg font-semibold mb-2">Blog</h3>
                            <p className="text-sm mb-4">
                                Professional Loading: Offering professional loading services to ensure your materials are handled with care and precision.
                            </p>
                            <div className="flex justify-between items-center">
                                <hr className="border-black w-full" />
                                <span className="ml-2 cursor-pointer">⌄</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-500 text-white py-8 px-4 rounded shadow-lg flex flex-col md:flex-row justify-between items-center">
                        <div className="text-lg font-semibold mb-4 md:mb-0">
                            Feel Free to contact us
                        </div>
                        <div className="flex items-center">
                            <hr className="border-white w-48 mr-4" />
                            <button className="bg-white text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-all">
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
