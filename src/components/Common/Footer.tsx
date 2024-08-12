function Footer() {
    return (
        <footer className="bg-gray-600 text-white py-8">
            <div className="max-w-[1600px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-sm">
                            We are a company dedicated to providing the best eco-friendly building solutions. Our products are designed to help you build a sustainable future.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/services" className="hover:underline">Services</a></li>
                            <li><a href="/products" className="hover:underline">Products</a></li>
                            <li><a href="/contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="text-sm space-y-2">
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: info@eco-builders.com</li>
                            <li>Address: 123 Eco St, Green City, GA</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-700 my-8" />
                <div className="text-center text-sm">
                    <p>&copy; 2024 ANT Eco Builders. All rights reserved.</p>
                    <p className="mt-2">
                        <a href="#privacy" className="hover:underline">Privacy Policy</a> | <a href="#terms" className="hover:underline">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
