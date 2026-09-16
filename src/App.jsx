import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Certifications from './pages/Certifications'
import ContactUs from './pages/ContactUs'
import ProductPage from './pages/ProductPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/products/:slug" element={<ProductPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
