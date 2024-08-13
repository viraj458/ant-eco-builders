import { Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import Navbar from './components/Common/Navbar';
import Fotter from './components/Common/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicePage';
import EcoFriendlyComponent from './components/EcoFriendlyComponent';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full p-4 sm:p-10">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<EcoFriendlyComponent />} />
        </Routes>
      </main>
      <Fotter />
    </div>
  );
}

export default App;
