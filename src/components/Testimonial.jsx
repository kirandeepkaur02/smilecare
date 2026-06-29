import React from 'react'
import {
   Star,
 
  
 
} from "lucide-react";

const Testimonial = () => {

   const t = [
    { name: "Hannah W.", text: "I used to dread the dentist. Lumen completely changed that — the team is gentle, the space is calm, and the results are exceptional.", rating: 5 },
    { name: "David K.", text: "Best implant experience I've had. Transparent pricing, painless procedure, beautiful outcome.", rating: 5 },
    { name: "Emily R.", text: "Brought my two kids here. They actually look forward to their visits now.", rating: 5 },
  ];

const SectionHeader =({ eyebrow, title, subtitle }) => {
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
    <div className="py-24 bg-blue-300/10">
         <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Patient Testimonials" title="4.9 / 5 · Loved by 10,000+ patients" />
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
                   {t.map((q) => (
            <figure key={q.name} className="glass-card rounded-3xl p-7">
              <div className="flex gap-1 text-blue-400">
                {Array.from({ length: q.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground">"{q.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-400  text-white font-bold">{q.name[0]}</span>
                <span className="text-sm font-medium">{q.name}</span>
              </figcaption>
            </figure>
          ))}
          </div>
         </div>
    </div>
  )
}

export default Testimonial