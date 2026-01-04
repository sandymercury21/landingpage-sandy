
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, MessageSquare, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/gemini';
import { ChatMessage, MessageRole } from '../types';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "Halo! Saya asisten virtual Sandy. Ada yang ingin ditanyakan tentang pengalamannya sejak 2012 atau detail proyek perbankannya?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: MessageRole.USER, text: userMsg }]);
    setIsLoading(true);

    const responseText = await getGeminiResponse(userMsg, messages);
    
    setMessages(prev => [...prev, { role: MessageRole.MODEL, text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button - Moved to bottom-left */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all z-40 transform hover:scale-110 active:scale-95 flex items-center gap-2 group"
      >
        <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
          Tanya Asisten AI
        </span>
      </button>

      {/* Chat Window - Moved to bottom-left */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 w-[350px] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-10 duration-300">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <p className="font-bold text-sm">Sandy's Assistant</p>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === MessageRole.USER 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none flex gap-1 items-center">
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanyakan sesuatu..."
                className="flex-1 px-4 py-2 bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Assistant;
