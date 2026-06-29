import React from 'react'
import { Smile } from "lucide-react"

const Smilesstories = () => {

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

  const stories = [
    { name: "Maya, 34", problem: "Crooked alignment", treatment: "Invisalign · 11 months", color: "from-sky-100 to-teal-100" },
    { name: "Jordan, 28", problem: "Discoloration", treatment: "Veneers · 2 weeks", color: "from-blue-100 to-cyan-100" },
    { name: "Priya, 41", problem: "Missing molars", treatment: "Implants · 4 months", color: "from-teal-100 to-blue-100" },
    { name: "Liam, 22", problem: "Smile makeover", treatment: "Whitening + bonding", color: "from-cyan-100 to-sky-100" },
  ]

  return (
    <div id="stories" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Smile Stories" title="Real patients, real transformations." subtitle="Browse before-and-after journeys from our recent cases." />
      </div>
      <div className="mt-12 overflow-x-auto ">
        <div className="flex gap-5 px-4 sm:px-[max(1rem,calc((100vw-80rem)/2))] pb-4">
          {stories.map((s) => (
            <article key={s.name} className="min-w-[320px] sm:min-w-95 rounded-3xl bg-white  overflow-hidden lift">
              <div className={`aspect-4/3 bg-linear-to-br ${s.color} grid place-items-center`}>
                <Smile className="h-16 w-16 text-blue-400" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">Case study</p>
                <h3 className="font-display text-xl font-bold mt-2">{s.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{s.problem}</p>
                <p className="text-sm font-medium mt-1">{s.treatment}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Smilesstories 