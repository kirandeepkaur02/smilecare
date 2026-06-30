import React from 'react'
import {
  Sparkles, CheckCircle2, MapPin
 
} from "lucide-react";

const Footer = () => {

  const FooterCol = ({ title, items }) => {
    return (
      <div>
        <h4 className="font-display font-semibold mb-4">{title}</h4>
        <ul className="space-y-2 text-sm opacity-70">
          {items.map((i) => <li key={i}><a href="#" className="hover:opacity-100 transition">{i}</a></li>)}
        </ul>
      </div>
    );
  }

  const socialIcons = [
    "fi fi-brands-instagram",
    "fi fi-brands-facebook",
    "fi fi-brands-whatsapp",
  ];

  return (
    <div className="bg-[#182033] text-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-bold">SmileCare</span>
          </div>
          <p className="mt-5 text-sm opacity-70 max-w-sm">Premium dentistry & personalized care for every smile. Open 6 days a week with 24/7 emergency support.</p>
          <form className="mt-6 flex gap-2 max-w-sm">
            <input placeholder="Email for monthly tips" className="flex-1 rounded-full bg-white/10 border border-white/15 px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-white/40" />
            <button className="rounded-full bg-white text-[#182033] px-5 text-sm font-semibold">Join</button>
          </form>
        </div>
        <FooterCol title="Clinic" items={["Services", "Doctors", "Pricing", "Smile Stories", "Blog"]} />
        <FooterCol title="Hours" items={["Mon–Fri · 8:00–20:00", "Sat · 9:00–17:00", "Sun · Emergency only", "24/7 Emergency line"]} />



        <div>
          <h4 className="font-display font-semibold mb-4">Visit us</h4>
          <p className="text-sm opacity-70 inline-flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> 240 Riverside Avenue<br />Suite 12 · San Mateo, CA</p>
          <div className="mt-5 flex gap-3">
            {socialIcons.map((icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <i className={`${icon} text-lg  text-white`}></i>
              </a>
            ))}
          </div>
        </div>

      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-wrap justify-between gap-4 text-xs opacity-60">
          <span>© 2026 Lumen Dental. All rights reserved.</span>
          <span>Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </div>
  )
}

export default Footer