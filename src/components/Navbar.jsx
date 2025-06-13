import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 shadow-md sticky top-0 left-0 w-full px-20 z-50">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="text-3xl font-bold text-white">
                    Samuel
                </div>
                <ul className="flex space-x-10 font-bold text-white text-md">
                    <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                    <li><Link to="/services" className="hover:text-gray-400">Service</Link></li>
                    <li><Link to="/resume" className="hover:text-gray-400">Resume</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;