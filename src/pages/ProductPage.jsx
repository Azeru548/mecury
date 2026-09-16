import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import './ProductPage.css'

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) {
    return (
      <div className="product-notfound">
        <h2>Sorry, but Page Not Found</h2>
        <p>The page you are looking for was moved, removed, renamed or never existed</p>
        <Link to="/" className="product-notfound-btn">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="product-page">
      {/* Navy title band (original: #1F3141, page title white Raleway 500) */}
      <section className="product-title-band">
        <div className="container">
          <h3 className="product-page-title">{product.title}</h3>
        </div>
      </section>

      {/* White section: Overview / Key Capabilities / Applications */}
      <section className="product-body">
        <div className="container">
          <div className="product-intro-col">
            <h5 className="product-h5">Overview</h5>
            <p className="product-overview">{product.overview}</p>
          </div>

          <div className="product-lists">
            <div className="product-list-col">
              <h5 className="product-h5">Key Capabilities</h5>
              <ul className="product-list">
                {product.capabilities.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="product-list-col">
              <h5 className="product-h5">Applications</h5>
              <ul className="product-list">
                {product.applications.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {product.materials && (
            <div className="product-lists product-materials">
              <div className="product-list-col">
                <h5 className="product-h5">Materials</h5>
                <ul className="product-list">
                  {product.materials.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products sub-menu (only on Structural Fabrication, like the original) */}
      {product.showProductsMenu && (
        <section className="product-submenu-section">
          <div className="container">
            <div className="product-submenu">
              {products.map(p => (
                <Link
                  to={`/products/${p.slug}`}
                  key={p.slug}
                  className={`product-submenu-item ${p.slug === slug ? 'current' : ''}`}
                >
                  <span className="product-submenu-title">{p.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Images grid (33/33/33 row + remainder, like the original) */}
      {product.images.length > 0 && (
        <section className="product-images-section">
          <div className="container">
            <div className="product-images-grid">
              {product.images.map(src => (
                <div className="product-image-cell" key={src}>
                  <img src={src} alt={product.title} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Google Drive document previews (embedded on the original pages) */}
      {product.driveDocs.length > 0 && (
        <section className="product-docs-section">
          <div className="container">
            {product.driveDocs.map(docId => (
              <div className="product-doc" key={docId}>
                <iframe
                  src={`https://drive.google.com/file/d/${docId}/preview`}
                  title={`${product.title} document`}
                  allow="autoplay"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
