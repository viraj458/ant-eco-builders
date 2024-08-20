import Img01 from "/Libry1.webp";
import Img02 from "/Libry2.webp";

const LibraryPage = () => {
  return (

    <div className="flex flex-col w-full container max-w-[1600px] mx-auto">
      <div className=" md:h-[450px] flex items-center justify-center mb-8">
        <img
          src="/LibryBg.jpg"
          alt="Banner"
          className="w-full h-full border-2 border-black rounded-md brightness-[0.4]"
        />
      </div>
      <div className="bg-white p-4 shadow flex flex-col justify-center rounded-lg">
        <h2 className="text-xl font-bold mb-2">What is AAC Block</h2>
        <p className="text-sm mb-4">
          Autoclaved Aerated Concrete (AAC) Blocks are a versatile and innovative
          building material that has revolutionized construction techniques around
          the world. Originating in Sweden in the 1920s, AAC blocks are known for
          their superior properties, including light weight, high strength, and
          excellent thermal insulation.
        </p>
        <h3 className="text-lg font-semibold mb-2">Composition and Manufacturing Process:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Sand</li>
          <li>Lime</li>
          <li>Cement</li>
          <li>Water</li>
          <li>An expansion agent (usually aluminum powder)</li>
        </ul>
        <p className="text-sm mb-4">
          The manufacturing process involves several steps:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>Mixing: The raw materials are thoroughly mixed to form a slurry.</li>
          <li>
            Pre-curing: The mixture is poured into molds where it begins to rise
            and pre-cure. The aluminum powder reacts with the lime and cement,
            producing hydrogen gas and forming tiny air pockets within the
            material.
          </li>
          <li>Cutting: Once the pre-curing process is complete, the large block is cut into smaller, precise dimensions.</li>
          <li>Autoclaving: The cut blocks are then subjected to high-pressure steam curing in an autoclave, which strengthens them and gives them their final properties.</li>
        </ol>
        <h3 className="text-lg font-semibold mb-2">Key Features and Benefits:</h3>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Lightweight:</strong> AAC blocks weigh about one-fifth of traditional concrete blocks.</li>
          <li><strong>Thermal Insulation:</strong> The air pockets within AAC blocks provide excellent thermal insulation.</li>
          <li><strong>Fire Resistance:</strong> AAC blocks are non-combustible and can withstand temperatures up to 1200°C.</li>
          <li><strong>Sound Insulation:</strong> The porous structure of AAC blocks also provides superior sound absorption.</li>
          <li><strong>Eco-Friendly:</strong> Made from non-toxic materials, AAC blocks have a low environmental impact.</li>
          <li><strong>Precision and Ease of Use:</strong> AAC blocks are manufactured with precise dimensions, ensuring a high degree of accuracy and consistency.</li>
          <li><strong>Strength and Durability:</strong> Despite their lightweight, AAC blocks offer high compressive strength and durability.</li>
        </ul>
        <p className="text-sm">
          AAC blocks are suitable for a wide range of construction projects, including residential buildings, commercial and industrial structures, and educational and healthcare facilities.
        </p>
      </div>
      <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
      

      {/* Section 2 */}
      <div className="bg-white p-4 shadow flex flex-col justify-center rounded-lg">
        <h2 className="text-xl font-bold mb-2">History of AAC Blocks</h2>
        <p className="text-sm mb-4">
          Autoclaved Aerated Concrete (AAC) Blocks have a rich history that dates back to the early 20th century.
        </p>
        <h3 className="text-lg font-semibold mb-2">Early Development</h3>
        <p className="text-sm mb-4">
          1920s: AAC was first developed in Sweden by a Swedish architect and inventor named Dr. Johan Axel Eriksson.
        </p>
        <h3 className="text-lg font-semibold mb-2">Commercial Production</h3>
        <p className="text-sm mb-4">
          Late 1920s - 1930s: The first commercial production of AAC blocks began in Sweden. The material quickly gained popularity due to its unique properties.
        </p>
        <h3 className="text-lg font-semibold mb-2">Global Expansion</h3>
        <p className="text-sm mb-4">
          1960s - 1980s: AAC blocks began to be manufactured and used in other parts of the world, including Asia, the Middle East, and America.
        </p>
        <h3 className="text-lg font-semibold mb-2">Modern Era</h3>
        <p className="text-sm mb-4">
          2010s - Present: Today, AAC blocks are widely recognized and used globally.
        </p>
      </div>

      <div className="bg-gray-300 hidden md:flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src={Img01}
          className="object-cover w-full h-full rounded-md"
          alt="Decorative"
        />
      </div>

      {/* Section 3 */}
      <div className="bg-gray-300 flex items-center justify-center overflow-hidden">
        <img
          src={Img02}
          className="object-cover w-full h-full rounded-md"
          alt="Decorative"
        />
      </div>
      <div className="bg-white p-4 shadow flex flex-col justify-center">
        <h2 className="text-xl font-bold mb-2">Advantages of AAC Blocks</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Lightweight:</strong> AAC blocks are significantly lighter than traditional concrete blocks.</li>
          <li><strong>Thermal Insulation:</strong> The porous structure of AAC blocks provides excellent thermal insulation.</li>
          <li><strong>Fire Resistance:</strong> AAC blocks are highly fire-resistant, capable of withstanding temperatures up to 1200°C.</li>
          <li><strong>Sound Insulation:</strong> The air-filled pockets within AAC blocks offer superior sound absorption.</li>
          <li><strong>Eco-Friendly:</strong> Made from non-toxic, natural materials, AAC blocks are environmentally friendly.</li>
          <li><strong>Precision and Ease of Use:</strong> Manufactured with precise dimensions, AAC blocks ensure consistent quality and reduce the need for additional plastering.</li>
          <li><strong>Durability and Strength:</strong> Despite their lightweight nature, AAC blocks offer high compressive strength and durability.</li>
          <li><strong>Cost-Effective:</strong> The combined benefits of reduced material usage, faster construction time, and lower energy consumption contribute to overall cost savings.</li>
        </ul>
        <p className="text-sm">
          By incorporating AAC blocks into your building projects, you can achieve a balance of performance, sustainability, and cost-efficiency.
        </p>
      </div>
      
    </div>
      </div>
    </div>
    
  );
};

export default LibraryPage;
