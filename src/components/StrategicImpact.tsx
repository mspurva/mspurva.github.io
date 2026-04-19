'use client';

import { motion } from 'framer-motion';
import { Cpu, BarChart3, Users, Cloud } from 'lucide-react';

const impacts = [
  {
    title: "AI Enablement SME",
    description: "Leading identification of AI-driven solutions to optimize time-intensive advice workflows.",
    icon: <Cpu className="text-accent" size={32} />,
    initiative: "UniSuper Strategic Roadmap"
  },
  {
    title: "Digital Financial Advice (DFA)",
    description: "Contributing SME expertise to launch UniSuper's tool for risk-profile based guidance.",
    icon: <BarChart3 className="text-accent" size={32} />,
    initiative: "Member Journey Uplift"
  },
  {
    title: "CRM Strategic Transition",
    description: "Serving as CRM Champion for UniSuper's large-scale migration to modern platforms.",
    icon: <Users className="text-accent" size={32} />,
    initiative: "Enterprise Transformation"
  },
  {
    title: "Genesys Cloud Uplift",
    description: "Mapping pain points and gathering requirements to enhance platform usability for FAC.",
    icon: <Cloud className="text-accent" size={32} />,
    initiative: "Platform Innovation"
  }
];

export function StrategicImpact() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">Strategic SME Initiatives</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Currently leading critical transformation projects at UniSuper, bridging the gap between member needs and technological innovation.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border-b-4 border-accent card-hover bg-white dark:bg-black/40 shadow-sm"
            >
              <div className="mb-6">{impact.icon}</div>
              <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                {impact.description}
              </p>
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Initiative</span>
                <p className="text-xs font-medium text-gray-500">{impact.initiative}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
