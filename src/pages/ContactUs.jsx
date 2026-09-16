import { useEffect, useState } from 'react'
import './ContactUs.css'

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="contact-page">
      {/* Navy band with CONTACT US title (original: #1F3141, padding 15px 0) */}
      <section className="contact-title-band">
        <div className="container">
          <h3 className="contact-title">CONTACT US</h3>
        </div>
      </section>

      {/* Black section: Google Map left + Contact info right (50/50) */}
      <section className="contact-info-section">
        <div className="contact-info-inner">
          <div className="contact-map-col">
            <iframe
              title="Absolute Energy Field Products & Services location"
              src="https://maps.google.com/maps?q=Absolute%20Energy%20Field%20Products%20%26%20Services&t=m&z=16&output=embed&iwloc=near"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="contact-details-col">
            <h6 className="contact-heading">CONTACT INFO</h6>
            <p className="contact-text">
              <a href="mailto:info@absoluteenergyfield.com" className="contact-email">
                info@absoluteenergyfield.com
              </a>
            </p>

            <div className="contact-spacer" />

            <h6 className="contact-heading">OFFICE / SHOP</h6>
            <p className="contact-text">
              7218 Clinton Dr,
              <br />
              Houston, TX 77020
            </p>

            <div className="contact-spacer" />

            <h6 className="contact-heading">CONNECT WITH US</h6>
            <div className="contact-social">
              <a
                href="https://www.linkedin.com/company/absolute-energy-field-products-services/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className="contact-social-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form section: black bg, navy #1F3141 inner panel with fields on transparent */}
      <section className="contact-form-section">
        <div className="contact-form-panel">
          {sent ? (
            <p className="contact-form-success">
              Thank you for your message. We will be in touch shortly.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Write your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
