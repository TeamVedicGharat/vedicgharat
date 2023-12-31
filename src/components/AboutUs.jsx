import PropTypes from "prop-types"
const AboutUsSection = () => {
    return (
        <section className="bg-white text-gray-800 py-16">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Our Story: Tradition Meets Nutrition
                </h2>
                <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
                    At Vedic Gharat, we take pride in preserving the ancient tradition of
                    making atta using the gharat method. Our journey began with a
                    dedication to provide a healthier alternative for our health-conscious
                    customers.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-1 max-w-5xl mx-auto lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Traditional Process"
                        description="Our atta is crafted using the age-old gharat method, ensuring the goodness of tradition in every grain."
                    />
                    <FeatureCard
                        title="Cooling Properties"
                        description="Experience the coolness of Vedic Gharat Atta, perfect for the Indian climate and your well-being."
                    />
                    <FeatureCard
                        title="Health-Conscious Choice"
                        description="For those who prioritize health, our atta is a natural choice, rich in nutrients and crafted with care."
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ title, description }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

FeatureCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}
export default AboutUsSection;
