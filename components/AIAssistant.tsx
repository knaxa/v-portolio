
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { EXPERIENCE, EDUCATION, PROJECTS } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: "Hi! I'm the NeuralForge AI assistant. Ask me anything about this engineer's background, projects, or technical skills." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user' as const, text: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Exclusively get API Key from process.env as per instructions
      const apiKey = process.env.API_KEY;
      
      if (!apiKey) {
        throw new Error("API key is missing in environment. Ensure process.env.API_KEY is defined.");
      }

      // Create a fresh instance for every request to ensure up-to-date config
      const ai = new GoogleGenAI({ apiKey });
      
      const expSummary = EXPERIENCE.map(e => `${e.role} at ${e.company}`).join(', ');
      const projSummary = PROJECTS.map(p => p.title).join(', ');
      
      // Filter out the initial 'ai' greeting to ensure conversation starts with 'user'
      const apiContents = newMessages
        .filter((_, idx) => idx > 0)
        .map(m => ({
          role: m.role === 'ai' ? 'model' : 'user',
          parts: [{ text: m.text }]
        }));

      const systemInstruction = `You are the NeuralForge Assistant representing Alex Rivera, a Senior AI/ML & Backend Engineer.
      
      CONTEXT:
      - Projects: ${projSummary}
      - Experience: ${expSummary}
      - Education: Stanford (MS AI), Georgia Tech (BS SE).
      - Core Skills: PyTorch, GNNs, Rust, Go, CUDA, Kubernetes, gRPC, Distributed Systems.
      
      PERSONALITY:
      - Professional, technical, and data-driven.
      - Be concise (max 3 sentences).
      - Always refer to the engineer in the first person if appropriate or as "Alex".
      - If asked about contact details, mention the email hello@example.com found in the footer.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: apiContents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      // Use .text property as per latest SDK
      const aiText = response.text || "I was unable to compute a response based on current data streams.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("NeuralForge System Fault:", error);
      let errorMsg = "System Error: Neural uplink unstable. Please verify connection.";
      
      if (error instanceof Error && error.message.includes('API key is missing')) {
        errorMsg = "System Configuration Error: API_KEY missing in host environment. Contact site administrator.";
      }
      
      setMessages(prev => [...prev, { role: 'ai', text: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group ring-4 ring-blue-600/20"
        >
          <MessageSquare className="group-hover:rotate-12 transition-transform" />
        </button>
      ) : (
        <div className="w-[350px] sm:w-[400px] h-[500px] glass rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-white/10 animate-in slide-in-from-bottom-10 text-white">
          <div className="p-4 bg-blue-600 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <Bot size={20} className="animate-pulse" />
              <div className="flex flex-col">
                <span className="font-bold text-xs uppercase mono tracking-tighter">AI_LINK_STABLE</span>
                <span className="text-[8px] opacity-70 mono uppercase">Latent Space Access: Enabled</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded transition-colors">
              <X size={18} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto space-y-4 text-[13px] bg-black/20"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl flex gap-3 ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'glass border-white/10 text-gray-200 rounded-bl-none'
                }`}>
                  <div className="shrink-0 mt-0.5">
                    {m.role === 'ai' ? <Bot size={14} className="text-blue-400" /> : <User size={14} />}
                  </div>
                  <p className="leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass border-white/10 p-3 rounded-2xl rounded-bl-none flex items-center gap-3">
                  <Loader2 size={14} className="animate-spin text-blue-400" />
                  <span className="text-[10px] mono text-gray-500 italic uppercase">Fetching Data...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2 shrink-0 bg-black/30">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Query experience or stack..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500/50 text-white"
              disabled={isLoading}
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-blue-600 rounded-xl hover:bg-blue-500 disabled:opacity-30 transition-all shadow-lg shadow-blue-900/40"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
