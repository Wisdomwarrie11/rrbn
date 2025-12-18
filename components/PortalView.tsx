
import React from 'react';
import { 
  Bell, 
  Calendar, 
  Download, 
  Award, 
  Clock, 
  Settings,
  CreditCard
} from 'lucide-react';

export const PortalView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome, Dr. Chinedu Okafor</h1>
          <p className="text-slate-500 text-sm">Member ID: RRBN/RAD/2021/0045</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-white rounded-lg border border-slate-200 text-slate-600 relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-rrbn-red rounded-full"></span>
          </button>
          <button className="p-2 bg-white rounded-lg border border-slate-200 text-slate-600">
            <Settings size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Status Card */}
          <div className="bg-rrbn-green text-white p-8 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase mb-4">
                License Status
              </div>
              <h2 className="text-3xl font-bold mb-2">Active & Valid</h2>
              <p className="text-slate-100 text-sm opacity-90 mb-8">Your practicing license expires on December 31, 2024. No immediate action required.</p>
              <button className="bg-rrbn-yellow text-slate-900 font-bold px-6 py-3 rounded-xl flex items-center gap-2">
                <Download size={20} /> Download Digital License
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <Award className="absolute bottom-4 right-8 w-24 h-24 opacity-10" />
          </div>

          {/* CPD Progress */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-900">CPD Tracking (2024 Cycle)</h3>
              <span className="text-xs font-bold text-rrbn-green">Target: 30 Units</span>
            </div>
            <div className="relative h-4 bg-slate-100 rounded-full mb-4 overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-rrbn-green w-[70%]" />
            </div>
            <div className="flex justify-between text-xs font-bold text-slate-500">
              <span>21 Units Earned</span>
              <span>70% Complete</span>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Upcoming Webinar</h4>
                  <p className="text-[10px] text-slate-500">Oct 30, 2024 • 2 Units</p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold">In-Person Seminar</h4>
                  <p className="text-[10px] text-slate-500">Nov 15, 2024 • 5 Units</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-6">Recent Payments</h3>
            <div className="space-y-4">
              {[
                { label: 'License Renewal 2024', amount: '₦25,000', date: 'Jan 04, 2024' },
                { label: 'Annual Conference Fee', amount: '₦35,000', date: 'Sep 12, 2023' },
              ].map((p, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-bold text-slate-800">{p.label}</p>
                    <p className="text-[10px] text-slate-500">{p.date}</p>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{p.amount}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <CreditCard size={16} /> View All Receipts
            </button>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-3xl">
            <h3 className="font-bold mb-4">Job Board</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">Exclusive opportunities from accredited diagnostic centers.</p>
            <div className="space-y-3">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-sm font-bold">Senior MRI Radiographer</h4>
                <p className="text-[10px] text-slate-500">Reddington Hospital, Lagos</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-sm font-bold">Sonographer (PT)</h4>
                <p className="text-[10px] text-slate-500">Prime Diagnostics, Abuja</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
