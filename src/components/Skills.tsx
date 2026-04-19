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
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="text-[#967B2C] dark:text-accent" size={20} />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#967B2C] dark:text-accent">
                  Business domains & Skills
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {siteConfig.skills.core.map((skill, index) => (
                <div key={index} className="glass px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 flex items-center gap-2 hover:border-accent transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
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
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="text-[#967B2C] dark:text-accent" size={20} />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#967B2C] dark:text-accent">
                  Software Proficiency
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {siteConfig.skills.tools.map((tool, index) => (
                <div key={index} className="glass px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 flex items-center gap-2 hover:border-accent transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/10 dark:bg-accent/10" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tool}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
