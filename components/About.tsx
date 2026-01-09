import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SKILLS } from '../constants';

const SkillBar: React.FC<{ skill: any; index: number }> = ({ skill, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-xs font-mono uppercase">
        <span className="text-hack-neon">[{skill.category}] {skill.name}</span>
        <span className="text-hack-green">{skill.level}%</span>
      </div>
      <div className="h-4 bg-hack-bg border border-hack-muted/30 relative overflow-hidden">
         {/* Grid background inside bar */}
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '4px 100%' }}></div>
         
         <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1, type: "spring" }}
            className={`h-full ${
                skill.category === 'Core' ? 'bg-hack-green' : 
                skill.category === 'Backend/API' ? 'bg-hack-neon' : 'bg-purple-500'
            } opacity-80`}
         />
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-hack-bg relative border-t border-hack-green/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Bio Section */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-hack-panel border border-hack-green/20 p-8 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-50">
                <svg className="w-16 h-16 text-hack-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>

              <h3 className="text-hack-green font-tech text-xl mb-4 border-b border-hack-green/30 pb-2 inline-block">
                // SYSTEM_USER_INFO
              </h3>
              
              <div className="font-mono text-sm leading-7 text-hack-text space-y-4">
                <p>
                  <span className="text-hack-muted">{'>'} IDENTITY:</span> {PERSONAL_INFO.name}
                </p>
                <p>
                  <span className="text-hack-muted">{'>'} ROLE:</span> {PERSONAL_INFO.title}
                </p>
                <p className="mt-4 border-l-2 border-hack-neon pl-4 text-gray-400">
                  {PERSONAL_INFO.about}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-hack-bg border border-hack-green/30 p-4 text-center group hover:bg-hack-green/10 transition-colors">
                  <span className="block text-3xl font-tech text-hack-green group-hover:text-hack-neon transition-colors">20+</span>
                  <span className="text-[10px] text-hack-muted uppercase tracking-widest">Modules Deployed</span>
                </div>
                <div className="bg-hack-bg border border-hack-green/30 p-4 text-center group hover:bg-hack-green/10 transition-colors">
                  <span className="block text-3xl font-tech text-hack-green group-hover:text-hack-neon transition-colors">3+</span>
                  <span className="text-[10px] text-hack-muted uppercase tracking-widest">Years Runtime</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-tech text-xl mb-8 flex items-center">
                <span className="text-hack-neon mr-2">➜</span> PERFORMANCE METRICS
              </h3>
              
              <div className="bg-black/30 p-6 border-l border-r border-hack-muted/20">
                {SKILLS.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>

              <div className="mt-6 flex gap-4 text-[10px] font-mono uppercase text-hack-muted">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-hack-green" /> Core System
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-hack-neon" /> Networking
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500" /> Utilities
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;