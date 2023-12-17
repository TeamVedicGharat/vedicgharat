// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    Vedic Gharat
                </Link>

                {/* Responsive Menu Button */}
                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>

                {/* Navigation Menu */}
                <nav className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
                    <Link
                        to="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/products"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
                    >
                        Products
                    </Link>
                    <Link
                        to="/contact"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
