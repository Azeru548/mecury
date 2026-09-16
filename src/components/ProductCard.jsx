import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { card } = product
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={card.image} alt={card.title} />
        <div className="product-card-overlay">
          <Link to={`/products/${product.slug}`} className="read-more">Read More</Link>
        </div>
      </div>
      <div className="product-card-content">
        <h3>
          {card.title}
          <span>{card.subtitle}</span>
        </h3>
        <p>{card.shortDesc}</p>
        <div className="product-card-footer">
          <Link to={`/products/${product.slug}`} className="product-card-link">
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
