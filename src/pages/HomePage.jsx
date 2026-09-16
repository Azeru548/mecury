import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import './HomePage.css'

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="home-page">
      {/* Hero — background video with the plant image overlapping its bottom edge.
          No filter, no text — matches the original. */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.webp"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <img
          className="hero-overlap"
          src="/images/hero-overlap.jpeg"
          alt=""
          aria-hidden="true"
        />
      </section>

      {/* Intro text — sits BELOW the hero on white, like the original */}
      <section className="hero-text-section">
        <div className="container">
          <h1 className="hero-text-title">
            UPSTREAM, MIDSTREAM, DOWNSTREAM &amp; RENEWABLES
          </h1>
          <p className="hero-text-desc">
            Absolute Energy Field offers a comprehensive range of products &amp;
            services tailored to meet the demands of the industrial sector within
            a dynamic and evolving market.
          </p>
        </div>
      </section>

      {/* Navy band with the section title, like the original */}
      <section className="products-band">
        <div className="container">
          <h2 className="products-band-title">PRODUCTS AND SERVICES</h2>
        </div>
      </section>

      {/* Product cards on light gray, like the original */}
      <section className="products-section" id="productsandservices">
        <div className="container">
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
