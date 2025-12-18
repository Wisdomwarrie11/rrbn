
import React from 'react';
import { View } from './types';
import { Layout } from './components/Layout';
import { HomeView } from './components/HomeView';
import { RegistrationView } from './components/RegistrationView';
import { DirectoryView } from './components/DirectoryView';
import { PortalView } from './components/PortalView';
import { ChatAssistant } from './components/ChatAssistant';
import { AboutView } from './components/AboutView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = React.useState<View>(View.HOME);

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return <HomeView setView={setCurrentView} />;
        case View.ABOUT:
          return <AboutView />;
      case View.TRAINING:
      case View.NEWS:
      case View.RESOURCES:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Coming Soon</h2>
            <p className="text-slate-500 max-w-md">The {currentView} module is currently under maintenance. Please check back shortly as we improve our services.</p>
            <button 
              onClick={() => setCurrentView(View.HOME)}
              className="mt-6 bg-rrbn-green text-white px-8 py-3 rounded-xl font-bold"
            >
              Back to Home
            </button>
          </div>
        );
      default:
        return <HomeView setView={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      <div className="animate-fade-in">
        {renderContent()}
      </div>
      <ChatAssistant />
      
      {/* Global CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out;
        }
      `}</style>
    </Layout>
  );
};

export default App;
