import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <header className="bg-gray-300 text-black p-4">
            <div className="container max-w-[1600px] mx-auto flex justify-between items-center">
                <img src={logo} alt="Logo" className="h-14 w-14" />
                <div className="md:hidden">
                    <button onClick={toggleSidebar} className="text-xl">
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <ul className="flex space-x-8">
                        <li><Link to="/" className="px-2 py-2 rounded hover:bg-gray-400 transition duration-300">Home</Link></li>
                        <li><Link to="/about" className="px-2 py-2 rounded hover:bg-gray-400 transition duration-300">About</Link></li>
                        <li><Link to="/products" className="px-2 py-2 rounded hover:bg-gray-400 transition duration-300">Products</Link></li>
                        <li><Link to="/services" className="px-2 py-2 rounded hover:bg-gray-400 transition duration-300">Services</Link></li>
                        <li><Link to="/contact" className="px-2 py-2 rounded hover:bg-gray-400 transition duration-300">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={`fixed inset-y-0 left-0 transform z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden bg-gray-300 text-black w-64 p-6`}>
                <ul className="space-y-4">
                    <li><Link to="/" className="block px-2 py-2 rounded hover:bg-gray-400 transition duration-300" onClick={closeSidebar}>Home</Link></li>
                    <li><Link to="/about" className="block px-2 py-2 rounded hover:bg-gray-400 transition duration-300" onClick={closeSidebar}>About</Link></li>
                    <li><Link to="/products" className="block px-2 py-2 rounded hover:bg-gray-400 transition duration-300" onClick={closeSidebar}>Products</Link></li>
                    <li><Link to="/services" className="block px-2 py-2 rounded hover:bg-gray-400 transition duration-300" onClick={closeSidebar}>Services</Link></li>
                    <li><Link to="/contact" className="block px-2 py-2 rounded hover:bg-gray-400 transition duration-300" onClick={closeSidebar}>Contact</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
