
import React from 'react';
import { View } from '../types';
import { MOCK_NEWS, HERO_CAROUSEL, QUICK_FACTS, REGISTRAR_DETAILS } from '../constants';
import { 
  ArrowRight, 
  Users, 
  BookOpen, 
  CheckCircle, 
  FileCheck,
  Search,
  Zap,
  Eye,
  Target,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';

interface HomeViewProps {
  setView: (view: View) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_CAROUSEL.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section with Carousel Background */}
      <section className="relative h-[650px] flex items-center overflow-hidden bg-slate-900">
        {/* Animated Background Images */}
        {HERO_CAROUSEL.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-slate-900/60 z-10" />
            <img 
              src={slide.url} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-rrbn-green/90 via-rrbn-green/30 to-transparent z-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 w-full z-30">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rrbn-red/90 text-[11px] font-black uppercase tracking-widest rounded-full mb-6 shadow-lg border border-white/20">
              <ShieldCheck size={14} /> Official Statutory Body
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] drop-shadow-2xl">
              Fostering Professional <br />
              <span className="text-rrbn-yellow">Radiography</span> <br />
              in Nigeria
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-10 opacity-95 leading-relaxed font-medium max-w-xl">
              Regulating practice, education, and ethical standards across the Federation since 1987.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setView(View.REGISTRATION)}
                className="bg-rrbn-yellow hover:bg-yellow-500 text-slate-900 font-extrabold px-10 py-5 rounded-2xl flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl"
              >
                Get Licensed <ArrowRight size={22} />
              </button>
              <button 
                onClick={() => setView(View.DIRECTORY)}
                className="bg-white/10 hover:bg-white/20 text-white font-extrabold px-10 py-5 rounded-2xl backdrop-blur-xl border border-white/30 transition-all flex items-center gap-3"
              >
                <Search size={22} /> Verify Member
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Progress Indicators */}
        <div className="absolute bottom-12 right-12 z-40 flex flex-col gap-3">
          {HERO_CAROUSEL.map((slide, i) => (
            <button 
              key={i}
              onClick={() => setActiveSlide(i)}
              className="flex items-center gap-4 group"
            >
              <span className={`text-[10px] font-bold transition-all uppercase tracking-widest ${i === activeSlide ? 'text-rrbn-yellow' : 'text-white/40 opacity-0 group-hover:opacity-100'}`}>
                {slide.title}
              </span>
              <div className={`h-1.5 transition-all rounded-full ${i === activeSlide ? 'w-12 bg-rrbn-yellow shadow-[0_0_10px_#FDB913]' : 'w-4 bg-white/20'}`} />
            </button>
          ))}
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Quick Facts & Statistics</h2>
            <div className="w-24 h-2 bg-rrbn-yellow mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {QUICK_FACTS.map((fact, idx) => (
              <div key={idx} className="relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rrbn-green/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-rrbn-green/10 transition-colors" />
                <div className="w-16 h-16 bg-rrbn-green/10 rounded-2xl flex items-center justify-center mb-8 text-rrbn-green group-hover:bg-rrbn-green group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  <Zap size={28} />
                </div>
                <h4 className="font-black text-xl text-slate-900 mb-4">{fact.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registrar's Welcome Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rrbn-red via-rrbn-yellow to-rrbn-green"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Image Side */}
            <div className="w-full lg:w-5/12 relative">
              <div className="aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white relative z-10">
                <img 
                  src="profmark.png" 
                  alt="Prof. Mark Chukwudi Okeji" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-10 -right-10 bg-rrbn-red text-white p-8 rounded-[2rem] shadow-2xl max-w-[280px] z-20 transform hover:scale-105 transition-transform">
                <p className="font-black text-lg leading-tight mb-1 uppercase">{REGISTRAR_DETAILS.name}</p>
                <p className="text-[11px] font-black opacity-80 uppercase tracking-[0.2em]">{REGISTRAR_DETAILS.title}</p>
                <div className="mt-4 h-1 w-12 bg-rrbn-yellow"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-rrbn-green/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-7/12">
              <span className="text-rrbn-red font-black uppercase tracking-[0.3em] text-xs mb-4 block">Welcome to RRBN Website</span>
              <h2 className="text-4xl md:text-5xl font-black text-rrbn-green mb-8 leading-tight">Leadership & Professional <br /> Regulation</h2>
              
              <div className="prose prose-lg text-slate-600 mb-12">
                <p className="leading-relaxed font-medium italic text-lg text-slate-700 border-l-4 border-rrbn-yellow pl-6">
                  "{REGISTRAR_DETAILS.welcome}"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 text-rrbn-red">
                    <div className="p-3 bg-rrbn-red/10 rounded-xl"><Eye size={28} /></div>
                    <h3 className="font-black text-xl uppercase">Our Vision</h3>
                  </div>
                  <p className="text-sm text-slate-600 font-bold leading-relaxed">{REGISTRAR_DETAILS.vision}</p>
                </div>
                <div className="space-y-4 p-8 bg-rrbn-green text-white rounded-3xl shadow-xl transform hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-xl"><Target size={28} /></div>
                    <h3 className="font-black text-xl uppercase">Our Mission</h3>
                  </div>
                  <ul className="space-y-3">
                    {REGISTRAR_DETAILS.mission.map((m, i) => (
                      <li key={i} className="text-xs font-medium flex gap-3 opacity-90">
                        <span className="text-rrbn-yellow font-black mt-0.5">•</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Statutory Functions</h2>
          <div className="w-24 h-2 bg-rrbn-red mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Directing and managing the professional landscape of Radiography in Nigeria to ensure the highest global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              view: View.REGISTRATION, 
              title: "Professional Licensing", 
              icon: FileCheck, 
              color: "rrbn-green", 
              text: "Digital portal for licensure, annual renewals, and professional practice authorizations." 
            },
            { 
              view: View.TRAINING, 
              title: "Academic Standards", 
              icon: BookOpen, 
              color: "rrbn-yellow", 
              text: "Accreditation of undergraduate and postgraduate programs in all 36 Nigerian states." 
            },
            { 
              view: View.DIRECTORY, 
              title: "Public Registry", 
              icon: Search, 
              color: "rrbn-red", 
              text: "Searchable real-time database of licensed professionals and accredited clinical facilities." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className={`w-20 h-20 bg-${item.color}/10 text-${item.color} rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <item.icon size={36} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                {item.text}
              </p>
              <button 
                onClick={() => setView(item.view)} 
                className={`text-${item.color} font-black text-sm flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest`}
              >
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Highlights */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-rrbn-yellow font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">Updates & Bulletins</span>
              <h2 className="text-4xl font-black text-white">RRBN Press Releases</h2>
            </div>
            <button onClick={() => setView(View.NEWS)} className="bg-white text-slate-900 font-black px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-rrbn-yellow transition-colors">
              Explore All News <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_NEWS.map((news) => (
              <div key={news.id} className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-rrbn-yellow/50 transition-all">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  </div>
                  <div className="lg:w-3/5 p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-black bg-rrbn-red text-white px-3 py-1 rounded-full uppercase tracking-widest">
                        {news.category}
                      </span>
                      <span className="text-[10px] text-white/40 font-bold uppercase">{news.date}</span>
                    </div>
                    <h3 className="font-black text-2xl text-white mb-4 leading-tight group-hover:text-rrbn-yellow transition-colors">{news.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2">{news.excerpt}</p>
                    <button className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      Read Article <ArrowRight size={14} className="text-rrbn-yellow" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Call to Action */}
      <section className="py-24 bg-rrbn-green relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Join the Registry Today</h2>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto text-lg font-medium">
            Are you a qualified Radiographer practicing in Nigeria? Secure your professional future and ensure your practice remains compliant with LFN Decree 42.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setView(View.REGISTRATION)}
              className="bg-rrbn-yellow hover:bg-white text-slate-900 font-black px-12 py-5 rounded-2xl transition-all shadow-2xl uppercase tracking-widest"
            >
              Start Registration
            </button>
            <button 
              onClick={() => setView(View.CONTACT)}
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-black px-12 py-5 rounded-2xl transition-all uppercase tracking-widest"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
