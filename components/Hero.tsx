import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const TypingText: React.FC<{ text: string; delay?: number; className?: string }> = ({ text, delay = 0, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentText = '';
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          currentText += text[currentIndex];
          setDisplayedText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Typing speed
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span className={className}>{displayedText}</span>;
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hack-bg">
      {/* Matrix-like Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(34, 197, 94, .3) 25%, rgba(34, 197, 94, .3) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .3) 75%, rgba(34, 197, 94, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 197, 94, .3) 25%, rgba(34, 197, 94, .3) 26%, transparent 27%, transparent 74%, rgba(34, 197, 94, .3) 75%, rgba(34, 197, 94, .3) 76%, transparent 77%, transparent)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-hack-bg z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-5xl">
        <div className="bg-hack-panel/80 backdrop-blur-md border border-hack-green/30 rounded-lg p-2 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
          
          {/* Terminal Window Header */}
          <div className="bg-hack-bg/90 p-2 flex items-center gap-2 border-b border-hack-green/20 mb-4 rounded-t">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <div className="ml-4 text-xs text-hack-muted font-mono">user@mohammad-portfolio: ~/dev/main</div>
          </div>

          <div className="p-4 md:p-8 font-mono">
            <div className="mb-6 text-hack-green">
              <span className="text-hack-neon mr-2">➜</span>
              <span className="text-white">init_portfolio.exe</span>
            </div>

            <div className="space-y-4">
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold font-tech text-white mb-2">
                <TypingText text={`HELLO, I'M ${PERSONAL_INFO.name}`} delay={500} />
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-3 h-8 md:h-12 bg-hack-green ml-2 align-middle"
                />
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="text-xl md:text-2xl text-hack-green font-medium"
              >
                {`> ${PERSONAL_INFO.title}`}
              </motion.div>

              <motion.p 
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 3.5 }}
                 className="text-hack-muted max-w-2xl leading-relaxed border-l-2 border-hack-green/50 pl-4 mt-6"
              >
                {PERSONAL_INFO.tagline}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4 }}
                className="flex gap-4 mt-10"
              >
                <a 
                  href="#projects"
                  className="group relative px-6 py-3 bg-hack-green/10 border border-hack-green text-hack-green font-bold uppercase tracking-wider hover:bg-hack-green hover:text-black transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Run Projects.exe
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </a>
                
                <a 
                  href="#contact"
                  className="px-6 py-3 border border-hack-muted/50 text-hack-muted hover:border-hack-neon hover:text-hack-neon hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all uppercase tracking-wider font-bold"
                >
                  Contact_Me
                </a>
              </motion.div>
            </div>
            
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 5 }}
               className="mt-12 p-4 bg-black/50 border border-hack-muted/20 text-xs text-hack-muted font-mono"
            >
              <p>STATUS: ONLINE</p>
              <p>LOCATION: REMOTE</p>
              <p>STACK: FLUTTER, DART, NEXT.JS</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;