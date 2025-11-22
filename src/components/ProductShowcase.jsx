import React from 'react'

const products = [
  {
    name: 'Ruby',
    color: 'text-rose-300',
    description: 'Symbol of passion and vitality. Encourages courage, love, and confidence.',
    uses: 'Ideal for rings and statement pieces; cherished July birthstone.',
  },
  {
    name: 'Sapphire',
    color: 'text-sky-300',
    description: 'Stone of wisdom and truth. Enhances focus, serenity, and protection.',
    uses: 'Perfect for engagement rings; September birthstone.',
  },
  {
    name: 'Emerald',
    color: 'text-emerald-300',
    description: 'Represents growth and harmony. Inspires balance, love, and insight.',
    uses: 'Beloved for pendants and eternity bands; May birthstone.',
  },
  {
    name: 'Opal',
    color: 'text-indigo-200',
    description: 'Iridescent muse of creativity. Ignites imagination and emotional clarity.',
    uses: 'Captivating in earrings and artistic designs; October birthstone.',
  },
  {
    name: 'Topaz',
    color: 'text-amber-200',
    description: 'Beacon of joy and abundance. Attracts luck, success, and warm energy.',
    uses: 'Versatile for daily wear; November birthstone.',
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Signature Gemstones</h2>
          <p className="mt-3 text-slate-300">Natural, certified stones curated for beauty, rarity, and meaning.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-6 transition hover:border-emerald-500/30 hover:shadow-emerald-500/10 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className={`text-xl font-medium text-white ${p.color}`}>{p.name}</h3>
                <span className="text-[10px] tracking-wider text-slate-400">CERTIFIED</span>
              </div>
              <p className="mt-3 text-slate-300">{p.description}</p>
              <p className="mt-2 text-sm text-slate-400">{p.uses}</p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-full bg-emerald-500/90 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-400">Inquire</button>
                <button className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-slate-600">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
