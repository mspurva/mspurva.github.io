'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { Award, GraduationCap } from 'lucide-react';

export function CertsEducation() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-primary/5 rounded-2xl">
                <Award className="text-accent" size={32} />
              </div>
              <h2 className="section-title mb-0">Certifications</h2>
            </div>
            
            <div className="space-y-6">
              {siteConfig.certifications.map((cert, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform mr-6" />
                  <div>
                    <h3 className="text-lg font-bold">{cert.title}</h3>
                    <p className="text-sm text-gray-500">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-primary/5 rounded-2xl">
                <GraduationCap className="text-accent" size={32} />
              </div>
              <h2 className="section-title mb-0">Academic Background</h2>
            </div>
            
            <div className="space-y-8">
              {siteConfig.education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/10">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-primary" />
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-gray-400 mt-1">{edu.year}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
