
import React from 'react';
import { FileCheck, CreditCard, ClipboardList, Info } from 'lucide-react';

export const RegistrationView: React.FC = () => {
  const [step, setStep] = React.useState(1);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Radiographer Registration</h1>
        <p className="text-slate-600">Complete the steps below to apply for your professional license or renew an existing one.</p>
      </div>

      {/* Progress Stepper */}
      <div className="flex justify-between items-center mb-16 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 -translate-y-1/2"></div>
        {[
          { icon: Info, label: 'Guidelines' },
          { icon: ClipboardList, label: 'Personal Data' },
          { icon: FileCheck, label: 'Upload Credentials' },
          { icon: CreditCard, label: 'Payment' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div 
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                step > i + 1 ? 'bg-rrbn-green text-white' : 
                step === i + 1 ? 'bg-rrbn-yellow text-slate-900 ring-4 ring-rrbn-yellow/20' : 
                'bg-white border-2 border-slate-200 text-slate-400'
              }`}
            >
              {step > i + 1 ? <FileCheck size={20} /> : <item.icon size={20} />}
            </div>
            <span className={`mt-3 text-xs font-bold uppercase tracking-wider ${step === i + 1 ? 'text-rrbn-green' : 'text-slate-400'}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 min-h-[400px]">
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold mb-6 text-slate-800">Registration Guidelines</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-rrbn-green">
                <h4 className="font-bold text-sm mb-1">Eligibility</h4>
                <p className="text-xs text-slate-600">Applicants must possess a BSc or B.Rad in Radiography from an RRBN accredited institution and have completed the mandatory 1-year internship.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-rrbn-green">
                <h4 className="font-bold text-sm mb-1">Required Documents</h4>
                <ul className="text-xs text-slate-600 list-disc ml-4 space-y-1 mt-2">
                  <li>Original Degree Certificate (Scanned)</li>
                  <li>NYSC Discharge/Exemption Certificate</li>
                  <li>Internship Completion Letter</li>
                  <li>Recent Passport Photograph</li>
                  <li>Birth Certificate or Sworn Declaration of Age</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-rrbn-yellow">
                <h4 className="font-bold text-sm mb-1">Fees</h4>
                <p className="text-xs text-slate-600">New Registration: ₦50,000 | Renewal: ₦25,000 annually. Late renewal attracts a 50% surcharge.</p>
              </div>
            </div>
            <div className="mt-12 flex justify-end">
              <button 
                onClick={() => setStep(2)}
                className="bg-rrbn-green text-white px-10 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                Accept & Proceed
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-xl font-bold mb-6 text-slate-800">Personal & Professional Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rrbn-green focus:outline-none" placeholder="e.g. Chinedu Okafor" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rrbn-green focus:outline-none" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Specialty</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rrbn-green focus:outline-none">
                  <option>Medical Imaging</option>
                  <option>Therapy Radiography</option>
                  <option>Sonography</option>
                  <option>Nuclear Medicine</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Practice State</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rrbn-green focus:outline-none">
                  <option>Lagos</option>
                  <option>Abuja (FCT)</option>
                  <option>Kano</option>
                  <option>Rivers</option>
                </select>
              </div>
            </div>
            <div className="mt-12 flex justify-between">
              <button onClick={() => setStep(1)} className="text-slate-500 font-bold px-6 py-3 rounded-lg hover:bg-slate-50">Back</button>
              <button onClick={() => setStep(3)} className="bg-rrbn-green text-white px-10 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">Continue</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in text-center py-10">
            <h2 className="text-xl font-bold mb-6 text-slate-800">Document Management</h2>
            <p className="text-slate-500 mb-8">This module requires camera/file permissions to scan and upload your documents.</p>
            <div className="max-w-sm mx-auto p-12 border-4 border-dashed border-slate-200 rounded-3xl mb-8 flex flex-col items-center">
              <FileCheck size={48} className="text-slate-300 mb-4" />
              <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold">Upload Files</button>
            </div>
            <div className="mt-12 flex justify-between">
              <button onClick={() => setStep(2)} className="text-slate-500 font-bold px-6 py-3 rounded-lg hover:bg-slate-50">Back</button>
              <button onClick={() => setStep(4)} className="bg-rrbn-green text-white px-10 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">Continue to Payment</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-in text-center py-10">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard size={40} />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-slate-800">Secure Payment</h2>
            <p className="text-slate-500 mb-8">You are about to pay the sum of <span className="font-bold text-slate-900">₦50,000.00</span> for Initial Registration.</p>
            <div className="max-w-xs mx-auto space-y-3">
              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3">
                <CreditCard size={20} /> Pay via Remita
              </button>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3">
                Pay via Flutterwave
              </button>
            </div>
            <button onClick={() => setStep(3)} className="mt-8 text-slate-500 font-bold px-6 py-3 rounded-lg hover:bg-slate-50">Back</button>
          </div>
        )}
      </div>
    </div>
  );
};
