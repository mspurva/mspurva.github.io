'use client';

import { siteConfig } from '@/config/site';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-6">Let's connect.</h2>
            <p className="text-gray-300 max-w-sm mb-8">
              Open to strategic opportunities, process improvement initiatives, and consulting engagements in the financial services sector.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6 uppercase tracking-widest text-sm text-accent">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail size={16} />
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 uppercase tracking-widest text-sm text-accent">Quick Navigation</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Top</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Professional Journey</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Core Expertise</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Sophisticated Business Analysis & Financial Consultancy</p>
        </div>
      </div>
    </footer>
  );
}
