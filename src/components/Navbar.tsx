'use client';

import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass bg-white/70 dark:bg-black/70 border-b border-gray-300 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="font-serif text-xl font-bold text-primary dark:text-accent">
              PJ<span className="text-accent dark:text-primary">.</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Experience', 'Expertise', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors font-medium text-sm uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
              {/* 
              <a 
                href="/cv.pdf"
                download="CV-11yrs-BusinessAnalyst-Purva-Jain.pdf"
                className="btn-primary py-2 px-4 text-xs uppercase tracking-widest"
              >
                Download CV
              </a> 
              */}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
