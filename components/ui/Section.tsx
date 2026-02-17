import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", delay = 0 }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;