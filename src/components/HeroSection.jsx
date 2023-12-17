const HeroSection = () => {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                    Experience the Tradition of Vedic Gharat Atta
                </h1>
                <p className="text-lg lg:text-xl mb-8">
                    Made with love using traditional methods for a healthier you.
                </p>

                {/* FOMO Message */}
                <div className="bg-yellow-500 text-gray-900 p-4 rounded-md mb-8">
                    <p className="text-sm lg:text-base">
                        Limited stock available! Embrace the goodness of Vedic Gharat Atta
                        now for a healthier lifestyle. Don&apos;t miss out!
                    </p>
                </div>

                {/* Call to Action Button */}
                <a
                    href="#shop-now"
                    className="bg-blue-500 text-white py-2 px-4 rounded-full text-lg lg:text-xl transition duration-300 hover:bg-blue-700"
                >
                    Shop Now
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
