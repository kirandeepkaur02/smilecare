import React from 'react'
import { Play } from "lucide-react";

const Virtualtour = () => {

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

  return (
    <div id="tour" className="py-24 bg-blue-300/10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Virtual Clinic Tour" title="Step inside before you arrive." />
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-linear-to-br from-slate-900 to-slate-700 aspect-16/10 shadow-(--shadow-lift)">
            <div className="absolute inset-0 grid place-items-center">
              <button className="group flex flex-col items-center gap-3">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-white/90 backdrop-blur shadow-2xl group-hover:scale-110 transition">
                  <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                </span>
                <span className="rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-sm font-medium text-white">360° tour · 2:14</span>
              </button>
            </div>
          </div>
          <div className="grid   grid-cols-2 lg:grid-cols-1 gap-4">
            {["Reception", "Sterilization lab", "Treatment rooms", "Waiting lounge"].map((r) => (
              <div key={r} className="rounded-2xl  justify-between bg-white border border-gray-200 p-4 flex items-center  gap-3 lift transition-all duration-300 ease-in-out
             hover:-translate-y-2 hover:shadow-xl">
                <div className="grid h-10 w-10 place-items-center  rounded-xl bg-blue-400/10 text-blue-400">
                  <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                </div>
                <span className="font-medium">{r}</span>
              </div>
            ))}
          </div>
            </div>
      </div>
    </div>
  )
}
export default Virtualtour