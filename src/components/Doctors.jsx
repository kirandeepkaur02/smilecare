import React from 'react'
import {Stethoscope ,ArrowRight} from "lucide-react"

const Doctors = () => {

  const SectionHeader = ({ eyebrow, title, subtitle }) => {
    return (
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full  bg-primary/10 px-4 py-1 text-sm font-semibold text-blue-400">
            {eyebrow}
          </span>
        )}

        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  const doctors = [
    { name: "Dr. Amelia Chen", spec: "Cosmetic & Implantology", exp: "16 yrs", deg: "DDS, MS Prosthodontics" },
    { name: "Dr. Marcus Reid", spec: "Orthodontics", exp: "12 yrs", deg: "DMD, MSc Orthodontics" },
    { name: "Dr. Sofia Alvarez", spec: "Pediatric Dentistry", exp: "9 yrs", deg: "DDS, Pediatric Cert." },
    { name: "Dr. Ravi Menon", spec: "Endodontics", exp: "14 yrs", deg: "BDS, MDS Endodontics" },
  ];

  return (
    <div id="doctors" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Meet Our Experts" title="Specialists, not generalists." subtitle="Each member of our team is board-certified and focused on their craft." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((d) => (
            <article key={d.name} className="rounded-3xl bg-white border border-gray-200 overflow-hidden lift">
              <div className="aspect-4/5 bg-linear-to-br from-sky-100 via-cyan-50 to-teal-100 grid place-items-center">
                <Stethoscope className="h-16 w-16 text-blue-400/40" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                <p className="text-sm text-blue-400 font-medium mt-1">{d.spec}</p>
                <p className="text-xs text-gray-400 mt-2">{d.deg}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{d.exp} exp.</span>
                  <a href="#book" className="text-xs font-semibold text-blue-400 inline-flex items-center gap-1">Book <ArrowRight className="h-3.5 w-3.5" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors