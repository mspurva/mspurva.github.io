'use client';

import { Navbar } from "@/components/Navbar";
import { ProfileHero } from "@/components/ProfileHero";
import { StrategicImpact } from "@/components/StrategicImpact";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { CertsEducation } from "@/components/CertsEducation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ProfileHero />
        
        <StrategicImpact />
        
        <Experience />
        
        <Skills />
        
        <CertsEducation />
        
        <Footer />
      </motion.div>
    </main>
  );
}
