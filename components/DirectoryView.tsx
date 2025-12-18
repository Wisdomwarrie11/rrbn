
import React from 'react';
import { Search, MapPin, ShieldCheck, Filter } from 'lucide-react';
import { MOCK_RADIOGRAPHERS } from '../constants';

export const DirectoryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filtered = MOCK_RADIOGRAPHERS.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Professional Directory</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Verify the registration status of radiographers practicing in Nigeria to ensure quality care and patient safety.</p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 mb-12 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by name or registration number..." 
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-rrbn-green/10 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="bg-slate-100 text-slate-700 px-6 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-200">
          <Filter size={20} /> Filter By State
        </button>
        <button className="bg-rrbn-green text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((radiographer) => (
          <div key={radiographer.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold text-xl">
                  {radiographer.name.charAt(0)}
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  radiographer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {radiographer.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{radiographer.name}</h3>
              <p className="text-xs font-mono text-slate-500 mb-4">{radiographer.registrationNumber}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <ShieldCheck size={16} className="text-rrbn-green" />
                  <span>{radiographer.specialty}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={16} className="text-rrbn-red" />
                  <span>{radiographer.state} State, Nigeria</span>
                </div>
              </div>

              <button className="w-full py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
                View Full Profile
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
          <Search size={48} className="mx-auto text-slate-300 mb-4" />
          <h3 className="text-lg font-bold text-slate-600">No radiographers found</h3>
          <p className="text-slate-400">Try adjusting your search criteria or filters.</p>
        </div>
      )}
    </div>
  );
};
