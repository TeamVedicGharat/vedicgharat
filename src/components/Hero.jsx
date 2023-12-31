import Header from "./Header"
import HeroSection from "./HeroSection"

function Hero() {
    return (
        <div className="bg-[url('/img/bg-2.jpg')] bg-blue-600 bg-cover min-h-screen after:w-full after:h-full after:absolute relative  after:top-0  after:left-0  after:bg-zinc-900 after:opacity-80">
            <div className="relative z-10">
                <Header />
                <HeroSection />
            </div>
        </div>
    )
}

export default Hero