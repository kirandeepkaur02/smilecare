import React from "react";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";


const Bookappointment = () => {

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
    <section id="book" className="py-24 bg-blue-400/10">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader
          eyebrow="Book Appointment"
          title="Reserve your visit in under a minute."
        />

        <form className="mt-12 rounded-4xl bg-white border border-gray-200 p-8 lg:p-10 shadow-(--shadow-soft) grid sm:grid-cols-2 gap-5">
          <Field label="Full name" placeholder="Jane Doe" className= "border  border-gray-200" />
          <Field label="Phone" placeholder="(555) 010-2026" />
          <Field
            label="Email"
            placeholder="you@email.com"
            type="email"
          />
          <Field
            label="Preferred doctor"
            placeholder="Any specialist"
          />
          <Field label="Date" type="date" />
          <Field
            label="Time slot"
            placeholder="Morning · Afternoon · Evening"
          />

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-2">
              Message (optional)
            </label>

            <textarea
              rows={4}
              placeholder="Tell us about your concern…"
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 transition"
            />
          </div>

          <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-xs text-gray-400  inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </span>

              <span className="inline-flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" />
                Email
              </span>

              <span className="inline-flex items-center gap-1">
                <Phone className="h-3.5 w-3.5" />
                SMS reminders
              </span>
            </p>

            <button
              type="submit"
              className="bg-blue-400  text-white  inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Confirm appointment
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Field = ({ label, placeholder, type = "text" }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-gray-400 bg-white px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 transition"
      />
    </div>
  );
};

export default Bookappointment;