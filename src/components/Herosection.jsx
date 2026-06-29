import React from 'react'
import {
    Calendar, ChevronRight, Star, Users, Award, HeartPulse, CheckCircle2 ,ShieldCheck
} from "lucide-react";
import heroDentist from "../assets/herodentist.jpg"

const Herosection = () => {

    const Stat = ({ icon, value, label }) => {
        return (
            <div>
                <div className="flex items-center gap-2 text-primary">
                    {icon}
                    <span className="font-display text-2xl font-bold text-foreground">
                        {value}
                    </span>
                </div>

                <p className="mt-1 text-xs text-muted-foreground">
                    {label}
                </p>
            </div>
        );
    };

    return (
        <div className='bg-[radial-gradient(ellipse_at_top_left,#4F8DFF40,transparent_60%),radial-gradient(ellipse_at_bottom_right,#3CBCC330,transparent_55%)] relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden'>
            <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center relative">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-gray-500">
                        <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse-ring" />
                        Now accepting new patients · Same-day appointments
                    </div>
                    <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                        Healthy smiles <br />
                        crafted with <span className="text-blue-400">precision.</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-lg sm:text-xl text-gray-400 leading-relaxed">
                        Advanced dentistry, pain-free treatments and personalized care for every patient — delivered in a space designed for calm.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
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
                            <Calendar className="h-4 w-4" /> Book Appointment
                        </a>
                        <a
                            href="#services"
                            className="
    inline-flex
    items-center
    gap-2
    rounded-full
    px-6
    py-3.5
    text-sm
    font-semibold
    bg-white
    text-foreground
    border
    border-gray-400
    transition-all
    duration-300
    ease-in-out
    hover:border-blue-300
    hover:text-blue-300
    hover:-translate-y-0.5
  "
                        >
                            Explore Treatments
                            <ChevronRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="mt-10    grid grid-cols-2 sm:grid-cols-4 gap-5">
                        <Stat icon={<Star className="h-4 w-4 text-blue-300" />} value="4.9" label="★★★★★ Rated" />
                        <Stat icon={<Users className="h-4 w-4  text-blue-300" />} value="10K+" label="Happy patients" />
                        <Stat icon={<Award className="h-4 w-4  text-blue-300" />} value="15+" label="Years experience" />
                        <Stat icon={<HeartPulse className="h-4 w-4  text-blue-300" />} value="24/7" label="Emergency care" />
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-6 rounded-[3rem]  bg-linear-to-br from-[#4F8DFF] to-[#3CBCC3] opacity-20 blur-2xl" />
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white shadow-xl">
                        <img src={heroDentist} alt="Dr. Amelia Chen, lead dentist at Lumen Dental" width={1024} height={1280} className="w-full h-140 object-cover" />
                    </div>
                    {/* floating glass cards */}
                    <div className="absolute top-6 left-4 flex items-center gap-4 rounded-full border border-white/60 bg-white/80 backdrop-blur-md px-3 py-2 shadow-xl animate-float-slow">
                        {/* Icon */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                            <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                        </div>

                        {/* Text */}
                        <div>
                            <p className="text-sm text-gray-500">
                                Pain-free guarantee
                            </p>
                            <p className="text-xs font-bold text-gray-900">
                                Sedation available
                            </p>
                        </div>
                    </div>

    <div className="glass-card absolute right-4 bottom-6 rounded-2xl px-4 py-3 flex items-center gap-3 animate-float-slower">
                        {/* Icon */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                            <ShieldCheck className="h-4 w-4 text-cyan-500" />
                        </div>

                        {/* Text */}
                        <div>
                            <p className="text-sm text-gray-500">
                               Certified clinic
                            </p>
                            <p className="text-xs font-bold text-gray-900">
                                ISO 9001 · ADA
                            </p>
                        </div>
                    </div>


                </div>



            </div>
        </div>
    )
}
export default Herosection 