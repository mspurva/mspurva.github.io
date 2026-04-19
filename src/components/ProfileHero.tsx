'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function ProfileHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-[#050505]">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-12 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Business Analyst
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
                {siteConfig.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-10 max-w-2xl text-balance">
                {siteConfig.overview}
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={`mailto:${siteConfig.contact.email}`} className="btn-primary flex items-center gap-2">
                  <Mail size={18} />
                  Contact Purva
                </a>
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent transition-all flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <Image
                src="/purva-profile.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass p-6 rounded-xl shadow-lg border-l-4 border-accent"
            >
              <p className="text-xs uppercase tracking-tighter text-gray-500 mb-1">Experience</p>
              <p className="text-2xl font-bold font-serif">11+ Years</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute top-12 -right-6 glass p-6 rounded-xl shadow-lg border-r-4 border-primary"
            >
              <p className="text-xs uppercase tracking-tighter text-gray-500 mb-1">Certification</p>
              <p className="text-lg font-bold font-serif">ECBA • SAFe 6</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
