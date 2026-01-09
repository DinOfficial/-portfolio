import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Update system clock
    const interval = setInterval(() => {
        const now = new Date();
        setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(interval);
    }
  }, []);

  const navLinks = [
    { name: '// HOME', href: '#home' },
    { name: '// DATA', href: '#about' },
    { name: '// PROJECTS', href: '#projects' },
    { name: '// COMMS', href: '#contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-hack-bg text-hack-text font-mono selection:bg-hack-green selection:text-black">
      {/* Top Status Bar */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-hack-bg/90 backdrop-blur border-hack-green/30' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex justify-between items-center">
          <a href="#" className="text-xl font-tech font-bold text-hack-green tracking-wider group flex items-center gap-2">
            <span className="animate-pulse-fast">[●]</span>
            <span className="group-hover:text-hack-neon transition-colors">SYS.MOHAMMAD</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs font-bold text-hack-muted hover:text-hack-green transition-colors tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-hack-green group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <div className="text-xs text-hack-neon border border-hack-neon/30 px-3 py-1 rounded bg-hack-neon/5">
              SYS_TIME: {time}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-hack-green border border-hack-green p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden bg-hack-panel border-b border-hack-green/50 w-full"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-hack-green font-mono hover:text-hack-neon block px-2 py-2 border-l-2 border-transparent hover:border-hack-neon bg-hack-bg/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-hack-panel border-t border-hack-green/20 py-8 mt-12 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left">
              <span className="text-lg font-tech text-hack-green block mb-2">
                // SYSTEM SHUTDOWN PENDING...
              </span>
              <p className="text-xs text-hack-muted font-mono max-w-xs">{PERSONAL_INFO.tagline}</p>
            </div>
            
            <div className="flex gap-4">
               {['GITHUB', 'LINKEDIN', 'X_CORP'].map((social) => (
                 <a key={social} href="#" className="text-xs font-bold text-hack-text hover:text-hack-neon border border-hack-muted/30 px-3 py-2 hover:border-hack-neon transition-all hover:shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                   {social}
                 </a>
               ))}
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-hack-green/10 text-center text-[10px] text-hack-muted font-mono uppercase">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. ROOT ACCESS GRANTED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;