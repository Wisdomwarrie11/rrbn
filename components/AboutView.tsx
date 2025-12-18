
import React from 'react';
import { REGISTRAR_DETAILS, RRBN_CONTACT } from '../constants';
import { Shield, Target, Eye, BookOpen, Award, Users, MapPin, Phone, Mail } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-rrbn-green py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">About RRBN</h1>
          <div className="w-20 h-1 bg-rrbn-yellow mx-auto mb-6"></div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            Dedicated to regulating the Radiography profession and ensuring the highest standards of medical imaging in Nigeria.
          </p>
        </div>
      </section>

      {/* Registrar Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="relative group">
                <div className="absolute inset-0 bg-rrbn-yellow rounded-[2.5rem] transform rotate-3 transition-transform group-hover:rotate-1"></div>
                <div className="relative aspect-[4/5] bg-slate-100 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="" 
                    alt={REGISTRAR_DETAILS.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 text-center lg:text-left">
                <h3 className="text-2xl font-black text-slate-900">{REGISTRAR_DETAILS.name}</h3>
                <p className="text-rrbn-red font-bold uppercase tracking-widest text-sm">{REGISTRAR_DETAILS.title}</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-black text-rrbn-green mb-8 flex items-center gap-3">
              Registrar's Welcome Address
            </h2>
            <div className="prose prose-lg text-slate-600 max-w-none">
              <p className="text-xl font-medium leading-relaxed mb-6 text-slate-800">
                {REGISTRAR_DETAILS.welcome}
              </p>
              <p className="mb-6">
                The Board is empowered by law to regulate the practice of Radiography and other related imaging and therapy professions. This includes setting the curriculum for radiography schools, accrediting clinical internship centers, and issuing practicing licenses to qualified professionals.
              </p>
              <p>
                Our commitment is to ensure that every Nigerian receives radiography services from only licensed, qualified, and ethically sound professionals. Through this portal, we aim to bridge the gap between the Board and our members, as well as the general public.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-rrbn-red/10 text-rrbn-red rounded-xl flex items-center justify-center mb-6">
                  <Eye size={28} />
                </div>
                <h4 className="text-xl font-black mb-3">Our Vision</h4>
                <p className="text-slate-600 font-medium">{REGISTRAR_DETAILS.vision}</p>
              </div>
              <div className="bg-rrbn-green p-8 rounded-[2rem] text-white shadow-xl">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Target size={28} />
                </div>
                <h4 className="text-xl font-black mb-3">Our Mission</h4>
                <ul className="space-y-3">
                  {REGISTRAR_DETAILS.mission.map((m, i) => (
                    <li key={i} className="text-sm flex gap-2 opacity-90">
                      <span className="text-rrbn-yellow font-black">•</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Background Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Statutory Mandate</h2>
            <p className="text-slate-500 font-medium">The legal framework defining our operations and authority.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <Shield className="text-rrbn-yellow mb-6" size={40} />
              <h4 className="text-xl font-black mb-4">Legal Foundation</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Established by Decree 42 of 1987, now codified as CAP R1 Laws of the Federation of Nigeria (LFN) 2004. We operate as a Category B parastatal of the Federal Ministry of Health.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <BookOpen className="text-rrbn-green mb-6" size={40} />
              <h4 className="text-xl font-black mb-4">Professional Education</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Empowered to provide policies for qualitative academic and professional education at undergraduate and graduate levels in institutions across the country.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <Award className="text-rrbn-red mb-6" size={40} />
              <h4 className="text-xl font-black mb-4">Regulatory Oversite</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Maintaining a register of all radiographers in Nigeria and ensuring the entrenchment of quality service and ethical standards for the practice of the profession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-rrbn-red/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          
          <div className="flex-grow relative z-10 text-center md:text-left">
            <h2 className="text-3xl font-black mb-4">Need further information?</h2>
            <p className="text-slate-400 mb-8 max-w-md">Our administrative staff are available to assist you with inquiries regarding registration, licensing, or board policies.</p>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="text-rrbn-red" size={20} />
                <span>{RRBN_CONTACT.address}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="text-rrbn-green" size={20} />
                <span>{RRBN_CONTACT.phone}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="text-rrbn-yellow" size={20} />
                <span>{RRBN_CONTACT.email}</span>
              </div>
            </div>
          </div>
          
          <div className="shrink-0 relative z-10">
            <button className="bg-rrbn-yellow text-slate-900 font-black px-12 py-5 rounded-2xl hover:scale-105 transition-transform shadow-2xl uppercase tracking-widest">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
