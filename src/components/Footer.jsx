import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-left">
            <p className="footer-copyright">Copyright @ 2025 - 2026</p>
            <p className="footer-company">Absolute Energy Field Products &amp; Services</p>
          </div>
          <div className="footer-right">
            <Link to="/contact-us" className="footer-link">Contact Us</Link>
            <a href="mailto:info@absoluteenergyfield.com" className="footer-email">
              info@absoluteenergyfield.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
