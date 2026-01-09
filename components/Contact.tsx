import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('TRANSMISSION SENT SUCCESSFULLY. (Simulated)');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-hack-bg border-t border-hack-green/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-hack-green font-mono text-sm mb-2 blinking-cursor">> INITIATE_COMMS</h3>
              <h2 className="text-3xl md:text-4xl font-tech text-white mb-6">ESTABLISH CONNECTION</h2>
              <p className="text-hack-muted font-mono text-sm mb-8 leading-relaxed">
                Open to encrypted channels for freelance contracts and classified projects. Secure line available below.
              </p>

              <div className="space-y-6 font-mono text-sm">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-hack-green/50 flex items-center justify-center text-hack-green group-hover:bg-hack-green group-hover:text-black transition-colors">
                    @
                  </div>
                  <div>
                    <p className="text-[10px] text-hack-muted uppercase">Target_Address</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-hack-neon transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-hack-green/50 flex items-center justify-center text-hack-green group-hover:bg-hack-green group-hover:text-black transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-hack-muted uppercase">Geo_Coordinates</p>
                    <p className="text-white">REMOTE / WORLDWIDE</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-black border border-hack-green/30 p-8 relative"
            >
              <div className="absolute top-0 left-0 bg-hack-green text-black text-[10px] font-bold px-2 py-1">
                INPUT_TERMINAL
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-hack-green mb-2">VAR NAME =</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-hack-panel border-b border-hack-muted focus:border-hack-neon text-white px-3 py-2 outline-none transition-colors font-mono"
                      placeholder="_"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-hack-green mb-2">VAR EMAIL =</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-hack-panel border-b border-hack-muted focus:border-hack-neon text-white px-3 py-2 outline-none transition-colors font-mono"
                      placeholder="_"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-hack-green mb-2">FUNCTION MESSAGE() {`{`}</label>
                  <textarea 
                    rows={6}
                    required
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-hack-panel border border-hack-muted/30 focus:border-hack-neon text-white px-4 py-3 outline-none transition-colors font-mono resize-none"
                    placeholder="// Type your message here..."
                  />
                  <div className="text-hack-green text-xs mt-1">{`}`}</div>
                </div>
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-3 bg-hack-green text-black font-bold hover:bg-hack-neon transition-colors shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] uppercase tracking-wider text-sm"
                >
                  EXECUTE_SEND()
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;