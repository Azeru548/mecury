import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products, BODY_LAYOUTS } from '../data/products'
import './ProductPage.css'

// Overview + list blocks, in the order the original renders them
function buildBlocks(product) {
  const blocks = [
    { key: 'capabilities', label: 'Key Capabilities', items: product.capabilities },
    { key: 'applications', label: 'Applications', items: product.applications },
  ]
  if (product.materials && product.materials.length > 0) {
    blocks.push({ key: 'materials', label: 'Materials', items: product.materials })
  }
  return blocks
}

function ProductBlock({ label, items, headingColor }) {
  return (
    <>
      <h5 className="product-h5" style={headingColor ? { color: headingColor } : undefined}>
        {label}
      </h5>
      <ul className="product-list">
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

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

  const layout = BODY_LAYOUTS[product.bodyLayout] || BODY_LAYOUTS.dotted2
  const blocks = buildBlocks(product)
  const docGroups = product.docGroups || []
  const imageRows = product.imageRows || []
  const headingColor = product.headingColor

  return (
    <div className="product-page">
      {/* Navy title band (original: #1F3141, page title white Raleway 500) */}
      <section className="product-title-band">
        <div className="container">
          <h3 className="product-page-title">{product.title}</h3>
        </div>
      </section>

      {/* White section. The original lays the Overview out full width, then
          puts the remaining blocks in dotted-border columns (see BODY_LAYOUTS). */}
      <section className="product-body" style={{ padding: layout.sectionPad }}>
        <div className="container">
          {layout.leftWidth ? (
            /* Split variant: a 50/50 row (text | video) with a full-width
               row of background-image bands beneath it */
            <div className="product-split-2" style={{ padding: layout.colPad }}>
              <div className="product-split-row">
                <div className="product-split-col" style={{ width: layout.leftWidth }}>
                  <div className="product-block" style={{ padding: layout.overviewPad }}>
                    <h5 className="product-h5" style={headingColor ? { color: headingColor } : undefined}>
                      Overview
                    </h5>
                    <p className="product-overview">{product.overview}</p>
                  </div>
                  {blocks.map(block => (
                    <div className="product-block" style={{ padding: layout.blockPad }} key={block.key}>
                      <ProductBlock {...block} headingColor={headingColor} />
                    </div>
                  ))}
                </div>

                <div className="product-split-col" style={{ width: layout.rightWidth }}>
                  {product.driveDocs.length > 0 && (
                    <div className="product-video">
                      {product.driveDocs.map(docId => (
                        <iframe
                          key={docId}
                          src={`https://drive.google.com/file/d/${docId}/preview`}
                          title={`${product.title} video`}
                          allow="autoplay"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {product.bandImages && product.bandImages.length > 0 && (
                <div className="product-bandimages-row">
                  {product.bandImages.map(src => (
                    <div
                      key={src}
                      className="product-bandimage"
                      style={{ height: product.bandImagesHeight, backgroundImage: `url(${src})` }}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : layout.mainWidth ? (
            /* Sidebar variant: 70% main column + 29.917% sub-menu sidebar */
            <div className="product-split">
              <div className="product-main-col" style={{ width: layout.mainWidth, padding: layout.mainPad }}>
                {/* One text-editor holds Overview + both lists */}
                <div className="product-block" style={{ padding: layout.blockPad }}>
                  <h5 className="product-h5">Overview</h5>
                  <p className="product-overview">{product.overview}</p>
                  {blocks.map(block => (
                    <ProductBlock {...block} key={block.key} />
                  ))}
                </div>

                {/* Background-image band, sized by the original's 376px spacer */}
                {product.bandImage && (
                  <div className="product-band" style={{ backgroundImage: `url(${product.bandImage})` }}>
                    <div
                      className="product-band-inner"
                      style={{ padding: layout.bandPad, height: layout.bandHeight }}
                    />
                  </div>
                )}

                <div style={{ height: layout.gapSpacer }} />
              </div>

              <aside
                className="product-side-col"
                style={{ width: layout.sideWidth, padding: layout.sidePad }}
              >
                <h6 className="product-side-title">{layout.sideTitle}</h6>
                <div style={{ height: layout.sideSpacer }} />
                <nav className="ep-sub-menu">
                  <div className="ep-sub-menu-wrap">
                    <div className="ep-sub-menu-grid ep-menu-style-1">
                      {products.map(p => (
                        <Link
                          to={`/products/${p.slug}`}
                          key={p.slug}
                          className={`ep-item ${p.slug === slug ? 'active' : ''}`}
                        >
                          <span className="ep-content">
                            <span className="ep-title">
                              {p.subMenuTitle || p.title}
                            </span>
                          </span>
                          <span className="ep-hover-icon" aria-hidden="true">&rarr;</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </nav>
              </aside>
            </div>
          ) : layout.stackWidth ? (
            /* Stacked variant: one narrow column, no borders */
            <div className="product-stack" style={{ width: layout.stackWidth }}>
              <div className="product-block" style={{ padding: layout.blockPad }}>
                <h5 className="product-h5">Overview</h5>
                <p className="product-overview">{product.overview}</p>
              </div>
              {blocks.map(block => (
                <div className="product-block" style={{ padding: layout.blockPad }} key={block.key}>
                  <ProductBlock {...block} />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Overview — full page width */}
              <div className="product-block product-overview-block" style={{ padding: layout.overviewPad }}>
                <h5 className="product-h5">Overview</h5>
                <p className="product-overview">{product.overview}</p>
              </div>

              {/* Key Capabilities / Applications / Materials — dotted columns */}
              <div className="product-lists">
                {blocks.map((block, i) => (
                  <div
                    className="product-list-col"
                    key={block.key}
                    style={{ width: layout.widths[i] }}
                  >
                    <div className="product-list-inner" style={{ padding: layout.pads[i] }}>
                      <ProductBlock {...block} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Videos. The original embeds Google Drive MP4s in 50/50 columns and
          places this section ABOVE the photos. Where it groups them under a
          navy pill heading, each group becomes its own 50/50 row. */}
      {docGroups.length > 0 && (
        <section className="product-docgroups">
          <div className="container">
            {docGroups.map((group, gi) => (
              <div className={`product-docgroup ${gi > 0 ? 'spaced' : ''}`} key={group.title}>
                <h4 className="product-docgroup-title">{group.title}</h4>
                <div className="product-docgroup-row">
                  {group.docs.map(docId => (
                    <div className="product-docgroup-cell" key={docId}>
                      <iframe
                        src={`https://drive.google.com/file/d/${docId}/preview`}
                        title={`${product.title} video`}
                        allow="autoplay"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {!layout.leftWidth && docGroups.length === 0 && product.driveDocs.length > 0 && (
        <section className="product-docs-section">
          <div className="container">
            <div className="product-docgroup-row">
              {product.driveDocs.map(docId => (
                <div className="product-docgroup-cell" key={docId}>
                  <iframe
                    src={`https://drive.google.com/file/d/${docId}/preview`}
                    title={`${product.title} video`}
                    allow="autoplay"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Background-image bands (CSS backgrounds on the original, so they never
          appear as <img> in the markup). Only for layouts that don't already
          place them inside a column. */}
      {!layout.leftWidth && product.bandImages && product.bandImages.length > 0 && (
        <section className="product-bandimages">
          <div className="container">
            <div className="product-bandimages-row">
              {product.bandImages.map((src, i) => (
                <div
                  key={src}
                  className="product-bandimage"
                  style={{ height: product.bandImagesHeight, backgroundImage: `url(${src})` }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photos. The original splits these into separate boxed sections with
          per-column widths that differ from page to page, so each row
          carries its own widths (see imageRows in products.js). */}
      {imageRows.length > 0 && (
        <section className="product-images-section">
          {imageRows.map((row, ri) => (
            <div className="product-image-section-row" key={ri}>
              <div className="container">
                <div className="product-image-row">
                  {row.images.map((src, i) => (
                    <div
                      className="product-image-cell"
                      key={src}
                      style={{ width: row.widths[i] }}
                    >
                      <img src={src} alt={product.title} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
