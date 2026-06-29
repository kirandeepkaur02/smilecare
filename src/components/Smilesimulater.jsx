import React from 'react'
import {
  Upload ,Sparkles
} from "lucide-react";


const Smilesimulater = () => {

  const SectionHeader = ({
    eyebrow,
    title,
    subtitle,
    align = "center",
  }) => {
    const alignment =
      align === "center" ? "text-center mx-auto" : "text-left";

    return (
      <div className={`max-w-2xl ${alignment}`}>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
          {eyebrow}
        </p>

        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className='bg-blue-300/10  py-24'>
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="AI Smile Simulator" title="Preview your future smile" subtitle="Upload a selfie and instantly visualize whitening, aligners, veneers and a complete smile makeover." />
        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          { /*left side */}
          <div className="lg:col-span-3 rounded-3xl bg-white border border-gray-200 p-8 shadow-amber-50">
            <div className="rounded-2xl border-2 border-dashed border-blue-500/10 bg-blue-300/10 p-10 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-linear-to-br from-[#4F8DFF] to-[#3CBCC3] text-white">
                <Upload className="h-7 w-7" />
              </div>
              <p className="mt-5 font-display text-xl font-semibold">Drop a selfie or click to upload</p>
              <p className="mt-2 text-sm text-muted-foreground">JPG or PNG · processed privately, on-device</p>
               <button className="bg-blue-400  text-amber-50 hover:bg-cyan-700 mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
                <Sparkles className="h-4 w-4" /> Generate preview
              </button>
            </div>
          </div>
            { /*right  side */}
               <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
              { t: "AI Whitening", d: "See up to 8 shades brighter" },
              { t: "Braces Simulation", d: "Visualize alignment over time" },
              { t: "Veneer Preview", d: "Try porcelain shapes & shades" },
              { t: "Full Makeover", d: "Complete smile transformation" },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl bg-white border border-gray-300    transition-all duration-300 ease-in-out
             hover:-translate-y-2 hover:shadow-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300/15 text-cyan-500">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{f.t}</p>
                    <p className="text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              </div>
            ))}
               </div>
        </div>
      </div>
    </div>
  )
}
export default Smilesimulater