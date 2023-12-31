import './App.css'
import AboutUsSection from './components/AboutUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProductFeaturesSection from './components/ProductFeature'

function App() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <ProductFeaturesSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
