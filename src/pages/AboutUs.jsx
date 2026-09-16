import { useEffect } from 'react'
import './AboutUs.css'

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">
      {/* Hero — full-width image, 330px tall (original: Par_1 cover) */}
      <section className="about-hero" />

      {/* Black band: ABOUT US title (pale yellow) + white intro text */}
      <section className="about-intro">
        <div className="container">
          <h3 className="about-intro-title">ABOUT US</h3>
          <p className="about-intro-text">
            Absolute Energy Field Products &amp; Services is a full-service
            Manufacturer of Oil &amp; Gas Production, Refining and Petrochemical
            Processing Equipment.
          </p>
        </div>
      </section>

      {/* Navy spacer band */}
      <section className="about-spacer-band" />

      {/* Black section: text panel + two offset image cards */}
      <section className="about-main">
        <div className="about-main-inner">
          <div className="about-text-col">
            <p>
              We maintain highly skilled Engineering and Design functions
              in-house to better serve our client base allowing them to run
              profitable and successful gas operations through innovative
              Process &amp; Treating techniques.
            </p>
            <p>
              Absolute Energy Field Products &amp; Services designs and
              fabricates a complete line of production equipment, natural gas
              processing and treating units, production and test separators,
              and crude topping units. We can supply custom or stock equipment
              with a wide variety of operating conditions and sizes tailored to
              the customer requirements.
            </p>
            <p>
              Based in Houston, Texas for over 8 years, Absolute, along with
              sister company Absolute Fabrication, LLC, continues to be a
              premier contract manufacturer of ASME pressure vessels, process
              spool piping and structural steel for the energy, petrochemical
              and industrial space. We manufacture to the highest quality
              standards in accordance with ASME Boiler and Pressure Vessel Code
              rules and vessels and piping and can be designed and fabricated
              in accordance with NACE standards as well.
            </p>
            <p>
              Absolute Energy Field Products &amp; Services maintains ASME
              &ldquo;U&rdquo; and &ldquo;S&rdquo; Certificates of Authorization
              for Pressure Vessel and Boiler manufacturing as well as National
              Board &ldquo;R&rdquo; Stamp Authorization for repair of code
              pressure vessels. All manufactured vessels are stamped and
              registered with the National Board. All welders and welding
              operators are trained and certified in accordance with ASME
              rules.
            </p>
          </div>

          <div className="about-images-col">
            <div className="about-image-card">
              <img src="/images/about-card-1.jpg" alt="Absolute Energy Field facility" />
            </div>
            <div className="about-image-card about-image-card-offset">
              <img src="/images/about-card-2.jpg" alt="Absolute Energy Field shop" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
