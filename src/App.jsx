import React from 'react'
import Hero from './components/Hero'
import BrandAbout from './components/BrandAbout'
import ProductShowcase from './components/ProductShowcase'
import ContentSections from './components/ContentSections'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Hero />
      <ProductShowcase />
      <BrandAbout />
      <ContentSections />
      <footer className="border-t border-slate-800 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} MIH GEMS AND JEWELRY • Natural • Certified • Handcrafted • Worldwide</p>
        </div>
      </footer>
    </div>
  )
}

export default App