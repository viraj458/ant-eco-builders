import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo1.png';

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const isActive = (path : string) => location.pathname === path ? 'bg-blue-500 text-white' : 'hover:bg-gray-400';

    return (
        <header className="bg-gray-300 text-black p-4">
            <div className="container max-w-[1600px] mx-auto flex justify-between items-center">
                <div className='flex justify-center items-center space-x-2'>
                <img src={logo} alt="Logo" className="h-14 w-14" />
                <span className='font-semibold font-sans text-base sm:text-xl'>
                    <p>ANT ECO </p>
                    <p>BUILDERS</p>
                </span>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleSidebar} className="text-xl">
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <ul className="flex space-x-8">
                        <li><Link to="/" className={`px-2 py-2 rounded transition duration-300 ${isActive('/')}`}>Home</Link></li>
                        <li><Link to="/about" className={`px-2 py-2 rounded transition duration-300 ${isActive('/about')}`}>About</Link></li>
                        <li><Link to="/products" className={`px-2 py-2 rounded transition duration-300 ${isActive('/products')}`}>Products</Link></li>
                        <li><Link to="/services" className={`px-2 py-2 rounded transition duration-300 ${isActive('/services')}`}>Services</Link></li>
                        <li><Link to="/contact" className={`px-2 py-2 rounded transition duration-300 ${isActive('/contact')}`}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={`fixed inset-y-0 left-0 transform z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden bg-gray-300 text-black w-64 p-6`}>
                <ul className="space-y-4">
                    <li><Link to="/" className={`block px-2 py-2 rounded transition duration-300 ${isActive('/')}`} onClick={closeSidebar}>Home</Link></li>
                    <li><Link to="/about" className={`block px-2 py-2 rounded transition duration-300 ${isActive('/about')}`} onClick={closeSidebar}>About</Link></li>
                    <li><Link to="/products" className={`block px-2 py-2 rounded transition duration-300 ${isActive('/products')}`} onClick={closeSidebar}>Products</Link></li>
                    <li><Link to="/services" className={`block px-2 py-2 rounded transition duration-300 ${isActive('/services')}`} onClick={closeSidebar}>Services</Link></li>
                    <li><Link to="/contact" className={`block px-2 py-2 rounded transition duration-300 ${isActive('/contact')}`} onClick={closeSidebar}>Contact</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
