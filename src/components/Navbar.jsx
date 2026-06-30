import React from 'react'
import {
  Sparkles, Phone, ArrowRight, Menu
} from "lucide-react";
import Weblogo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className='fixed top-0 inset-x-0 z-40'>
      <div className="mx-auto mt-4 max-w-7xl px-4 ">
        <div className='glass-card flex items-center justify-between rounded-2xl px-5 py-3'>
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-400 ">
              <Sparkles className="h-5 w-5 text-white" />

              {/* <img src={Weblogo} alt="logo" className='h-10 w-10 bg-none' /> */}
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">SmileCare</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-500">
            <a href="#services" className="hover:text-gray-700 transition">Services</a>
            <a href="#doctors" className="hover:text-gray-700  transition">Doctors</a>
            <a href="#stories" className="hover:text-gray-700  transition">Smile Stories</a>
            <a href="#blogs" className="hover:text-gray-700  transition">Insights</a>
            <a href="#tour" className="hover:text-gray-700  transition">Clinic Tour</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:+10000" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-foreground">
              <Phone className="h-4 w-4 text-blue-400" /> (555)  010-2026
            </a>
            <a href="#book" className=" bg-blue-400
    text-white
    px-6
    py-3
    rounded-lg
    shadow-lg
    transition-all
    duration-300
    ease-in-out
    hover:bg-cyan-700
    hover:-translate-y-0.5
    hover:shadow-2xl inline-flex items-center gap-2 text-sm font-semibold">
              Book <ArrowRight className="h-4 w-4" />
            </a>
            <button className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-border">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
)
}
export default Navbar