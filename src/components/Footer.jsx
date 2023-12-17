const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Vedic Gharat. All rights reserved.
                </p>
                <div className="flex justify-center items-center mt-4">
                    <a
                        href="#"
                        className="text-gray-500 hover:text-white mx-2 transition duration-300"
                    >
                        Privacy Policy
                    </a>
                    <span className="text-gray-500">|</span>
                    <a
                        href="#"
                        className="text-gray-500 hover:text-white mx-2 transition duration-300"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
