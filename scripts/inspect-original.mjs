// Renders the original site in Chromium and dumps the computed geometry of a
// page's content area, so the clone can be matched against real numbers
// rather than inferred from the Elementor CSS.
import { chromium } from 'playwright'

const url = process.argv[2]
const shot = process.argv[3]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })

const requests = []
page.on('request', r => {
  const u = r.url()
  if (/\.(mp4|jpe?g|png|webp|webm|mov)(\?|$)/i.test(u)) requests.push(u)
})

await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 })
await page.waitForTimeout(6000)

// scroll through so lazy-loaded content settles
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y)
    await new Promise(r => setTimeout(r, 120))
  }
  window.scrollTo(0, 0)
})
await page.waitForTimeout(2500)

if (shot) await page.screenshot({ path: shot, fullPage: true })

const data = await page.evaluate(() => {
  const box = el => {
    const r = el.getBoundingClientRect()
    const s = getComputedStyle(el)
    return {
      x: Math.round(r.x), y: Math.round(r.y + window.scrollY),
      w: Math.round(r.width), h: Math.round(r.height),
      pad: s.padding, bg: s.backgroundColor,
      bgImage: s.backgroundImage === 'none' ? '' : s.backgroundImage.slice(0, 120),
      display: s.display, gap: s.gap,
    }
  }

  const out = { title: document.title, sections: [], media: [], headings: [] }

  document.querySelectorAll('#content .elementor-section').forEach(sec => {
    const s = getComputedStyle(sec)
    out.sections.push({
      id: sec.dataset.id,
      tag: sec.classList.contains('elementor-inner-section') ? 'inner' : 'top',
      ...box(sec),
      bgImage: s.backgroundImage === 'none' ? '' : s.backgroundImage.slice(0, 140),
      bgSize: s.backgroundSize, bgPos: s.backgroundPosition, bgRepeat: s.backgroundRepeat,
      columns: [...sec.querySelectorAll(':scope > .elementor-container > .elementor-column')]
        .map(c => ({ id: c.dataset.id, ...box(c) })),
    })
  })

  document.querySelectorAll('#content img, #content iframe, #content video').forEach(el => {
    const r = el.getBoundingClientRect()
    out.media.push({
      tag: el.tagName.toLowerCase(),
      src: (el.currentSrc || el.src || '').slice(-70),
      w: Math.round(r.width), h: Math.round(r.height),
      y: Math.round(r.y + window.scrollY),
    })
  })

  document.querySelectorAll('#content h1,#content h2,#content h3,#content h4,#content h5,#content h6')
    .forEach(h => {
      const s = getComputedStyle(h)
      const r = h.getBoundingClientRect()
      out.headings.push({
        tag: h.tagName, text: h.textContent.trim().slice(0, 42),
        size: s.fontSize, weight: s.fontWeight, color: s.color,
        family: s.fontFamily.split(',')[0], lh: s.lineHeight,
        w: Math.round(r.width), x: Math.round(r.x),
      })
    })

  return out
})

console.log(JSON.stringify(data, null, 1))
console.log('\n=== MEDIA REQUESTS ===')
console.log([...new Set(requests)].join('\n'))

await browser.close()