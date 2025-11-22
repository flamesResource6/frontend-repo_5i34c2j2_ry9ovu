import React from 'react'

export default function BrandAbout() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">About MIH GEMS AND JEWELRY</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              We specialize in natural, certified gemstones and handcrafted fine jewelry. Each piece is curated from trusted sources and cut with precision, ensuring brilliance, durability, and ethical integrity. Our experts pair traditional artistry with modern design to create heirloom-quality jewels that resonate with meaning.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-emerald-400/20 bg-slate-900/50 p-4">
                <p className="text-emerald-300 font-semibold">Authenticity</p>
                <p className="mt-1 text-slate-300">Independent certification and transparent sourcing</p>
              </div>
              <div className="rounded-xl border border-sky-400/20 bg-slate-900/50 p-4">
                <p className="text-sky-300 font-semibold">Craftsmanship</p>
                <p className="mt-1 text-slate-300">Handcrafted settings with meticulous finishing</p>
              </div>
              <div className="rounded-xl border border-amber-400/20 bg-slate-900/50 p-4">
                <p className="text-amber-300 font-semibold">Expertise</p>
                <p className="mt-1 text-slate-300">Gemologists and artisans with years of experience</p>
              </div>
              <div className="rounded-xl border border-rose-400/20 bg-slate-900/50 p-4">
                <p className="text-rose-300 font-semibold">Worldwide</p>
                <p className="mt-1 text-slate-300">Insured global shipping with secure packaging</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
            <h3 className="text-xl font-medium text-white">Brand Promise</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• 100% natural stones</li>
              <li>• Trusted quality</li>
              <li>• Certified gemstones</li>
              <li>• Finest craftsmanship</li>
              <li>• Worldwide delivery</li>
            </ul>
            <p className="mt-6 text-slate-400 text-sm">
              Our mission is to elevate every milestone with timeless beauty, authentic energy, and uncompromising standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
