import { chromium } from 'playwright'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } })
await p.goto(process.argv[2], { waitUntil: 'domcontentloaded' })
await p.waitForTimeout(1500)
const sel = process.argv[3] || '.product-split-row, .product-split-col'
const out = await p.evaluate(s => {
  const r = []
  document.querySelectorAll(s).forEach(el => {
    const b = el.getBoundingClientRect(), c = getComputedStyle(el)
    r.push(`${(el.className.split(' ')[0]||el.tagName).padEnd(22)} x=${Math.round(b.x)} w=${Math.round(b.width)} h=${Math.round(b.height)} y=${Math.round(b.y+scrollY)} pad=${c.padding} bg=${c.backgroundColor} bgi=${c.backgroundImage==='none'?'':c.backgroundImage.slice(11,60)}`)
  })
  return r.join('\n')
}, sel)
console.log(out)
await b.close()
