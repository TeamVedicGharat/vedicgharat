import './App.css'
import AboutUsSection from './components/AboutUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductFeaturesSection from './components/ProductFeature'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ProductFeaturesSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
