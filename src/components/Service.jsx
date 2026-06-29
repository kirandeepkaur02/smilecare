import React from 'react'
import {
  Sparkles,  
  Stethoscope, Smile, Activity, Brain, Baby, 
  ArrowRight,   Zap, Clock

} from "lucide-react";


const Service = () => {

function SectionHeader({ eyebrow, title, subtitle }) {
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

 const services = [
    { icon: Stethoscope, name: "Dental Implants", pain: "Medium", rec: "5–7 days", c: "bg-blue-400/10 text-blue-400" },
    { icon: Activity, name: "Root Canal", pain: "Low", rec: "1–2 days", c: "bg-cyan-500/10 text-cyan-500" },
    { icon: Smile, name: "Braces", pain: "Low", rec: "Same day", c: "bg-blue-400/10 text-blue-400" },
    { icon: Sparkles, name: "Clear Aligners", pain: "Low", rec: "Same day", c: "bg-blue-400/10 text-blue-400" },
    { icon: Zap, name: "Teeth Whitening", pain: "Low", rec: "Same day", c:"bg-cyan-500/10 text-cyan-500" },
    { icon: Smile, name: "Smile Design", pain: "Low", rec: "2–3 days", c:"bg-blue-400/10 text-blue-400" },
    { icon: Brain, name: "Dentures", pain: "Low", rec: "1 day", c: "bg-cyan-500/10 text-cyan-500" },
    { icon: Baby, name: "Pediatric Dentistry", pain: "Very Low", rec: "Same day", c: "bg-blue-400/10 text-blue-400" },
  ];
  const painColor = (p) => p === "Very Low" || p === "Low" ? "bg-secondary" : p === "Medium" ? "bg-yellow-500" : "bg-destructive";
 



  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Treatments" title="Comprehensive care, gently delivered." subtitle="From routine cleanings to full smile transformations — every treatment guided by experienced specialists." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article key={s.name} className="group rounded-3xl bg-white border border-gray-200  p-6 lift">
              <div className={`grid h-12 w-12 place-items-center rounded-2xl ${s.c}`}>
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.name}</h3>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-gray-400">
                  <span className={`h-2 w-2 rounded-full ${painColor(s.pain)}`} /> {s.pain} pain
                </span>
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" /> {s.rec}
                </span>
              </div>
              <a href="#book" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-400 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service