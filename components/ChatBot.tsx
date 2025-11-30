import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '0', role: 'model', text: "Hi! I'm Afaq's AI assistant. Ask me about his projects, research, or experience." }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  // API Key Management for Static Hosting
  const [apiKey, setApiKey] = useState(process.env.API_KEY || '');
  const [showKeyInput, setShowKeyInput] = useState(!process.env.API_KEY);
  const [tempKey, setTempKey] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, showKeyInput]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempKey.trim().length > 10) {
      setApiKey(tempKey.trim());
      setShowKeyInput(false);
    }
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || !isOnline) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Pass the dynamic apiKey to the service
    const reply = await sendMessageToGemini(inputText, apiKey);
    
    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: reply
    };

    setMessages(prev => [...prev, botMsg]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`
          pointer-events-auto bg-[#1a1a1a] border border-gray-700 shadow-2xl rounded-2xl w-80 sm:w-96 mb-4 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right
          ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-12 pointer-events-none'}
        `}
        style={{ maxHeight: '500px', height: '60vh' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 border-b border-gray-600 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-neon-green animate-pulse' : 'bg-red-500'}`}></div>
            <span className="font-bold text-gray-100 text-sm">Afaq's AI Assistant {isOnline ? '' : '(Offline)'}</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            ✕
          </button>
        </div>

        {/* Content Area */}
        {showKeyInput ? (
          <div className="flex-1 p-6 flex flex-col justify-center items-center text-center space-y-4 bg-[#141414]">
            <div className="text-neon-green mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h3 className="text-white font-bold">API Key Required</h3>
            <p className="text-gray-400 text-xs">
              To use the AI features on this demo, please enter a valid Google Gemini API Key. It will not be stored permanently.
            </p>
            <form onSubmit={handleKeySubmit} className="w-full space-y-3">
              <input 
                type="password" 
                placeholder="Paste API Key here..."
                value={tempKey}
                onChange={(e) => setTempKey(e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 rounded p-2 text-white text-sm focus:border-neon-green outline-none"
              />
              <button 
                type="submit" 
                className="w-full bg-neon-green text-black font-bold py-2 rounded hover:bg-neon-green-hover transition-colors text-sm"
              >
                Enable Chat
              </button>
            </form>
            <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:text-neon-green underline">
              Get an API Key
            </a>
          </div>
        ) : (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#141414]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`
                      max-w-[85%] rounded-lg p-3 text-sm
                      ${msg.role === 'user' 
                        ? 'bg-neon-green/20 text-neon-green border border-neon-green/30 rounded-br-none' 
                        : 'bg-gray-800 text-gray-200 border border-gray-700 rounded-bl-none'}
                    `}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 rounded-lg p-3 rounded-bl-none flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              {!isOnline && (
                <div className="flex justify-center my-2">
                  <span className="text-xs text-red-400 bg-red-900/20 px-2 py-1 rounded">Internet connection required for AI</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-gray-800 border-t border-gray-700 flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={!isOnline || isTyping}
                placeholder={isOnline ? "Ask about my research..." : "Offline mode"}
                className="flex-1 bg-gray-900 border border-gray-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button 
                type="submit"
                disabled={!inputText.trim() || isTyping || !isOnline}
                className="bg-neon-green text-gray-900 px-3 py-2 rounded-md font-bold text-sm hover:bg-neon-green-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </form>
          </>
        )}
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          pointer-events-auto bg-neon-green hover:bg-neon-green-hover text-gray-900 rounded-full p-4 shadow-[0_0_15px_rgba(212,255,85,0.4)] transition-all hover:scale-110 active:scale-95 group
          ${isOpen ? 'rotate-90' : 'rotate-0'}
        `}
      >
        {!isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
        ) : (
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

    </div>
  );
};

export default ChatBot;