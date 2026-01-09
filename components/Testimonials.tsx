import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#080808] relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-3xl font-tech font-bold text-white mb-4"
          >
            INTERCEPTED TRANSMISSIONS
          </motion.h2>
          <div className="h-1 w-24 bg-hack-neon mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-hack-panel border border-hack-muted/20 p-6 relative hover:border-hack-neon/50 transition-colors"
            >
              <div className="absolute top-0 right-0 p-2 text-hack-muted/20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.0547 15.1924 14.6602 16.6562 13.918C17.375 13.5547 18.0664 13.3164 18.0664 12C18.0664 10.6836 17.375 10.4453 16.6562 10.082C15.1924 9.33984 14.017 7.94531 14.017 6L14.017 3C14.017 3 21.017 3 21.017 12C21.017 17.5 14.017 21 14.017 21ZM5 21L5 18C5 16.0547 6.17578 14.6602 7.63965 13.918C8.3584 13.5547 9.0498 13.3164 9.0498 12C9.0498 10.6836 8.3584 10.4453 7.63965 10.082C6.17578 9.33984 5 7.94531 5 6L5 3C5 3 12 3 12 12C12 17.5 5 21 5 21Z"/></svg>
              </div>
              
              <div className="flex items-center gap-3 mb-4 border-b border-hack-muted/10 pb-4">
                <div className="w-10 h-10 bg-hack-green/20 text-hack-green border border-hack-green flex items-center justify-center font-bold font-mono">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm font-tech tracking-wider">{t.name.toUpperCase()}</h4>
                  <p className="text-hack-muted text-[10px] uppercase font-mono">{t.role}</p>
                </div>
              </div>

              <p className="text-hack-text font-mono text-xs leading-relaxed opacity-90">
                <span className="text-hack-neon">msg_content: </span>
                "{t.text}"
              </p>
              
              <div className="mt-4 text-[10px] text-hack-green/50 text-right font-mono">
                TRANSMISSION_END
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;