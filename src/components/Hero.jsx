import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth - pointer events disabled so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.10),transparent_55%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 lg:pt-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-200">
            Premium • Certified • Natural
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            MIH GEMS AND JEWELRY
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-200 md:text-xl">
            Exquisite, natural gemstones and handcrafted fine jewelry. Authentically sourced, expertly certified, and crafted for a lifetime of brilliance.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400">
              Explore Gemstones
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-slate-700/60 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-slate-600">
              Our Story & Standards
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300/90">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>100% natural stones</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>Certified authenticity</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>Finest craftsmanship</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>Worldwide delivery</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
