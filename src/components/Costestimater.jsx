import React from 'react'
import { useState } from 'react';
import {CheckCircle2} from "lucide-react"
const Costestimater = () => {

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

  const items = [
    { name: "Routine cleaning", price: 120 },
    { name: "Teeth whitening", price: 380 },
    { name: "Dental implant (per tooth)", price: 2200 },
    { name: "Clear aligner course", price: 3500 },
    { name: "Smile design consultation", price: 90 },
  ];
  const [picked, setPicked] = useState([0, 1]);
  const total = items.reduce((s, it, i) => picked.includes(i) ? s + it.price : s, 0);

  return (
    <div className='bg-blue-300/10  py-24'>
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Cost Estimator" title="Transparent pricing. No surprises." subtitle="Select your treatments to see an instant estimate. EMI plans available — and you can download a PDF quotation." />
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl bg-white border border-gray-200 p-6">
            <div className="space-y-2">
              {items.map((it, i) => {
                const on = picked.includes(i);
                return (
                  <button key={it.name} onClick={() => setPicked(on ? picked.filter(x => x !== i) : [...picked, i])}
                    className={`w-full flex items-center justify-between rounded-2xl border p-4 transition ${on ? "border-blue-400 bg-blue-400/5" : "border-gray-200 bg-white hover:border-blue-400"}`}>
                    <span className="flex items-center gap-3">
                      <span className={`grid h-5 w-5 place-items-center rounded-md border ${on ? "bg-blue-400 border-blue-400 text-white" : "border-gray-200"}`}>
                        {on && <CheckCircle2 className="h-4 w-4" />}
                      </span>
                       <span className="font-medium">{it.name}</span>
                     </span>
                      <span className="font-display font-bold">${it.price.toLocaleString()}</span>
                  </button>
                )
              })}
            </div>
          </div>

             <div className="rounded-3xl bg-linear-to-br from-[#4F8DFF] to-[#4dc4ca] text-white p-8 flex flex-col">
            <p className="text-sm opacity-80">Estimated investment</p>
            <p className="font-display text-5xl font-extrabold mt-2">${total.toLocaleString()}</p>
            <p className="text-sm opacity-80 mt-1">or from ${Math.round(total / 12).toLocaleString()}/mo · 0% APR</p>
            <div className="mt-auto space-y-2 pt-8">
              <button className="w-full rounded-full bg-white text-cyan-500  font-semibold py-3">Download PDF quotation</button>
              <a href="#book" className="block text-center w-full rounded-full border border-white/40 py-3 text-sm font-semibold">Book consultation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Costestimater