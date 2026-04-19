'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="section-title">Professional Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
          
          <div className="space-y-16">
            {siteConfig.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start`}
              >
                {/* Content Side */}
                <div className={`${index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}`}>
                  <div className="glass p-8 rounded-2xl border border-gray-100 dark:border-gray-900 shadow-sm relative z-10">
                    <span className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary dark:text-gray-400 font-medium mb-6">{exp.company}</p>
                    
                    <ul className={`space-y-3 text-sm text-gray-600 dark:text-gray-500 leading-relaxed ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3">
                          <span className={`${index % 2 === 0 ? 'hidden' : 'block'} mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0`} />
                          <span className={index % 2 === 0 ? 'md:text-right' : ''}>{highlight}</span>
                          <span className={`${index % 2 === 0 ? 'block' : 'hidden'} mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0`} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dot on line */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-black transform -translate-x-1/2 mt-10 z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
