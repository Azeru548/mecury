import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { products } from '../data/products'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setProductsOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Absolute Energy Field Products & Services" />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            </li>
            <li>
              <Link to="/about-us" className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}>About Us</Link>
            </li>
            <li
              className="has-dropdown"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`nav-link ${location.pathname.startsWith('/products') ? 'active' : ''}`}
              >
                Products &amp; Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <div className={`dropdown ${productsOpen ? 'open' : ''}`}>
                {products.map(p => (
                  <Link key={p.slug} to={`/products/${p.slug}`} className="dropdown-item">
                    {p.card.title} {p.card.subtitle}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link to="/certifications" className={`nav-link ${isActive('/certifications') ? 'active' : ''}`}>Certifications</Link>
            </li>
            <li>
              <Link to="/contact-us" className={`nav-link ${isActive('/contact-us') ? 'active' : ''}`}>Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`mobile-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li className="mobile-dropdown">
            <button onClick={() => setProductsOpen(!productsOpen)}>
              Products &amp; Services
              <svg className={productsOpen ? 'rotated' : ''} width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <div className={`mobile-dropdown-content ${productsOpen ? 'open' : ''}`}>
              {products.map(p => (
                <Link key={p.slug} to={`/products/${p.slug}`}>
                  {p.card.title} {p.card.subtitle}
                </Link>
              ))}
            </div>
          </li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
    </header>
  )
}
