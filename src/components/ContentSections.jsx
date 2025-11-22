import React from 'react'

export default function ContentSections() {
  return (
    <section className="relative w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Brand Description</h3>
            <p className="mt-3 text-slate-300 text-sm">
              MIH GEMS AND JEWELRY is a luxury house for natural gemstones and handcrafted jewelry. From certified rubies and sapphires to custom engagement rings, every creation blends authenticity, artistry, and spiritual meaning.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Taglines & Slogans</h3>
            <ul className="mt-3 text-slate-300 text-sm space-y-2">
              <li>• Natural. Certified. Extraordinary.</li>
              <li>• Where rarity meets refinement.</li>
              <li>• Crafted for a lifetime of light.</li>
              <li>• The art and soul of gemstones.</li>
              <li>• Elegance, authenticated.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">Social Bio</h3>
            <p className="mt-3 text-slate-300 text-sm">
              Premium natural gemstones • Certified authenticity • Handcrafted fine jewelry • Worldwide delivery
            </p>
            <p className="mt-2 text-slate-400 text-xs">DM to customize • Birthstones • Healing stones • Engagement & gifts</p>
          </div>
        </div>
      </div>
    </section>
  )
}
