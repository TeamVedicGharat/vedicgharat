const ContactForm = () => {
    return (
        <section className="bg-gray-800 text-white py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
                    Get in Touch
                </h2>

                {/* Contact Form */}
                <form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium mb-2"
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full p-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
                            placeholder="Type your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-full text-lg lg:text-xl transition duration-300 hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
