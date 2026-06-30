import React from 'react'
import {ArrowRight} from 'lucide-react'

const Blogs = () => {

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

    const posts = [
    { tag: "Guides", title: "Dental implants: a complete 2026 guide", read: "8 min" },
    { tag: "Compare", title: "Braces vs aligners — which fits your life?", read: "6 min" },
    { tag: "Routine", title: "5 small habits for a healthier smile", read: "4 min" },
  ];       

  return (
    <div  id="blogs" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Insights" title="Expert dental tips, plainly written." />
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {posts.map((p) => (
            <article key={p.title} className="group rounded-3xl bg-white border border-gray-200 overflow-hidden lift">
              <div className="aspect-16/10 bg-linear-to-br from-sky-100 to-teal-100" />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{p.tag}</span>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug group-hover:text-blue-400  transition">{p.title}</h3>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.read} read</span>
                  <ArrowRight className="h-4 w-4 text-blue-400  group-hover:translate-x-1 transition" />
                </div>
              </div>
            </article>
          ))}
          </div>
      
       </div>
    </div>
  )
}

export default Blogs