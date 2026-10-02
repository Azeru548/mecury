// Renders the local clone in Chromium and dumps the same geometry shape as
// inspect-original.mjs, so the two can be diffed directly.
import { chromium } from 'playwright'

const url = process.argv[2]
const shot = process.argv[3]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(1500)
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
    }
  }
  const out = { sections: [], media: [], headings: [] }

  document.querySelectorAll('.product-body, .product-split-2, .product-title-band').forEach(sec => {
    out.sections.push({ cls: sec.className.split(' ')[0], ...box(sec) })
  })

  document.querySelectorAll('img, iframe, video').forEach(el => {
    const r = el.getBoundingClientRect()
    if (r.width < 5) return
    out.media.push({
      tag: el.tagName.toLowerCase(),
      src: (el.currentSrc || el.src || '').slice(-45),
      w: Math.round(r.width), h: Math.round(r.height),
      y: Math.round(r.y + window.scrollY),
    })
  })

  document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(h => {
    const s = getComputedStyle(h)
    const r = h.getBoundingClientRect()
    if (!h.textContent.trim()) return
    out.headings.push({
      tag: h.tagName, text: h.textContent.trim().slice(0, 38),
      size: s.fontSize, weight: s.fontWeight, color: s.color,
      family: s.fontFamily.split(',')[0], lh: s.lineHeight,
      w: Math.round(r.width), x: Math.round(r.x),
    })
  })
  return out
})

console.log(JSON.stringify(data, null, 1))
await browser.close()