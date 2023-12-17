
import PropTypes from "prop-types"
const ProductFeaturesSection = () => {
    return (
        <section className="bg-gray-100 text-gray-800 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                    Discover the Goodness of Vedic Gharat Atta
                </h2>

                {/* Feature List */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        icon="🌾"
                        title="Traditional Gharat Method"
                        description="Crafted using the traditional gharat method, preserving the authentic taste and nutritional value."
                    />
                    <FeatureCard
                        icon="❄️"
                        title="Cooling Properties"
                        description="Experience the coolness of our atta, making it an ideal choice for health-conscious individuals in India."
                    />
                    <FeatureCard
                        icon="🌱"
                        title="Nutrient-Rich"
                        description="Packed with essential nutrients, Vedic Gharat Atta is a wholesome choice for a balanced diet."
                    />
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

FeatureCard.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string,
}
export default ProductFeaturesSection;
