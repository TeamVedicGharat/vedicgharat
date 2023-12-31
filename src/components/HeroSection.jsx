const HeroSection = () => {
    return (
        <section className=" flex min-h-screen items-center justify-center text-white py-16">
            <div className="container mx-auto text-center">
                <h1 className="bg-[url('/img/bg-3.jpg')] bg-clip-text bg-no-repeat bg-cover bg-center text-clip text-transparent text-4xl drop-shadow-lg text-[#f1f1f1] max-w-4xl mx-auto lg:text-6xl font-bold mb-4">
                    Experience the Tradition of Vedic Gharat Atta
                </h1>
                <p className="text-lg lg:text-xl mb-8 text-yellow-100 font-medium capitalize">
                    Made with love using traditional methods for a healthier you.
                </p>

                {/* <div

                    className="bg-yellow-400 text-gray-900 p-2 mb-8 overflow-hidden">
                    <div
                        style={{
                            animation: "moveRightToLeft 20s linear infinite",
                            wordSpacing: "3px"
                        }}
                        className="text-sm lg:text-base font-semibold flex items-center">
                        <p className="min-w-max">
                            Limited stock available! Embrace the goodness of Vedic Gharat Atta
                            now for a healthier lifestyle. Don&apos;t miss out!
                        </p>
                        <p className="min-w-max">
                            Limited stock available! Embrace the goodness of Vedic Gharat Atta
                            now for a healthier lifestyle. Don&apos;t miss out!
                        </p>
                    </div>
                </div> */}

                <a
                    href="#shop-now"
                    className=" bg-orange-800  text-white py-3 px-6 rounded-md  transition duration-300 hover:bg-orange-900"
                >
                    Explore Now
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
