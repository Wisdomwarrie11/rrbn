
import React from 'react';
import { View } from '../types';
import { RRBN_CONTACT } from '../constants';
import { 
  Home, 
  FileText, 
  Search, 
  BookOpen, 
  Newspaper, 
  LayoutDashboard, 
  Info,
  Layers,
  Phone,
  Mail,
  Menu,
  X,
  MapPin,
  Contact
} from 'lucide-react';

interface LayoutProps {
  currentView: View;
  setView: (view: View) => void;
  children: React.Node;
}

export const Layout: React.FC<LayoutProps> = ({ currentView, setView, children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: View.HOME, label: 'Home', icon: Home },
    { id: View.ABOUT, label: 'About Us', icon: Info },
    { id: View.DEPARTMENTS, label: 'Departments', icon: Layers },
    { id: View.REGISTRATION, label: 'Registration', icon: FileText },
    { id: View.DIRECTORY, label: 'Directory', icon: Search },
    { id: View.RESOURCES, label: 'Resources', icon: BookOpen },
    { id: View.CONTACT, label: 'Contact Us', icon: Contact },
    { id: View.PORTAL, label: 'RRBN Portal', icon: LayoutDashboard },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Bar */}
      <div className="bg-rrbn-green text-white py-2 px-4 text-[10px] md:text-xs font-medium flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> {RRBN_CONTACT.phone}</span>
          <span className="hidden sm:flex items-center gap-1"><Mail size={12} /> {RRBN_CONTACT.email}</span>
        </div>
        <div className="hidden md:block italic opacity-80">
          Professionalism, Integrity & Service
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-rrbn-yellow">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => setView(View.HOME)}
          >
            {/* Logo Section - Placeholder for user's logo file */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-lg border border-slate-100 p-1">
                <img 
                  src="https://www.rrbn.gov.ng/wp-content/uploads/2021/04/RRBN-Logo.png" 
                  alt="RRBN Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if image fails
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=RRBN&background=008751&color=fff";
                  }}
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-black text-rrbn-green leading-none">RRBN</h1>
                <p className="text-[10px] text-rrbn-red font-bold uppercase tracking-tight">Nigeria</p>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`px-3 py-2 rounded-md text-[13px] font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  currentView === item.id 
                    ? 'text-rrbn-green bg-rrbn-green/10' 
                    : 'text-slate-700 hover:text-rrbn-green hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl max-h-[85vh] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full px-6 py-4 text-left border-b border-slate-50 flex items-center gap-3 ${
                  currentView === item.id ? 'text-rrbn-green bg-rrbn-green/5 font-bold' : 'text-slate-700'
                }`}
              >
                <item.icon size={20} className="text-slate-400" />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded p-1">
                <img 
                  src="https://www.rrbn.gov.ng/wp-content/uploads/2021/04/RRBN-Logo.png" 
                  alt="RRBN" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">RRBN Nigeria</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The statutory regulatory body for the practice of Radiography in Nigeria, 
              ensuring excellence in medical imaging and radiation therapy.
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-1 bg-rrbn-green"></div>
              <div className="w-8 h-1 bg-white"></div>
              <div className="w-8 h-1 bg-rrbn-green"></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-rrbn-yellow border-b border-slate-800 pb-2">Our Mandate</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><button onClick={() => setView(View.ABOUT)} className="hover:text-white transition-colors">About RRBN</button></li>
              <li><button onClick={() => setView(View.DEPARTMENTS)} className="hover:text-white transition-colors">Departments</button></li>
              <li><button onClick={() => setView(View.TRAINING)} className="hover:text-white transition-colors">Accredited Schools</button></li>
              <li><button onClick={() => setView(View.REGISTRATION)} className="hover:text-white transition-colors">LFN Decree 42</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-rrbn-yellow border-b border-slate-800 pb-2">Quick Access</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><button onClick={() => setView(View.PORTAL)} className="hover:text-white transition-colors">Member Portal</button></li>
              <li><button onClick={() => setView(View.DIRECTORY)} className="hover:text-white transition-colors">Verify Registration</button></li>
              <li><button onClick={() => setView(View.NEWS)} className="hover:text-white transition-colors">News & Updates</button></li>
              <li><button onClick={() => setView(View.CONTACT)} className="hover:text-white transition-colors">Global Offices</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-rrbn-yellow border-b border-slate-800 pb-2">Head Office</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-rrbn-red shrink-0" />
                <span>{RRBN_CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-rrbn-green shrink-0" />
                <span>{RRBN_CONTACT.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-rrbn-yellow shrink-0" />
                <span>{RRBN_CONTACT.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 mt-16 pt-8 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Radiographers Registration Board of Nigeria. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
