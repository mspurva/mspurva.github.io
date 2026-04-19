'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { CheckCircle2, Wrench } from 'lucide-react';

export function Skills() {
  return (
    <section id="expertise" className="py-24 bg-gray-50 dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="section-title">Core Expertise</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="text-primary dark:text-accent" size={28} />
              <h3 className="text-2xl font-serif font-bold italic">Business domains & Skills</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {siteConfig.skills.core.map((skill, index) => (
                <div key={index} className="glass p-4 rounded-xl border border-gray-100 dark:border-gray-900 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="text-primary dark:text-accent" size={28} />
              <h3 className="text-2xl font-serif font-bold italic">Software Proficiency</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {siteConfig.skills.tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-full text-xs font-bold uppercase tracking-wider hover:border-accent transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
