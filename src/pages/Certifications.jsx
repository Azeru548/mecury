import { useEffect } from 'react'
import './Certifications.css'

export default function Certifications() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const certs = [
    { src: '/images/cert-canvas.png', alt: 'Certificate of Authorization' },
    { src: '/images/cert-asme-1.png', alt: 'ASME Certificate page 1' },
    { src: '/images/cert-asme-2.png', alt: 'ASME Certificate page 2' },
  ]

  return (
    <div className="cert-page">
      {/* Navy band with CERTIFICATIONS title (original: #1F3141, padding 15px 0) */}
      <section className="cert-title-band">
        <div className="container">
          <h3 className="cert-title">CERTIFICATIONS</h3>
        </div>
      </section>

      {/* Black section with the certificate images, centered (original: #000) */}
      <section className="cert-section">
        <div className="cert-inner">
          {certs.map(cert => (
            <div className="cert-image-widget" key={cert.src}>
              <a href={cert.src} target="_blank" rel="noopener noreferrer">
                <img src={cert.src} alt={cert.alt} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
