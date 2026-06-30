import React from 'react'

const Kidszone = () => {
  return (
    <div  className="py-24">
            <div className="mx-auto max-w-7xl px-4">
         <div className="rounded-[2.5rem] bg-linear-to-br from-sky-50 via-cyan-50 to-teal-50 p-10 lg:p-16 grid lg:grid-cols-2 gap-10 items-center border border-gray-200">
           <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Kids Dental Zone</p>
             <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">Where brushing<br/>becomes an adventure.</h2>
              <p className="mt-5 text-lg text-gray-400 max-w-md">Brushing games, reward badges, and a 2-minute timer that turns daily routine into a quest.</p>
               <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-medium">🦷 Brush timer</span>
              <span className="rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-medium">🎮 Mini games</span>
              <span className="rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-medium">🏆 Reward badges</span>
            </div>
           </div>
            <div className="relative grid grid-cols-2 gap-4">
              {["🦷", "🪥", "✨", "🎈"].map((e, i) => (
              <div key={i} className={`aspect-square rounded-3xl bg-white shadow-lg grid place-items-center text-6xl ${i % 2 ? "translate-y-6" : ""}`}>{e}</div>
            ))}
            </div>
         </div>
            </div>

    </div>
  )
}
export default Kidszone