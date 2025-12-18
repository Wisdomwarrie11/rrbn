
import React from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am the RRBN Virtual Assistant. How can I help you today with registration or professional standards?' }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getGeminiResponse([...messages, userMsg]);
    setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="bg-white w-[350px] md:w-[400px] h-[500px] shadow-2xl rounded-2xl border border-slate-200 flex flex-col overflow-hidden mb-4 animate-fade-in-up">
          {/* Header */}
          <div className="bg-rrbn-green p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm leading-none">RRBN Smart Assistant</h4>
                <p className="text-[10px] text-white/70 mt-1">AI Powered Support</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-rrbn-green text-white rounded-tr-none shadow-md' 
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
                }`}>
                  <div className="flex items-center gap-1.5 mb-1 opacity-70">
                    {m.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                    <span className="text-[10px] font-bold uppercase tracking-widest">{m.role}</span>
                  </div>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none animate-pulse flex gap-1 items-center">
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              placeholder="Ask a question..." 
              className="flex-grow text-sm p-2 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rrbn-green"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-rrbn-yellow text-slate-900 p-2 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-rrbn-red text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group relative"
      >
        <MessageCircle size={30} className={isOpen ? 'hidden' : 'block'} />
        <X size={30} className={isOpen ? 'block' : 'hidden'} />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-rrbn-yellow text-slate-900 text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
            AI
          </span>
        )}
      </button>
    </div>
  );
};
